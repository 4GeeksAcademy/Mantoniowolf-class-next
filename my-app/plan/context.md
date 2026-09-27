# Implementación — Clon de Airbnb (maqueta homevalues)

Estado: **completado**. Proyecto: `my-app/` (Next.js 16.3.6, App Router, TypeScript, Tailwind CSS v4, ESLint 9). Verificación: `npm run lint` y `npm run build` pasan sin errores ni warnings.

## Rutas implementadas

| Ruta | Página | Notas |
| --- | --- | --- |
| `/` | Home | Estática (prerendered) |
| `/catalog` | Catálogo (resultados) | Estática (prerendered) |
| `/rooms/[id]` | Detalle de alojamiento | Dinámica |

## Estructura de archivos

```
app/
  page.tsx                    # / → <HomeShell/>
  catalog/page.tsx            # /catalog → <CatalogShell/>
  rooms/[id]/page.tsx         # /rooms/[id] → <RoomShell id/> (await params, PageProps<"/rooms/[id]">)
  layout.tsx                  # lang="es", metadata, fuentes Geist
  globals.css                 # @utility scrollbar-hide, keyframes shimmer + .skeleton-shimmer
types/
  listing.ts                  # interfaces TS: Listing, Category, CategoryIconName, Host, Amenity, RoomDetail, SortOrder
lib/
  data.ts                     # datos mock: 18 listados CLP/noche, 8 categorías, detalles por alojamiento (fotos, host, reviews, maxGuests, amenities)
components/
  icons.tsx                   # biblioteca de iconos SVG inline (search, heart, user, star, chevrons, plus/minus, map-pin, categorías, etc.)
  Header.tsx                  # navbar: logo, campo de búsqueda, iconos usuario
  CategoryFilter.tsx          # fila horizontal de categorías (icono + etiqueta), categoría activa resaltada
  Footer.tsx                  # footer 4 columnas + barra inferior
  listing/
    ListingCard.tsx           # tarjeta reutilizable: foto, favorito, título, ★, precio/noche; Link → /rooms/[id]
    ListingGrid.tsx           # grid responsivo compartido (vista vacía incluida)
  skeleton/LoadingSkeleton.tsx
  home/HomeShell.tsx          # 'use client' — Home
  catalog/CatalogShell.tsx    # 'use client' — Catálogo
  catalog/ResultHeader.tsx    # nº resultados + selector de orden
  catalog/MapPlaceholder.tsx  # recuadro gris "Mapa"
  rooms/RoomShell.tsx         # 'use client' — Detalle
  rooms/PhotoGallery.tsx      # galería con índice y botones ◀ ▶
  rooms/RoomHeader.tsx        # título, ★ rating, nº reseñas, ubicación
  rooms/HostRow.tsx           # avatar (iniciales), nombre, años como anfitrión, Superhost
  rooms/AmenitiesGrid.tsx     # grid de pares icono + etiqueta
  rooms/BookingCard.tsx       # precio/noche, contador de huéspedes, total, CTA "Reservar"
  rooms/RoomSkeleton.tsx      # skeleton del detalle en carga
public/images/rooms/
  cabin.svg, beach.svg, mansion.svg, dome.svg, tiny.svg, apartment.svg, lakes.svg
```

## Home (`/`)

- Estado (HomeShell, `'use client'`): `listings: []`, `loading: true`, `query: ""`, `activeCategory: "all"`.
- Carga simulada con `useEffect`: `setTimeout(1000ms)` → asigna `LISTINGS` y `loading=false`; cleanup con `clearTimeout`. Mientras carga, se muestran skeletons.
- Búsqueda en tiempo real: `query` por `useState`, filtrado derivado con `useMemo` (match sobre título o ubicación, case-insensitive) en cada pulsación.
- Filtro de categorías: lista `Todas + 8 categorías` (Playas, Mansiones, Tendencias, Cabañas, Domo, Tiny home, Apartamentos, Lagos); `activeCategory` resalta la selección y filtra la cuadrícula.
- Grid responsivo: 1 columna móvil → 2 (sm) → 3 (lg) → 4 (xl). Sin desbordamiento horizontal.

## Catálogo (`/catalog`)

- `sort` con `useState<SortOrder>` (default `asc`); `useMemo` ordena copia de `LISTINGS` por precio por noche.
- `ResultHeader`: muestra `<n> resultados` + `<select>` con opciones "menor a mayor" / "mayor a menor".
- Reutiliza `ListingCard` (mismo componente que Home; navega a `/rooms/[id]`).
- Mapa: `MapPlaceholder` (recuadro gris con texto "Mapa"), sticky a la derecha desde `lg`; en móvil aparece debajo de la lista.

## Detalle (`/rooms/[id]`)

- Server page `async` que lee `params` (Promise) y pasa `id` a `RoomShell`.
- Carga simulada dependiente de `id` (`useEffect` + `setTimeout` 1s → `findRoomDetail(id)`); skeleton mientras carga; vista "no encontrado" si el id no existe.
- `PhotoGallery`: `useState` guarda el índice de foto actual; botones ◀/▶ con wrap-around; contador "N / total"; imágenes `object-cover`.
- `RoomHeader`: título, ★ rating, nº reseñas, ubicación (MapPin) y botón Guardar.
- `HostRow`: avatar circular con iniciales, "Anfitrión: {nombre}", años como anfitrión y badge Superhost.
- `AmenitiesGrid`: grid 1/2 columnas de pares icono + etiqueta (12 amenities con iconos propios).
- `BookingCard`: precio/noche, contador de huéspedes (`useState`, min 1 / max `maxGuests`, botones con `disabled` en límites), nº de noches derivado de fechas, total y CTA "Reservar" (decorativo).

## Decisiones técnicas

- **Datos**: 100% mock en `lib/data.ts`, ficticios (precios CLP por noche, nombres y ubicaciones chilenas inspiradas en los PDFs). Sin clones de Airbnb.
- **Imágenes**: SVGs locales generados en `public/images/rooms/` (sin dependencias de red ni copyrighted).
- **React**: Server Components por defecto; `'use client'` solo en los shells con estado (HomeShell, CatalogShell, RoomShell, PhotoGallery, BookingCard).
- **Next.js 16**: `params` es una `Promise`; se usó el helper global `PageProps<"/rooms/[id]">` y `LayoutProps<"/">`. Extensiones vía `next/image` sin configuración remota.
- **Diseño**: mobile-first (375 px), breakpoints `sm/lg/xl`; áreas táctiles ≥44px; HTML semántico; labels accesibles; alt descriptivo; estados hover/focus visibles; navegación por teclado.

## Verificación

- `npm run lint` → 0 errores, 0 warnings.
- `npm run build` → compilación OK, typecheck OK, rutas estáticas + `/rooms/[id]` dinámica.

## Pendientes / notas

- El campo de búsqueda del Header solo filtra en el Home (en Catálogo y Detalle está presente pero sin wiring).
- El mapa, filtros adicionales del catálogo y booking son visuales/decorativos (criterio del alcance).
- Los precios y disponibilidad son ficticios y no representan reservas reales.
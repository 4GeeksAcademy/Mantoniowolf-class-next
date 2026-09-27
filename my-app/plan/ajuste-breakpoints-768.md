# Ajuste de breakpoints a 768px (md)

Fecha: 2026-09-24
Estado: implementado

## Contexto

El spec pide un diseño mobile-first: primero para viewport de 375px y
adaptación al escritorio a partir de 768px. La implementación actual usa
`sm:` (640px) como mínimo para pasar a multicolumna, por lo que los layouts
de escritorio aparecen antes de lo estipulado.

## Alcance

Cambiar los breakpoints de grid y layout estructural de `sm:`/`lg:` a `md:`
(768px). Se conservan los breakpoints puramente estéticos (padding, botones
del header, `hover`) que no afectan el requisito mobile-first.

## Archivos y cambios

1. `components/listing/ListingGrid.tsx`
   - `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` → `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
2. `components/skeleton/LoadingSkeleton.tsx`
   - Igual cambio de grid (mantenerlo sincronizado con el estado real).
3. `components/catalog/CatalogShell.tsx`
   - Grid de resultados: `sm:grid-cols-2` → `md:grid-cols-2`.
   - Layout con mapa a la derecha: `lg:flex-row lg:w-80 lg:shrink-0 xl:w-96` → `md:`.
4. `components/catalog/MapPlaceholder.tsx`
   - Sticky lateral: `lg:sticky lg:top-24 lg:min-h-[calc(100dvh-8rem)]` → `md:`.
5. `components/rooms/RoomShell.tsx`
   - Layout desktop (contenido + tarjeta de reserva): `lg:flex lg:items-start lg:gap-8` y `lg:w-80 lg:shrink-0 xl:w-96` → `md:`.
6. `components/rooms/BookingCard.tsx`
   - `lg:mt-0 lg:sticky lg:top-24` → `md:`.
7. `components/rooms/PhotoGallery.tsx`
   - Ratio de foto desktop: `sm:aspect-[2/1]` → `md:aspect-[2/1]`.
8. `components/rooms/RoomSkeleton.tsx`
   - Ratio de foto skeleton: `sm:aspect-[2/1]` → `md:aspect-[2/1]`.

## Verificación

- `npm run lint` → 0 errores.
- `npx tsc --noEmit` → sin errores.
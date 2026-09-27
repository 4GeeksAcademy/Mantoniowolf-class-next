# Start Implementation

Fecha: 2026-09-25

## Objetivo
Implementar la experiencia tipo Airbnb en Next.js siguiendo la consigna funcional de `plan/context1.md` y usando la captura solo como referencia visual. El trabajo se hará mobile-first, con navegación interna sin recargas y reutilizando componentes propios con Tailwind.

## Alcance
Se trabajarán estas tres vistas:

1. Home
2. Catalog
3. Room Detail (`/rooms/[id]`)

## Orden de ejecución

### 1. Base compartida
Ajustar el shell global del sitio para que la UI sea consistente:
- revisar `app/layout.tsx`
- revisar `app/globals.css`
- revisar `components/Header.tsx`
- revisar `components/Footer.tsx`
- revisar `components/icons.tsx`

### 2. Datos y tipos
Preparar una estructura de datos reutilizable para las tres vistas:
- extender `types/listing.ts`
- reorganizar `lib/data.ts`
- asegurar que listings, categorías, fotos, amenities y detalles de habitación puedan compartirse

### 3. Home
Cumplir la consigna de la página de inicio:
- barra superior con logo, búsqueda e iconos
- `useState` para el texto de búsqueda
- filtrado en tiempo real mientras se escribe
- fila horizontal de categorías con estado activo
- `useEffect` con carga simulada de 1 segundo
- grilla responsive de tarjetas
- estado de loading mientras no haya datos

### 4. Catalog
Implementar la vista de catálogo de resultados:
- cabecera con número de resultados
- orden ascendente/descendente por precio con `useState`
- reutilización de tarjetas de Home
- mapa placeholder a la derecha en desktop y debajo en móvil

### 5. Room Detail
Completar la vista de detalle de habitación:
- carga por `id` con `useEffect`
- estado de carga mientras llegan los datos
- galería superior con navegación anterior/siguiente
- cabecera con título, rating, reseñas y ubicación
- fila del anfitrión
- sección de amenities en grilla
- tarjeta de reserva con contador de huéspedes dentro de rango

### 6. Ajuste visual final
Refinar spacing, densidad, jerarquía y responsive behavior para acercarse a la referencia sin romper la estructura funcional pedida por la consigna.

## Criterios de validación
- navegación entre páginas sin recarga
- Home filtrando en vivo por texto y categoría
- Catalog ordenando correctamente por precio
- Room Detail cargando por id y mostrando galería, amenities y booking card
- comportamiento correcto en 375px y en desktop 768px
- sin errores de TypeScript/Next en los archivos tocados

## Notas
- No se usarán librerías de UI preconstruidas.
- Se prioriza la estructura funcional del documento de consigna sobre la referencia visual cuando haya conflicto.
- Si hace falta más similitud visual, se pueden sumar assets nuevos en `public/images`.

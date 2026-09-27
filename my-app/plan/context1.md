

# Clonando la interfaz de Airbnb con Next.js y React

Tu misión es implementar tres vistas de la experiencia de Airbnb en Next.js usando componentes de React: la página de inicio (Home), la página de catálogo (resultados de búsqueda) y la vista de detalle de una habitación.

Esta debe: 
- La navegación entre las tres páginas debe funcionar sin recargar el navegador.
- La implementación debe ser mobile-first. Diseña primero para un viewport de 375px; adapta al escritorio a partir de 768px.
- Organizar carpetas: 
   /app para las reutilizables
   /components para piezas UI reutilizables 
   /types para interfaces de typescript 
   
   Usar tailwind CSS para todos los stilos 
   
IMPORTANTE: No uses ninguna librería de componentes preconstruida (ni shadcn, ni MUI, ni Ant Design, ni Chakra). Usa solo clases de utilidad de Tailwind y tus propios componentes.

IMPORTANTE: Nunca uses una etiqueta <a href="..."> plana para la navegación interna en una aplicación Next.js.


## Descripcion de paginas

1. Pagina de inicio   


- deberia implementar una barra de navegacion superior: logo, campo de busqueda e Iconos del menu de usuario 
- el campo de busqueda debe usar UseState para guardar el texto escrito y filtrar en tiempo real mientras el usuario escribe. La lista de tarjeta en su estado local actualizala con cada pulsacion 
- implementa fila horizontal de filtro por categoria bajo el navbar (icono + etiqueta: Playas, Mansiones, Tendencias, etc...) Usa UseState para guardar categoria activa y resaltarla visualmente
- Implementar cuadricula responsiva de tarjetas de alojamiento. Cada tarjeta debe mostrar: Placeholder de fotos, titulo, precio por noche y valoracion con estrellas.
-Usa useEffect para simular la carga de datos cuando la pagina se monta: Empieza con una lista vacia, pon un estado de carga "true" y tras un segundo fija un setTimeout, asigna los datos y marca la carga como "false". Muestra un indicador de datos mientras la carga no este disponible.
- La cuadricula debe mostrarse en una columna en mobil y en varias bajo la vista Desktop.


1. Pagina Catalogo
Esta debe estar inside a folder /Catalog 
 
 - Implementar cabecera de resultados: numero de resultados y control de orden(asendente / desendente por precio) Usar useState para guardar preferencia seleccionada y mostrar tarjetas seleccionadas en consecuencia.
 - Reutilizar componentes de tarjetas utilizadas en la pagina de inicio 
 - Añade lista de mapa a la derecha de la lista de tarjetas vista (escritorio) o debajo de la tarjeta en vista(movil). Pro defecto muestra un plaholder con estilo -un recuadro gris con el texto "Mapa".


1. /rooms/[id]

- usar useEffect para cargar los datos de la habitacion cuando el componete se monta, usando el id de la url. Simular la carga un setTimeout mostrando un estado de carga mientras los datos no esten disponible.
- implementar galeria de fotos en la parte superior. Usar useState para guardar el indice de fotos actualmente disponible añadir Adelante/Atras botones para navegar por una array  de placeholder de fotos 
- implementar cabecera de alojamiento:titulo, valoracion con estrellas, numero de reseñas y ubicacion.

- implementar la fila de informacion del anfitrion:placeholder de avatar, nombres del anfitrion y años o tiempo como anfitrion.

- Implementar seccion de servicios(amenities): como una cuadricula de pares icono + etiqueta

- Implementar la tarjeta de reserva: precios por noche un contador de huespedes(usa useState para aumentar o disminuir el numero de huespedes dentro de un rango min/max) y un boton CTA 

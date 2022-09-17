## Atomic Design aplicado a React

### Átomos

Los elementos básicos de los que se compone una página, por si solos no son de gran utilidad.

- Iconos
- Botones
- Avatar
- Textos
- Imagen
- Label

### Moléculas

Es un conjunto de **átomos** agrupados entre sí para formar un componente con una determinada funcionalidad básica

- Barra de compartir recursos en redes sociales
- El header de un card
- La info del autor de un determinado artículo
- Un botón con su correspindiente icono
- Una entrada de formulario y su respectivo label o icono flotante

### Organismos

Son componentes que se componen de un conjunto de **moléculas**. Es decir componentes más complejos que cumplen una determinada función en la UI.

- Cards
- Navbar
- Sidebars
- Formularios

### Templates

Se prodría decir que es un conjunto de **organismos** agrupados entre si para definir ciertas secciones de la UI.

- Grid de cards
- Listado de elementos
- Layout

### Pages

Las páginas que serán gestionadas por un Router.

## Alias en Webpack

[Los alias](https://webpack.js.org/configuration/resolve/) es una caracteristica de **Webpack** que nos permiten definir rutas especificas de nuestro proyecto con un nombre más amigable, mismo que puede ser llamado en el momento de la importación de recursos

```
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};

---

import Utility from 'Utilities/utility';
```

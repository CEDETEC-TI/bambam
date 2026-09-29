# BamBam Consultora Informática (demo)

Sitio de una sola página para "BamBam", consultora informática ficticia en Formosa Capital, Argentina, que vende insumos informáticos, asesora a empresas en tecnología y es especialista en impresoras para credenciales. Pieza de demo/portfolio de [CEDETEC Digital](https://cedetec-ti.github.io/cedetec-sistema/), pensada como caso representativo para prospección en el rubro de venta de insumos y equipamiento informático.

No representa un negocio real: nombre, dirección, teléfono, email y contenido son de ejemplo. Repo y sitio completamente independientes de otros proyectos de demo del portfolio: no comparten código, carpeta ni historial.

## Contenido

Sitio estático de un solo archivo (`index.html`, sin dependencias de build ni backend):

- Servicios generales de la consultora (insumos, asesoría, soporte técnico) y una sección destacada de impresión de credenciales.
- **Sección de impresoras**: catálogo con 5 modelos reales de impresoras de credenciales (Entrust Sigma SL1, HID Fargo DTC1500, Zebra ZC100, Zebra ZC300 e IDSHOP DTC S26 SS), con foto real de cada equipo, especificaciones (velocidad, resolución, conectividad, capacidad) y filtro por simple/doble cara. Cada tarjeta tiene un botón de WhatsApp que arma la consulta con el modelo elegido.
- Sección "Nosotros" con estadísticas de la consultora y sección de contacto (dirección, WhatsApp, email, Instagram, horario).

### Sobre las impresoras

Las fotos y especificaciones de las 5 impresoras se tomaron de las páginas oficiales de cada fabricante o de sus distribuidores (Entrust, HID Global/identicard.com, Zebra y IDSHOP Argentina), verificadas antes de publicar. Dos modelos pedidos originalmente como "Fargo ZT100" y "Fargo ZT300" no existen con ese nombre: se corrigieron a **Zebra ZC100** y **Zebra ZC300**, que son los modelos reales de esa gama (Zebra adquirió la línea de impresoras de tarjetas de Fargo). No se muestran precios en el sitio porque no hay un valor de referencia confiable para todos los modelos: cada tarjeta invita a consultar precio y stock por WhatsApp.

## Deploy

Al ser HTML estático, se puede publicar directo en GitHub Pages, Netlify o Vercel apuntando a la raíz del repo.

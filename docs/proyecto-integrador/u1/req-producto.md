# REQ - Producto de Unidad 1

## Producto

**Requerimientos iniciales priorizados y prototipos validados para la gestión comercial.**

## 1. Brief del proyecto

| Elemento | Definición |
|---|---|
| Nombre | CoMarket: gestión de productos y ventas |
| Problema | La tienda registra productos y ventas manualmente, lo que provoca datos incompletos, errores de stock y totales inconsistentes. |
| Objetivo | Construir una aplicación web que gestione productos y ventas con reglas verificables y continuidad hacia MVC y base de datos. |
| Proceso principal | Registrar y consultar una venta con uno o más detalles. |
| Entidades heredadas de POO | `Producto`, `Venta`, `DetalleVenta` y `Usuario`. |
| Incremento de LP1 | `Categoria`, asociada con `Producto`. |
| Actores | Administrador y vendedor. |
| Alcance U1 | Catálogo interactivo de productos y categorías con validaciones y datos temporales. |
| Fuera de alcance U1 | Persistencia real, operación transaccional completa, autenticación y reportes. |

## 2. Requerimientos iniciales

| Código | Requerimiento | Prioridad | Criterio de aceptación |
|---|---|---|---|
| RF-01 | Registrar temporalmente un producto con nombre, precio, stock y categoría. | Alta | El producto válido aparece en el listado. |
| RF-02 | Validar campos obligatorios. | Alta | Los datos incompletos no se registran y generan un mensaje. |
| RF-03 | Validar precio y stock. | Alta | Precio y stock no son negativos; el stock es entero. |
| RF-04 | Mostrar productos con su categoría. | Alta | Cada fila identifica la categoría asociada. |
| RF-05 | Preparar el flujo de venta. | Media | El prototipo identifica cliente, fecha, detalles, total y estado. |

## 3. Reglas iniciales

| Código | Regla |
|---|---|
| RN-01 | Todo producto tiene nombre, precio, stock y una categoría existente. |
| RN-02 | El precio y el stock no pueden ser negativos. |
| RN-03 | Una venta contiene al menos un detalle. |
| RN-04 | Cada detalle referencia un producto y una cantidad mayor que cero. |
| RN-05 | El total de la venta es la suma de los subtotales. |
| RN-06 | La seguridad se implementará en LP1 U3; no forma parte de U1 ni U2. |

## 4. Trazabilidad inicial

| Requerimiento | Dato o entidad BD1 | Evidencia LP1 |
|---|---|---|
| RF-01 | producto | Formulario de producto |
| RF-02 | restricciones `NOT NULL` | Mensajes de validación |
| RF-03 | producto.precio, producto.stock | Validación numérica |
| RF-04 | categoria, producto.id_categoria | Selector y tabla de productos |
| RF-05 | venta, detalle_venta | Prototipo del flujo transaccional |

## 5. Validación del corte

| Observación | Decisión |
|---|---|
| Se conserva el dominio construido en POO. | Aprobado |
| LP1 agrega `Categoria` sin reemplazar las entidades existentes. | Aprobado |
| La persistencia se inicia en U2 mediante JDBC y DAO. | Aprobado |
| La autenticación se implementa en U3. | Aprobado |

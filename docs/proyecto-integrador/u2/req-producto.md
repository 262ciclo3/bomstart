# REQ - Producto de Unidad 2

## Producto

**Modelo funcional y requerimientos trazables para Producto, Categoria y Venta–DetalleVenta.**

## 1. Historias de usuario

| Código | Historia | Prioridad | Criterio de aceptación |
|---|---|---|---|
| HU-01 | Como administrador, quiero gestionar productos para mantener el catálogo. | Alta | El CRUD persiste nombre, precio, stock y categoría. |
| HU-02 | Como vendedor, quiero registrar una venta con varios detalles. | Alta | Cabecera, detalles y stock se actualizan atómicamente. |
| HU-03 | Como vendedor, quiero consultar ventas y sus detalles. | Alta | La aplicación muestra cabecera, productos, cantidades y total. |
| HU-04 | Como responsable, quiero anular una venta. | Alta | El estado cambia a ANULADA y el stock se repone. |
| HU-05 | Como responsable, quiero filtrar y resumir ventas. | Media | Los filtros y agregaciones devuelven resultados consistentes. |
| HU-06 | Como administrador, quiero controlar el acceso. | Media | Requerimiento documentado en U2 e implementado en LP1 U3. |

## 2. Caso de uso principal

| Elemento | Descripción |
|---|---|
| Caso de uso | Registrar venta |
| Actor | Vendedor |
| Precondición | Existen productos activos con stock. |
| Flujo | Ingresar cliente, agregar productos y cantidades, validar, calcular y confirmar. |
| Postcondición | Venta y detalles persistidos; stock descontado; total consistente. |

### Flujos alternos

| Código | Situación | Respuesta |
|---|---|---|
| FA-01 | Venta sin detalles | Se rechaza la operación. |
| FA-02 | Cantidad inválida | Se muestra validación y no se persiste. |
| FA-03 | Stock insuficiente | Se cancela toda la transacción. |
| FA-04 | Error al guardar un detalle | Se ejecuta rollback de cabecera, detalles y stock. |
| FA-05 | Venta ya anulada | Se rechaza una segunda anulación. |

## 3. Reglas de negocio

| Código | Regla | Evidencia esperada |
|---|---|---|
| RN-01 | Todo producto pertenece a una categoría existente. | Selector y clave foránea. |
| RN-02 | Toda venta contiene al menos un detalle. | Validación de servicio. |
| RN-03 | La cantidad es mayor que cero y no supera el stock. | Validación y prueba de error. |
| RN-04 | El subtotal es cantidad × precio unitario. | Cálculo verificable. |
| RN-05 | El total es la suma de subtotales. | Consulta de consistencia. |
| RN-06 | Registrar o anular una venta es una operación atómica. | Commit y rollback. |

## 4. Trazabilidad REQ–BD1–LP1

| Requerimiento | Tablas | Módulo LP1 | Prueba |
|---|---|---|---|
| RF-01 CRUD Producto | producto, categoria | ProductoController / DAO | CRUD válido e inválido |
| RF-02 Registrar venta | venta, detalle_venta, producto | VentaController / Service / DAO | Venta con dos detalles |
| RF-03 Anular venta | venta, detalle_venta, producto | VentaService | Reposición de stock |
| RF-04 Consultar ventas | venta, detalle_venta, producto | ReporteController / DAO | Filtros y detalle |
| RF-05 Resumir ventas | venta, detalle_venta | ReporteService | Totales por fecha o producto |

## 5. Alcance de seguridad

U2 puede conservar `usuario` en el modelo y datos de prueba, pero no exige login, sesión ni permisos. Esas funciones se implementan en S13 y protegen en S14 las consultas y operaciones ya construidas.

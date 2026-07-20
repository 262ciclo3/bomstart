# BD1 - Producto de Unidad 3

## Producto

**Base de datos relacional implementada, integrada y validada.**

## Componentes finales

| Componente | Evidencia esperada |
|---|---|
| Modelo ER final | Entidades, relaciones, cardinalidades y reglas. |
| Modelo lógico | Tablas, claves primarias, claves foráneas y restricciones. |
| Diccionario de datos | Campos, tipos, nulidad, claves, descripción y reglas. |
| Scripts DDL | Creación de tablas, claves y restricciones. |
| Scripts DML | Datos de prueba coherentes con casos de uso. |
| Consultas | Listados, filtros, reportes y agregaciones. |
| Validación | Pruebas de integridad, restricciones y consultas. |

## Archivos de referencia

| Archivo | Propósito |
|---|---|
| [validation.sql](sql/validation.sql) | Pruebas de integridad, consultas y reportes finales. |
| [final-report-queries.sql](sql/final-report-queries.sql) | Consultas finales para sustentación. |

## Evidencia de integración

| BD1 | REQ | LP1 |
|---|---|---|
| producto y categoria | RF de catálogo | CRUD y objetos relacionados. |
| venta y detalle_venta | Caso de uso transaccional | Formulario cabecera–detalle. |
| usuario y venta.id_usuario | Requerimiento de seguridad | Sesión y trazabilidad de la venta. |
| Restricciones | Reglas de negocio | Validaciones de entrada. |
| Consultas SQL | Requerimientos de consulta | Vistas de listado y filtro. |
| Reportes/agregaciones | Necesidad de información | Vista o pantalla de reporte. |

## Cierre BD1

BD1 está completo cuando la base de datos no solo existe, sino que sostiene la aplicación, conserva integridad, responde consultas del negocio y puede ser explicada desde los requerimientos.

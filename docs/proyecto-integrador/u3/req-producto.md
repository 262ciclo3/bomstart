# REQ - Producto de Unidad 3

## Producto

**SRS documentado basado en IEEE 29148, validado y aceptado.**

## Componentes del SRS final

| Sección | Evidencia esperada |
|---|---|
| Introducción | Propósito, alcance, definiciones y referencias. |
| Descripción general | Contexto, usuarios, restricciones, supuestos y dependencias. |
| Requerimientos funcionales | RF completos, verificables y priorizados. |
| Requerimientos no funcionales | Seguridad, usabilidad, mantenibilidad, rendimiento u otros verificables. |
| Reglas de negocio | Reglas que gobiernan el proceso principal. |
| Casos de uso | Actores, precondiciones, flujo principal y alternos. |
| Prototipos | Pantallas o vistas asociadas al flujo principal. |
| Trazabilidad | Relación RF/RNF-regla-tabla-módulo-prueba. |
| Validación | Observaciones, acuerdos, aceptación y pendientes. |

## Matriz final de trazabilidad

| Requerimiento | Regla o caso de uso | Evidencia BD1 | Evidencia LP1 | Prueba |
|---|---|---|---|---|
| RF-01 Registrar operación | CU-01 | Tabla principal y detalle | Formulario MVC | Registro válido |
| RF-02 Validar datos | RN-01/RN-02 | Restricciones y nulidad | Validaciones de formulario | Datos inválidos |
| RF-03 Consultar registros | CU-02 | Consulta SQL | Vista de listado/filtro | Consulta por estado |
| RF-04 Actualizar estado | CU-03 | Campo estado y regla | Acción del módulo | Cambio de estado |
| RF-05 Reporte básico | CU-04 | Consulta agregada | Vista de reporte | Totales correctos |

## Validación y aceptación

| Elemento | Evidencia |
|---|---|
| Revisión de alcance | El alcance final coincide con el producto implementado. |
| Revisión de RF/RNF | Cada requerimiento tiene evidencia en BD1 y LP1. |
| Revisión de reglas | Las reglas están implementadas o justificadas. |
| Aceptación del producto | Acta o matriz de conformidad del equipo/docente. |

## Cierre REQ

REQ está completo cuando el SRS puede explicar qué se construyó, por qué se construyó, cómo se valida y dónde se evidencia en la base de datos y la aplicación.

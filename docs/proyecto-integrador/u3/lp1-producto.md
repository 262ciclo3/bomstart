# LP1 - Producto de Unidad 3

## Producto

**Sistema Web MVC Empresarial integrado, probado y sustentado.**

## Componentes finales

| Componente | Evidencia esperada |
|---|---|
| Arquitectura MVC | Rutas, controladores, servicios, entidades y DAO. |
| Persistencia | Conexión nativa mediante JDBC y operaciones DAO. |
| Catálogo | CRUD de `Producto` y gestión de `Categoria–Producto`. |
| Operación | Registro y anulación de `Venta–DetalleVenta` con consistencia de stock y total. |
| Consultas | Búsqueda, filtros, ordenamiento, agregaciones y reportes web. |
| Seguridad | Login, hash de contraseñas, sesión, roles y protección de rutas. |
| Validaciones | Validaciones de entrada y mensajes de error. |
| Reportes | Consulta o salida relevante para el negocio. |
| Pruebas | Casos válidos, inválidos, integración y correcciones. |

## Plan de pruebas final

| Tipo | Caso | Resultado esperado |
|---|---|---|
| Funcional | Registrar una venta con dos detalles. | Cabecera, detalles, stock y total quedan consistentes. |
| Validación | Enviar datos incompletos o inválidos. | Se muestra error y no se guarda. |
| Consulta | Buscar o filtrar registros. | La vista muestra resultados correctos. |
| Integración | Ejecutar `Venta–DetalleVenta` desde la vista hasta la base. | La base refleja toda la operación o ninguna parte. |
| Seguridad | Ingresar sin sesión a ruta protegida. | Acceso bloqueado o redirigido. |
| Reporte | Generar consulta/resumen. | Totales o resultados correctos. |

## Bitácora de estabilización

| Hallazgo | Corrección | Evidencia |
|---|---|---|
| Validación incompleta | Se agregó regla en formulario y servicio. | Caso inválido probado. |
| Consulta no filtraba correctamente | Se corrigió condición SQL o repositorio. | Captura antes/después. |
| Relación con BD inconsistente | Se ajustó clave foránea o modelo. | Script actualizado. |
| Pantalla no seguía prototipo | Se alineó vista con SRS. | Captura final. |

## Cierre LP1

LP1 está completo cuando el sistema MVC permite gestionar `Producto–Categoria`, registrar y anular `Venta–DetalleVenta`, usar datos persistidos mediante JDBC y DAO, consultar información, autenticar usuarios, proteger rutas, validar errores y sustentar cómo cada módulo responde al SRS y a la base de datos.

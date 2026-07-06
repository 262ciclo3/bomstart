# LP1 - Producto de Unidad 3

## Producto

**Sistema Web MVC Empresarial integrado, probado y sustentado.**

## Componentes finales

| Componente | Evidencia esperada |
|---|---|
| Arquitectura MVC | Rutas, controladores, servicios, modelos, repositorios o equivalentes. |
| Persistencia | Conexión a base de datos y operaciones sobre entidades del proyecto. |
| Formularios | Registro, edición o flujo transaccional principal. |
| Consultas | Listado, búsqueda, filtros, ordenamiento o paginación. |
| Seguridad básica | Login, sesión, roles o protección de rutas según alcance. |
| Validaciones | Validaciones de entrada y mensajes de error. |
| Reportes | Consulta o salida relevante para el negocio. |
| Pruebas | Casos válidos, inválidos, integración y correcciones. |

## Plan de pruebas final

| Tipo | Caso | Resultado esperado |
|---|---|---|
| Funcional | Registrar entidad o transacción principal. | Se guarda y aparece en el listado. |
| Validación | Enviar datos incompletos o inválidos. | Se muestra error y no se guarda. |
| Consulta | Buscar o filtrar registros. | La vista muestra resultados correctos. |
| Integración | Ejecutar flujo MVC con base de datos. | La base refleja la operación. |
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

LP1 está completo cuando el sistema MVC permite ejecutar el flujo principal, usar datos persistidos, consultar información, validar errores y sustentar cómo cada módulo responde al SRS y a la base de datos.

# LP1 - Producto de Unidad 1

## Producto

**Pagina web interactiva con plantillas, formulario, JavaScript, DOM, eventos y validaciones.**

La demo implementa el primer flujo definido por REQ y usa los campos derivados del modelo lógico de BD1. Como continuidad de POO, parte de `Producto` (`nombre`, `precio` y `stock`) e incorpora `Categoria` como nuevo incremento de LP1. Todavía no utiliza base de datos ni arquitectura MVC; eso corresponde a la Unidad 2.

## Incremento inicial de LP1

| Sesión | Incremento del dominio | Evidencia web |
|---|---|---|
| S1 | Se recupera `Producto` del modelo desarrollado en POO. | Estructura del proyecto y representación inicial del recurso Producto. |
| S2 | Se agrega `Categoria` y la relación `Categoria 1 : * Producto`. | Navegación y vistas responsive de categorías y productos; cada producto muestra su categoría. |

En estas sesiones la relación se representa con HTML, CSS y Bootstrap. La persistencia, los controladores y el acceso a datos se incorporan en U2.

## Demo ejecutable

[Abrir demo LP1 U1](demo-lp1/index.html)

Antes de implementar, el flujo y el esbozo de pantalla se validan en [Prototipos U1](prototipos-u1.md).

## Que demuestra

- Estructura HTML semantica.
- Estilos CSS separados.
- Catálogo de productos con nombre, precio, stock y categoría.
- Formulario temporal de `Producto`.
- Selección de una categoría existente para el producto.
- Validaciones del lado cliente.
- Manejo de eventos con JavaScript.
- Registro temporal de productos en memoria del navegador.
- Renderizado de una tabla mediante DOM.
- Resumen de productos, stock y categorías utilizadas.

## Trazabilidad con REQ y BD1

| Elemento LP1 | Origen REQ | Origen BD1 |
|---|---|---|
| Formulario de producto | RF-01 | producto |
| Selector de categoría | Continuidad LP1 S02 | categoria y producto.id_categoria |
| Validacion de campos obligatorios | RF-02 | Campos con nulo = No |
| Validación de precio y stock | RF-03 | producto.precio y producto.stock |
| Tabla de productos | RF-04 | producto y categoria |
| Resumen del catálogo | RF-05 | producto.stock y producto.id_categoria |

## Criterio de aceptacion de la demo

La demo cumple el corte U1 si:

- Registra productos válidos con categoría sin recargar la página.
- Bloquea nombres vacíos, precios negativos, stock inválido o categoría ausente.
- Muestra mensajes claros al usuario.
- Actualiza la tabla y el resumen.
- Mantiene coherencia con el brief, el prototipo y el modelo de datos.

## Casos de prueba de la demo

| Caso | Accion | Resultado esperado |
|---|---|---|
| Producto válido | Completar nombre, precio, stock y categoría. | Se agrega una fila, se limpia el formulario y se actualiza el resumen. |
| Categoría vacía | No seleccionar categoría. | Se muestra un mensaje y no se registra el producto. |
| Nombre vacío | Dejar el nombre vacío. | Se muestra un mensaje y no se registra el producto. |
| Precio negativo | Ingresar precio menor que cero. | Se rechaza el registro. |
| Stock inválido | Ingresar stock negativo o decimal. | Se rechaza el registro. |

## Como debe adaptarlo cada grupo

Cada grupo debe cambiar el dominio, entidades y campos segun su proyecto, manteniendo la misma estructura:

- Una entidad principal ya trabajada en POO.
- Un objeto relacionado incorporado en LP1.
- Reglas de validacion visibles.
- Listado temporal.
- Evidencia de que REQ, BD1 y LP1 trabajan sobre el mismo flujo.

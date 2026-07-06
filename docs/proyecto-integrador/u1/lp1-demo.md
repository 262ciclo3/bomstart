# LP1 - Producto de Unidad 1

## Producto

**Pagina web interactiva con plantillas, formulario, JavaScript, DOM, eventos y validaciones.**

La demo implementa el primer flujo definido por REQ y usa los campos derivados del modelo logico de BD1. Todavia no utiliza base de datos ni arquitectura MVC; eso corresponde a la Unidad 2.

## Demo ejecutable

[Abrir demo LP1 U1](demo-lp1/index.html)

Antes de implementar, el flujo y el esbozo de pantalla se validan en [Prototipos U1](prototipos-u1.md).

## Que demuestra

- Estructura HTML semantica.
- Estilos CSS separados.
- Formulario del proceso principal.
- Validaciones del lado cliente.
- Manejo de eventos con JavaScript.
- Registro temporal de pedidos en memoria del navegador.
- Renderizado de una tabla mediante DOM.
- Resumen de pedidos y unidades.

## Trazabilidad con REQ y BD1

| Elemento LP1 | Origen REQ | Origen BD1 |
|---|---|---|
| Formulario de pedido | RF-01 | pedido, cliente, producto, detalle_pedido |
| Validacion de campos obligatorios | RF-02 | Campos con nulo = No |
| Validacion de cantidad | RF-03 | detalle_pedido.cantidad |
| Tabla de pedidos | RF-04 | pedido y detalle_pedido |
| Resumen de pedidos | RF-05 | pedido.cantidad |

## Criterio de aceptacion de la demo

La demo cumple el corte U1 si:

- Registra pedidos validos sin recargar la pagina.
- Bloquea datos incompletos o cantidad invalida.
- Muestra mensajes claros al usuario.
- Actualiza la tabla y el resumen.
- Mantiene coherencia con el brief, el prototipo y el modelo de datos.

## Casos de prueba de la demo

| Caso | Accion | Resultado esperado |
|---|---|---|
| Pedido valido | Completar todos los campos con cantidad mayor que cero y registrar. | Se agrega una fila a la tabla, se limpian los campos y se actualiza el resumen. |
| Cliente vacio | Dejar el cliente vacio y registrar. | Se muestra un mensaje de validacion y no se registra el pedido. |
| Cantidad cero | Ingresar cantidad `0` y registrar. | Se muestra el mensaje de cantidad invalida. |
| Fecha vacia | Dejar la fecha sin completar y registrar. | Se muestra un mensaje de validacion y no se registra el pedido. |
| Prioridad urgente | Registrar un pedido con prioridad urgente. | La prioridad aparece diferenciada visualmente en la tabla. |

## Como debe adaptarlo cada grupo

Cada grupo debe cambiar el dominio, entidades y campos segun su proyecto, manteniendo la misma estructura:

- Una entidad transaccional principal.
- Dos o mas datos asociados al proceso.
- Reglas de validacion visibles.
- Listado temporal.
- Evidencia de que REQ, BD1 y LP1 trabajan sobre el mismo flujo.

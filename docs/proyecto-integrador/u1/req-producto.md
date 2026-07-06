# REQ - Producto de Unidad 1

## Producto

**Requerimientos iniciales priorizados y prototipos validados.**

Este producto deja claro que el equipo comprende el problema, conoce a los actores, delimita el alcance y puede explicar que funcionalidades iniciales necesita el sistema.

## 1. Brief del proyecto

| Elemento | Definicion |
|---|---|
| Nombre del proyecto | Gestion inicial de pedidos para una tienda local |
| Problema | La tienda registra pedidos manualmente, lo que genera datos incompletos, errores en cantidades y dificultad para saber que pedidos estan pendientes o atendidos. |
| Objetivo | Construir una aplicacion web que permita registrar pedidos, validar datos basicos, consultar pedidos registrados y preparar la base para una gestion MVC con persistencia. |
| Proceso principal | Registro y seguimiento inicial de pedidos. |
| Entidad transaccional principal | Pedido. |
| Entidades de apoyo | Cliente y producto. |
| Usuarios principales | Administrador, vendedor y encargado de atencion. |
| Alcance U1 | Registro interactivo de pedidos en una pagina web, con validaciones y listado temporal. |
| Fuera de alcance U1 | Persistencia real en base de datos, autenticacion, reportes avanzados y gestion completa de inventario. |

## 2. Stakeholders

| Stakeholder | Necesidad | Interes en el sistema |
|---|---|---|
| Administrador | Tener visibilidad de pedidos registrados. | Controlar el flujo de atencion. |
| Vendedor | Registrar pedidos rapidamente y sin errores basicos. | Reducir omisiones en los datos. |
| Encargado de atencion | Ver pedidos pendientes y priorizarlos. | Organizar la atencion diaria. |
| Cliente | Que su pedido sea registrado correctamente. | Recibir una atencion oportuna. |

## 3. Alcance funcional inicial

El primer incremento del sistema permite:

- Registrar un pedido con datos del cliente, producto, cantidad, fecha y prioridad.
- Validar que los campos obligatorios esten completos.
- Validar que la cantidad sea mayor que cero.
- Mostrar los pedidos registrados en una tabla temporal.
- Calcular el total de pedidos y unidades registradas.
- Preparar los campos que luego usara BD1 para el modelo logico.

## 4. Requerimientos funcionales priorizados

| Codigo | Requerimiento funcional | Prioridad | Criterio de aceptacion |
|---|---|---|---|
| RF-01 | El sistema debe registrar un pedido con cliente, producto, cantidad, fecha y prioridad. | Alta | Al completar datos validos, el pedido aparece en el listado temporal. |
| RF-02 | El sistema debe validar campos obligatorios antes de registrar el pedido. | Alta | Si falta un campo obligatorio, se muestra un mensaje y no se registra el pedido. |
| RF-03 | El sistema debe validar que la cantidad sea mayor que cero. | Alta | Si la cantidad es cero o negativa, se muestra un mensaje de error. |
| RF-04 | El sistema debe listar los pedidos registrados durante la sesion. | Media | Cada pedido registrado aparece en una tabla con sus datos principales. |
| RF-05 | El sistema debe mostrar resumen de pedidos y unidades. | Media | El resumen se actualiza despues de cada registro valido. |

## 5. Requerimientos no funcionales iniciales

| Codigo | Requerimiento no funcional | Criterio de aceptacion |
|---|---|---|
| RNF-01 | La interfaz debe ser clara y usable en pantalla de escritorio y movil. | El formulario y la tabla se visualizan correctamente en diferentes anchos de pantalla. |
| RNF-02 | La validacion debe responder sin recargar la pagina. | Los mensajes aparecen inmediatamente al enviar el formulario. |
| RNF-03 | El codigo debe estar organizado para evolucionar a MVC. | HTML, CSS y JavaScript se encuentran separados. |

## 6. Reglas de negocio iniciales

| Codigo | Regla |
|---|---|
| RN-01 | Un pedido debe tener un cliente identificado. |
| RN-02 | Un pedido debe contener un producto y una cantidad mayor que cero. |
| RN-03 | La prioridad puede ser normal, alta o urgente. |
| RN-04 | Un pedido urgente debe poder distinguirse visualmente en el listado. |

## 7. Prototipo textual

Pantalla: **Registro de pedidos**

El esbozo funcional y los diagramas del prototipo se encuentran en [Prototipos U1](prototipos-u1.md).

```text
---------------------------------------------------------
Gestion de pedidos
---------------------------------------------------------
Cliente:        [________________________]
Producto:       [________________________]
Cantidad:       [____]
Fecha entrega:  [____/____/____]
Prioridad:      [Normal v]

[Registrar pedido] [Limpiar]

Resumen:
Pedidos registrados: 0
Unidades solicitadas: 0

Listado:
Cliente | Producto | Cantidad | Fecha | Prioridad
---------------------------------------------------------
```

## 8. Matriz de trazabilidad U1

| Requerimiento | Dato o entidad BD1 | Elemento LP1 |
|---|---|---|
| RF-01 | Pedido, Cliente, Producto | Formulario de registro |
| RF-02 | Campos obligatorios del diccionario | Validacion JavaScript |
| RF-03 | pedido.cantidad | Validacion numerica |
| RF-04 | Pedido | Tabla de pedidos |
| RF-05 | Pedido.cantidad | Tarjetas de resumen |

## 9. Validacion inicial

| Observacion | Acuerdo | Estado |
|---|---|---|
| El usuario necesita ver rapidamente los pedidos urgentes. | Agregar prioridad y resaltar prioridad urgente. | Aprobado |
| No se requiere login en U1. | La autenticacion se trabajara en LP1 Unidad 2. | Aprobado |
| El producto debe estar preparado para base de datos. | BD1 definira modelo logico y diccionario desde U1. | Aprobado |

# Prototipos U1

## Proposito

Los prototipos de Unidad 1 permiten validar el flujo principal antes de implementar. No son disenos finales de interfaz; son esbozos funcionales para que REQ, BD1 y LP1 trabajen sobre la misma solucion.

## Flujo funcional inicial

```mermaid
flowchart TB
    A[Inicio] --> B[Ingresar datos del pedido]
    B --> C{Datos completos?}
    C -- No --> D[Mostrar mensaje de validacion]
    D --> B
    C -- Si --> E{Cantidad mayor que cero?}
    E -- No --> F[Mostrar error de cantidad]
    F --> B
    E -- Si --> G[Registrar pedido temporal]
    G --> H[Actualizar resumen]
    H --> I[Mostrar pedido en listado]
    I --> J[Fin del flujo U1]
```

## Esbozo de pantalla principal

```mermaid
flowchart TB
    subgraph P["Pantalla: Gestion inicial de pedidos"]
        H["Encabezado<br/>Gestion inicial de pedidos<br/>Descripcion breve del modulo"]
        F["Formulario<br/>Cliente<br/>Producto<br/>Cantidad<br/>Fecha de entrega<br/>Prioridad"]
        A["Acciones<br/>Registrar pedido<br/>Limpiar"]
        R["Resumen<br/>Pedidos registrados<br/>Unidades solicitadas<br/>Pedidos urgentes"]
        T["Listado temporal<br/>Cliente | Producto | Cantidad | Fecha | Prioridad"]
    end

    H --> F
    F --> A
    A --> R
    R --> T
```

## Esbozo de comportamiento

```mermaid
flowchart LR
    A[Usuario completa formulario] --> B[JavaScript captura submit]
    B --> C[Validar campos obligatorios]
    C --> D[Validar cantidad]
    D --> E[Crear objeto pedido]
    E --> F[Agregar a arreglo temporal]
    F --> G[Renderizar tabla]
    G --> H[Actualizar resumen]
```

## Prototipo textual

```text
---------------------------------------------------------
Gestion inicial de pedidos
---------------------------------------------------------
Cliente:        [________________________]
Producto:       [________________________]
Cantidad:       [____]
Fecha entrega:  [____/____/____]
Prioridad:      [Normal v]

[Registrar pedido] [Limpiar]

Resumen:
+----------------------+----------------------+----------------+
| Pedidos registrados  | Unidades solicitadas | Urgentes       |
| 0                    | 0                    | 0              |
+----------------------+----------------------+----------------+

Listado temporal:
+----+----------+----------+----------+------------+----------+
| #  | Cliente  | Producto | Cantidad | Fecha      | Prioridad |
+----+----------+----------+----------+------------+----------+
|    |          |          |          |            |          |
+----+----------+----------+----------+------------+----------+
```

## Relacion con REQ, BD1 y LP1

| Elemento del prototipo | REQ | BD1 | LP1 |
|---|---|---|---|
| Cliente | RF-01, RN-01 | cliente.nombre | Campo de texto obligatorio |
| Producto | RF-01, RN-02 | producto.nombre | Campo de texto obligatorio |
| Cantidad | RF-01, RF-03 | detalle_pedido.cantidad | Campo numerico validado |
| Fecha de entrega | RF-01 | pedido.fecha_entrega | Campo tipo fecha |
| Prioridad | RN-03, RN-04 | pedido.prioridad | Selector y distintivo visual |
| Listado temporal | RF-04 | pedido, detalle_pedido | Tabla renderizada con DOM |
| Resumen | RF-05 | pedido.cantidad | Tarjetas calculadas con JavaScript |

## Criterios de validacion del prototipo

- El flujo permite registrar el proceso principal definido en el brief.
- Los campos del prototipo existen en el modelo de datos inicial.
- Las validaciones del prototipo responden a reglas o requerimientos.
- La pantalla puede implementarse en LP1 sin inventar campos fuera de REQ y BD1.
- El prototipo permite explicar que falta para Unidad 2: persistencia, MVC, seguridad y consultas.

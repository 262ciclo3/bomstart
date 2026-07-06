CREATE TABLE cliente (
    id_cliente INTEGER PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    documento VARCHAR(20)
);

CREATE TABLE producto (
    id_producto INTEGER PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    precio_referencial DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE pedido (
    id_pedido INTEGER PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    fecha_entrega DATE NOT NULL,
    prioridad VARCHAR(20) NOT NULL DEFAULT 'normal',
    estado VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    CONSTRAINT ck_pedido_prioridad
        CHECK (prioridad IN ('normal', 'alta', 'urgente')),
    CONSTRAINT ck_pedido_estado
        CHECK (estado IN ('pendiente', 'atendido', 'anulado'))
);

CREATE TABLE detalle_pedido (
    id_detalle INTEGER PRIMARY KEY,
    id_pedido INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    CONSTRAINT fk_detalle_pedido
        FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    CONSTRAINT fk_detalle_producto
        FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
    CONSTRAINT ck_detalle_cantidad
        CHECK (cantidad > 0)
);

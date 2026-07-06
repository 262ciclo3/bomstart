INSERT INTO cliente (id_cliente, nombre, documento) VALUES
(1, 'Maria Quispe', '70010001'),
(2, 'Jose Mamani', '70010002'),
(3, 'Ana Torres', '70010003');

INSERT INTO producto (id_producto, nombre, categoria, precio_referencial) VALUES
(1, 'Pack escolar', 'Utiles', 45.00),
(2, 'Caja de lapiceros', 'Utiles', 18.50),
(3, 'Mochila urbana', 'Accesorios', 89.90);

INSERT INTO pedido (id_pedido, id_cliente, fecha_entrega, prioridad, estado) VALUES
(1, 1, '2026-08-20', 'urgente', 'pendiente'),
(2, 2, '2026-08-22', 'alta', 'atendido'),
(3, 3, '2026-08-25', 'normal', 'pendiente');

INSERT INTO detalle_pedido (id_detalle, id_pedido, id_producto, cantidad) VALUES
(1, 1, 1, 3),
(2, 2, 2, 5),
(3, 3, 3, 1);

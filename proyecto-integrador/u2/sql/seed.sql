INSERT INTO cliente (id_cliente, nombre, documento) VALUES
(1, 'Maria Quispe', '70010001'),
(2, 'Jose Mamani', '70010002'),
(3, 'Ana Torres', '70010003');

INSERT INTO categoria (id_categoria, nombre, descripcion) VALUES
(1, 'Utiles', 'Articulos para estudio y oficina'),
(2, 'Accesorios', 'Complementos de uso personal');

INSERT INTO producto (id_producto, nombre, precio, stock, id_categoria) VALUES
(1, 'Pack escolar', 45.00, 20, 1),
(2, 'Caja de lapiceros', 18.50, 35, 1),
(3, 'Mochila urbana', 89.90, 12, 2);

INSERT INTO pedido (id_pedido, id_cliente, fecha_entrega, prioridad, estado) VALUES
(1, 1, '2026-08-20', 'urgente', 'pendiente'),
(2, 2, '2026-08-22', 'alta', 'atendido'),
(3, 3, '2026-08-25', 'normal', 'pendiente');

INSERT INTO detalle_pedido (id_detalle, id_pedido, id_producto, cantidad) VALUES
(1, 1, 1, 3),
(2, 2, 2, 5),
(3, 3, 3, 1);

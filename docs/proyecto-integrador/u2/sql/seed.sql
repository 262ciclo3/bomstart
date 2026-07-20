INSERT INTO categoria (id_categoria, nombre, descripcion) VALUES
(1, 'Útiles', 'Artículos para estudio y oficina'),
(2, 'Accesorios', 'Complementos de uso personal');

INSERT INTO producto (id_producto, nombre, precio, stock, id_categoria) VALUES
(1, 'Pack escolar', 45.00, 17, 1),
(2, 'Caja de lapiceros', 18.50, 30, 1),
(3, 'Mochila urbana', 89.90, 11, 2);

-- El hash es referencial; cada implementación debe generarlo con la librería elegida.
INSERT INTO usuario (id_usuario, username, password_hash, rol, activo) VALUES
(1, 'vendedor1', '$HASH_DE_EJEMPLO$', 'VENDEDOR', TRUE),
(2, 'admin1', '$HASH_DE_EJEMPLO$', 'ADMIN', TRUE);

INSERT INTO venta (id_venta, cliente, fecha, estado, total, id_usuario) VALUES
(1, 'María Quispe', '2026-10-12 10:30:00', 'ACTIVA', 135.00, NULL),
(2, 'José Mamani', '2026-10-13 15:10:00', 'ACTIVA', 92.50, NULL),
(3, 'Ana Torres', '2026-10-14 09:20:00', 'ACTIVA', 89.90, NULL);

INSERT INTO detalle_venta
(id_detalle, id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 1, 3, 45.00, 135.00),
(2, 2, 2, 5, 18.50, 92.50),
(3, 3, 3, 1, 89.90, 89.90);

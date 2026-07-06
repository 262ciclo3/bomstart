-- Validación de integridad referencial
SELECT table_name, constraint_name, constraint_type, status
FROM information_schema.table_constraints
WHERE constraint_schema = DATABASE()
ORDER BY table_name, constraint_type;

-- Registros principales para demo
SELECT * FROM pedido ORDER BY id_pedido DESC;

-- Detalle de pedidos con cliente y producto
SELECT
    p.id_pedido,
    c.nombre AS cliente,
    pr.nombre AS producto,
    dp.cantidad,
    p.fecha_entrega,
    p.prioridad,
    p.estado
FROM pedido p
JOIN cliente c ON c.id_cliente = p.id_cliente
JOIN detalle_pedido dp ON dp.id_pedido = p.id_pedido
JOIN producto pr ON pr.id_producto = dp.id_producto
ORDER BY p.fecha_entrega DESC;

-- Validación de totales por estado
SELECT estado, COUNT(*) AS total_pedidos
FROM pedido
GROUP BY estado;

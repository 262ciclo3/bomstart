-- Listado general de pedidos
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
ORDER BY p.fecha_entrega;

-- Pedidos pendientes
SELECT p.id_pedido, c.nombre AS cliente, p.fecha_entrega, p.prioridad
FROM pedido p
JOIN cliente c ON c.id_cliente = p.id_cliente
WHERE p.estado = 'pendiente'
ORDER BY p.fecha_entrega;

-- Pedidos urgentes
SELECT p.id_pedido, c.nombre AS cliente, p.fecha_entrega, p.estado
FROM pedido p
JOIN cliente c ON c.id_cliente = p.id_cliente
WHERE p.prioridad = 'urgente';

-- Resumen por estado
SELECT estado, COUNT(*) AS total_pedidos
FROM pedido
GROUP BY estado;

-- Total de unidades por producto
SELECT pr.nombre AS producto, SUM(dp.cantidad) AS unidades_solicitadas
FROM detalle_pedido dp
JOIN producto pr ON pr.id_producto = dp.id_producto
GROUP BY pr.nombre
ORDER BY unidades_solicitadas DESC;

-- Reporte de pedidos por prioridad
SELECT prioridad, COUNT(*) AS total_pedidos
FROM pedido
GROUP BY prioridad
ORDER BY total_pedidos DESC;

-- Reporte de unidades solicitadas por producto
SELECT pr.nombre AS producto, SUM(dp.cantidad) AS unidades
FROM detalle_pedido dp
JOIN producto pr ON pr.id_producto = dp.id_producto
GROUP BY pr.nombre
ORDER BY unidades DESC;

-- Reporte de pedidos por cliente
SELECT c.nombre AS cliente, COUNT(p.id_pedido) AS pedidos
FROM cliente c
LEFT JOIN pedido p ON p.id_cliente = c.id_cliente
GROUP BY c.nombre
ORDER BY pedidos DESC;

-- Ventas por usuario autenticado
SELECT u.username, COUNT(v.id_venta) AS ventas, SUM(v.total) AS importe
FROM usuario u
LEFT JOIN venta v ON v.id_usuario = u.id_usuario AND v.estado = 'ACTIVA'
GROUP BY u.username
ORDER BY importe DESC;

-- Ventas por día
SELECT CAST(fecha AS DATE) AS fecha_venta, COUNT(*) AS ventas, SUM(total) AS importe
FROM venta
WHERE estado = 'ACTIVA'
GROUP BY CAST(fecha AS DATE)
ORDER BY fecha_venta DESC;

-- Productos más vendidos
SELECT p.nombre AS producto, SUM(dv.cantidad) AS unidades, SUM(dv.subtotal) AS importe
FROM detalle_venta dv
JOIN producto p ON p.id_producto = dv.id_producto
JOIN venta v ON v.id_venta = dv.id_venta
WHERE v.estado = 'ACTIVA'
GROUP BY p.nombre
ORDER BY unidades DESC;

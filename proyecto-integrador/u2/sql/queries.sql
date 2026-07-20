-- Ventas con cabecera, usuario opcional y total
SELECT
    v.id_venta,
    v.cliente,
    v.fecha,
    v.estado,
    v.total,
    u.username AS registrada_por
FROM venta v
LEFT JOIN usuario u ON u.id_usuario = v.id_usuario
ORDER BY v.fecha DESC;

-- Detalles de una venta
SELECT
    dv.id_venta,
    p.nombre AS producto,
    c.nombre AS categoria,
    dv.cantidad,
    dv.precio_unitario,
    dv.subtotal
FROM detalle_venta dv
JOIN producto p ON p.id_producto = dv.id_producto
JOIN categoria c ON c.id_categoria = p.id_categoria
WHERE dv.id_venta = ?
ORDER BY dv.id_detalle;

-- Resumen por estado
SELECT estado, COUNT(*) AS cantidad_ventas, SUM(total) AS importe_total
FROM venta
GROUP BY estado;

-- Productos vendidos por categoría
SELECT
    c.nombre AS categoria,
    p.nombre AS producto,
    SUM(dv.cantidad) AS unidades_vendidas,
    SUM(dv.subtotal) AS importe_vendido
FROM detalle_venta dv
JOIN producto p ON p.id_producto = dv.id_producto
JOIN categoria c ON c.id_categoria = p.id_categoria
JOIN venta v ON v.id_venta = dv.id_venta
WHERE v.estado = 'ACTIVA'
GROUP BY c.nombre, p.nombre
ORDER BY importe_vendido DESC;

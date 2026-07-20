-- Ventas cuyos totales no coinciden con la suma de sus detalles
SELECT v.id_venta, v.total, COALESCE(SUM(dv.subtotal), 0) AS total_detalles
FROM venta v
LEFT JOIN detalle_venta dv ON dv.id_venta = v.id_venta
GROUP BY v.id_venta, v.total
HAVING v.total <> COALESCE(SUM(dv.subtotal), 0);

-- Detalles inválidos
SELECT *
FROM detalle_venta
WHERE cantidad <= 0
   OR precio_unitario < 0
   OR subtotal <> cantidad * precio_unitario;

-- Ventas sin usuario: permitidas en U2, deben quedar resueltas al integrar S13/U3
SELECT id_venta, cliente, fecha
FROM venta
WHERE id_usuario IS NULL;

-- Productos con stock inválido
SELECT id_producto, nombre, stock
FROM producto
WHERE stock < 0;

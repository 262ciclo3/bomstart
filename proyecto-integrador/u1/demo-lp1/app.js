const productos = [
  { nombre: "Pack escolar", precio: 45, stock: 20, categoria: "Útiles" },
  { nombre: "Mochila urbana", precio: 89.9, stock: 12, categoria: "Accesorios" }
];

const form = document.querySelector("#productoForm");
const mensaje = document.querySelector("#mensaje");
const productosBody = document.querySelector("#productosBody");

function obtenerProducto() {
  return {
    nombre: document.querySelector("#nombre").value.trim(),
    precio: Number(document.querySelector("#precio").value),
    stock: Number(document.querySelector("#stock").value),
    categoria: document.querySelector("#categoria").value
  };
}

function validar(producto) {
  if (!producto.nombre || !producto.categoria) return "Completa nombre y categoría.";
  if (!Number.isFinite(producto.precio) || producto.precio < 0) return "El precio no puede ser negativo.";
  if (!Number.isInteger(producto.stock) || producto.stock < 0) return "El stock debe ser un entero no negativo.";
  return "";
}

function render() {
  productosBody.innerHTML = productos.length === 0
    ? '<tr><td colspan="5" class="empty">Aún no hay productos.</td></tr>'
    : productos.map((producto, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${producto.nombre}</td>
        <td>S/ ${producto.precio.toFixed(2)}</td>
        <td>${producto.stock}</td>
        <td>${producto.categoria}</td>
      </tr>`).join("");

  document.querySelector("#totalProductos").textContent = productos.length;
  document.querySelector("#totalStock").textContent = productos.reduce((total, p) => total + p.stock, 0);
  document.querySelector("#totalCategorias").textContent = new Set(productos.map((p) => p.categoria)).size;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const producto = obtenerProducto();
  const error = validar(producto);
  mensaje.textContent = error || "Producto registrado temporalmente.";
  mensaje.className = `message ${error ? "error" : "ok"}`;
  if (error) return;
  productos.push(producto);
  form.reset();
  render();
});

document.querySelector("#limpiarBtn").addEventListener("click", () => {
  form.reset();
  mensaje.textContent = "";
  mensaje.className = "message";
});

render();

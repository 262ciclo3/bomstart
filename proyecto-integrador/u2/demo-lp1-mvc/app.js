const STORAGE_KEY = "comarket_u2_ventas";
const productos = [
  { id: 1, nombre: "Pack escolar", precio: 45, stock: 20 },
  { id: 2, nombre: "Caja de lapiceros", precio: 18.5, stock: 35 },
  { id: 3, nombre: "Mochila urbana", precio: 89.9, stock: 12 }
];
let detalles = [];

const VentaRepository = {
  listar: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
  guardar(ventas) { localStorage.setItem(STORAGE_KEY, JSON.stringify(ventas)); },
  agregar(venta) { const ventas = this.listar(); ventas.push(venta); this.guardar(ventas); },
  anular(id) {
    this.guardar(this.listar().map((venta) => venta.id === id ? { ...venta, estado: "ANULADA" } : venta));
  },
  limpiar() { localStorage.removeItem(STORAGE_KEY); }
};

function crearId() {
  return window.crypto?.randomUUID?.() || `venta-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function dinero(valor) { return `S/ ${valor.toFixed(2)}`; }
function totalDetalles() { return detalles.reduce((total, d) => total + d.subtotal, 0); }

const VentaService = {
  agregarDetalle(productoId, cantidad) {
    const producto = productos.find((item) => item.id === productoId);
    if (!producto) return "Seleccione un producto.";
    if (!Number.isInteger(cantidad) || cantidad <= 0) return "La cantidad debe ser mayor que cero.";
    if (cantidad > producto.stock) return "Stock insuficiente para el producto.";
    const existente = detalles.find((item) => item.productoId === productoId);
    if (existente) existente.cantidad += cantidad;
    else detalles.push({ productoId, producto: producto.nombre, cantidad, precioUnitario: producto.precio, subtotal: 0 });
    detalles = detalles.map((item) => ({ ...item, subtotal: item.cantidad * item.precioUnitario }));
    return "";
  },
  registrar(cliente) {
    if (!cliente.trim()) return { ok: false, mensaje: "Ingrese el cliente." };
    if (detalles.length === 0) return { ok: false, mensaje: "Agregue al menos un detalle." };
    const venta = {
      id: crearId(), cliente: cliente.trim(), fecha: new Date().toISOString(),
      estado: "ACTIVA", detalles: detalles.map((d) => ({ ...d })), total: totalDetalles()
    };
    VentaRepository.agregar(venta);
    detalles = [];
    return { ok: true, mensaje: "Venta registrada con cabecera y detalles." };
  }
};

const View = {
  mensaje(texto, tipo = "") {
    const element = document.querySelector("#ventaMensaje");
    element.textContent = texto;
    element.className = `message ${tipo}`;
  },
  renderDetalles() {
    document.querySelector("#detallesBody").innerHTML = detalles.length === 0
      ? '<tr><td colspan="5">Agregue productos a la venta.</td></tr>'
      : detalles.map((d) => `<tr><td>${d.producto}</td><td>${d.cantidad}</td><td>${dinero(d.precioUnitario)}</td><td>${dinero(d.subtotal)}</td><td><button type="button" data-remove="${d.productoId}">Quitar</button></td></tr>`).join("");
    document.querySelector("#totalActual").textContent = dinero(totalDetalles());
  },
  renderVentas() {
    const filtro = document.querySelector("#filtroEstado").value;
    const ventas = VentaRepository.listar();
    const visibles = ventas.filter((v) => filtro === "TODAS" || v.estado === filtro);
    document.querySelector("#ventasBody").innerHTML = visibles.length === 0
      ? '<tr><td colspan="7">No hay ventas para mostrar.</td></tr>'
      : visibles.map((v, index) => `<tr><td>${index + 1}</td><td>${v.cliente}</td><td>${new Date(v.fecha).toLocaleDateString("es-PE")}</td><td>${v.detalles.map((d) => `${d.producto} × ${d.cantidad}`).join("<br>")}</td><td>${dinero(v.total)}</td><td>${v.estado}</td><td><button type="button" data-anular="${v.id}" ${v.estado === "ANULADA" ? "disabled" : ""}>Anular</button></td></tr>`).join("");

    const activas = ventas.filter((v) => v.estado === "ACTIVA");
    document.querySelector("#totalVentas").textContent = activas.length;
    document.querySelector("#importeVentas").textContent = dinero(activas.reduce((t, v) => t + v.total, 0));
    document.querySelector("#unidadesVendidas").textContent = activas.reduce((t, v) => t + v.detalles.reduce((s, d) => s + d.cantidad, 0), 0);
  }
};

document.querySelector("#agregarDetalleBtn").addEventListener("click", () => {
  const error = VentaService.agregarDetalle(Number(document.querySelector("#producto").value), Number(document.querySelector("#cantidad").value));
  View.mensaje(error, error ? "error" : "ok");
  View.renderDetalles();
});

document.querySelector("#detallesBody").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove]");
  if (!button) return;
  detalles = detalles.filter((d) => d.productoId !== Number(button.dataset.remove));
  View.renderDetalles();
});

document.querySelector("#ventaForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const resultado = VentaService.registrar(document.querySelector("#cliente").value);
  View.mensaje(resultado.mensaje, resultado.ok ? "ok" : "error");
  if (resultado.ok) { event.target.reset(); View.renderDetalles(); View.renderVentas(); }
});

document.querySelector("#filtroEstado").addEventListener("change", View.renderVentas);
document.querySelector("#ventasBody").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-anular]");
  if (!button) return;
  VentaRepository.anular(button.dataset.anular);
  View.renderVentas();
});
document.querySelector("#seedBtn").addEventListener("click", () => {
  VentaRepository.guardar([{ id: crearId(), cliente: "María Quispe", fecha: new Date().toISOString(), estado: "ACTIVA", detalles: [{ productoId: 1, producto: "Pack escolar", cantidad: 2, precioUnitario: 45, subtotal: 90 }], total: 90 }]);
  View.renderVentas();
});
document.querySelector("#clearBtn").addEventListener("click", () => { VentaRepository.limpiar(); View.renderVentas(); });

View.renderDetalles();
View.renderVentas();

const pedidos = [];

const form = document.querySelector("#pedidoForm");
const limpiarBtn = document.querySelector("#limpiarBtn");
const mensaje = document.querySelector("#mensaje");
const pedidosBody = document.querySelector("#pedidosBody");
const totalPedidos = document.querySelector("#totalPedidos");
const totalUnidades = document.querySelector("#totalUnidades");
const totalUrgentes = document.querySelector("#totalUrgentes");
const productoSelect = document.querySelector("#producto");
const categoriaInput = document.querySelector("#categoria");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = `message ${tipo}`;
}

function obtenerPedido() {
  return {
    cliente: document.querySelector("#cliente").value.trim(),
    producto: document.querySelector("#producto").value.trim(),
    categoria: document.querySelector("#categoria").value,
    cantidad: Number(document.querySelector("#cantidad").value),
    fecha: document.querySelector("#fecha").value,
    prioridad: document.querySelector("#prioridad").value
  };
}

function validarPedido(pedido) {
  if (!pedido.cliente || !pedido.producto || !pedido.categoria || !pedido.fecha) {
    return "Completa cliente, producto, categoría y fecha de entrega.";
  }

  if (!Number.isInteger(pedido.cantidad) || pedido.cantidad <= 0) {
    return "La cantidad debe ser un numero entero mayor que cero.";
  }

  return "";
}

function renderPedidos() {
  if (pedidos.length === 0) {
    pedidosBody.innerHTML = '<tr><td colspan="7" class="empty">Aun no hay pedidos registrados.</td></tr>';
    return;
  }

  pedidosBody.innerHTML = pedidos.map((pedido, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${pedido.cliente}</td>
      <td>${pedido.producto}</td>
      <td>${pedido.categoria}</td>
      <td>${pedido.cantidad}</td>
      <td>${pedido.fecha}</td>
      <td><span class="badge ${pedido.prioridad}">${pedido.prioridad}</span></td>
    </tr>
  `).join("");
}

function actualizarResumen() {
  const unidades = pedidos.reduce((total, pedido) => total + pedido.cantidad, 0);
  const urgentes = pedidos.filter((pedido) => pedido.prioridad === "urgente").length;

  totalPedidos.textContent = pedidos.length;
  totalUnidades.textContent = unidades;
  totalUrgentes.textContent = urgentes;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pedido = obtenerPedido();
  const error = validarPedido(pedido);

  if (error) {
    mostrarMensaje(error, "error");
    return;
  }

  pedidos.push(pedido);
  renderPedidos();
  actualizarResumen();
  form.reset();
  mostrarMensaje("Pedido registrado correctamente.", "ok");
});

limpiarBtn.addEventListener("click", () => {
  form.reset();
  categoriaInput.value = "";
  mostrarMensaje("", "");
});

productoSelect.addEventListener("change", () => {
  const opcion = productoSelect.options[productoSelect.selectedIndex];
  categoriaInput.value = opcion.dataset.categoria || "";
});

const STORAGE_KEY = "bomstart_u2_pedidos";

function crearId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `pedido-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

const PedidoRepository = {
  listar() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  guardarTodos(pedidos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos));
  },
  agregar(pedido) {
    const pedidos = this.listar();
    pedidos.push({ ...pedido, id: crearId(), estado: "pendiente" });
    this.guardarTodos(pedidos);
  },
  actualizarEstado(id, estado) {
    const pedidos = this.listar().map((pedido) =>
      pedido.id === id ? { ...pedido, estado } : pedido
    );
    this.guardarTodos(pedidos);
  },
  limpiar() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const PedidoService = {
  validar(pedido) {
    if (!pedido.cliente || !pedido.producto || !pedido.fecha) {
      return "Completa cliente, producto y fecha.";
    }
    if (!Number.isInteger(pedido.cantidad) || pedido.cantidad <= 0) {
      return "La cantidad debe ser un entero mayor que cero.";
    }
    return "";
  },
  registrar(pedido) {
    const error = this.validar(pedido);
    if (error) return { ok: false, mensaje: error };
    PedidoRepository.agregar(pedido);
    return { ok: true, mensaje: "Pedido registrado y persistido." };
  },
  listarFiltrado(estado, prioridad) {
    return PedidoRepository.listar().filter((pedido) => {
      const estadoOk = estado === "todos" || pedido.estado === estado;
      const prioridadOk = prioridad === "todas" || pedido.prioridad === prioridad;
      return estadoOk && prioridadOk;
    });
  },
  resumen() {
    const pedidos = PedidoRepository.listar();
    return {
      total: pedidos.length,
      pendientes: pedidos.filter((pedido) => pedido.estado === "pendiente").length,
      unidades: pedidos.reduce((total, pedido) => total + pedido.cantidad, 0),
      urgentes: pedidos.filter((pedido) => pedido.prioridad === "urgente").length
    };
  }
};

const View = {
  pedidoMensaje: document.querySelector("#pedidoMensaje"),
  pedidosBody: document.querySelector("#pedidosBody"),
  mensaje(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = `message ${tipo || ""}`;
  },
  renderTabla(pedidos) {
    if (pedidos.length === 0) {
      this.pedidosBody.innerHTML = '<tr><td colspan="8">No hay pedidos para mostrar.</td></tr>';
      return;
    }
    this.pedidosBody.innerHTML = pedidos.map((pedido, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${pedido.cliente}</td>
        <td>${pedido.producto}</td>
        <td>${pedido.cantidad}</td>
        <td>${pedido.fecha}</td>
        <td><span class="badge ${pedido.prioridad}">${pedido.prioridad}</span></td>
        <td><span class="badge ${pedido.estado}">${pedido.estado}</span></td>
        <td>
          <button type="button" data-id="${pedido.id}" data-action="atender" ${pedido.estado !== "pendiente" ? "disabled" : ""}>Atender</button>
        </td>
      </tr>
    `).join("");
  },
  renderResumen(resumen) {
    document.querySelector("#totalPedidos").textContent = resumen.total;
    document.querySelector("#totalPendientes").textContent = resumen.pendientes;
    document.querySelector("#totalUnidades").textContent = resumen.unidades;
    document.querySelector("#totalUrgentes").textContent = resumen.urgentes;
  }
};

const PedidoController = {
  iniciar() {
    document.querySelector("#pedidoForm").addEventListener("submit", this.registrar);
    document.querySelector("#filtroEstado").addEventListener("change", this.refrescar);
    document.querySelector("#filtroPrioridad").addEventListener("change", this.refrescar);
    document.querySelector("#seedBtn").addEventListener("click", this.cargarDatos);
    document.querySelector("#clearBtn").addEventListener("click", this.limpiarDatos);
    document.querySelector("#pedidosBody").addEventListener("click", this.accionTabla);

    this.refrescar();
  },
  obtenerPedido() {
    return {
      cliente: document.querySelector("#cliente").value.trim(),
      producto: document.querySelector("#producto").value.trim(),
      cantidad: Number(document.querySelector("#cantidad").value),
      fecha: document.querySelector("#fecha").value,
      prioridad: document.querySelector("#prioridad").value
    };
  },
  registrar(event) {
    event.preventDefault();
    const resultado = PedidoService.registrar(PedidoController.obtenerPedido());
    View.mensaje(View.pedidoMensaje, resultado.mensaje, resultado.ok ? "ok" : "error");
    if (resultado.ok) {
      event.target.reset();
      PedidoController.refrescar();
    }
  },
  refrescar() {
    const estado = document.querySelector("#filtroEstado").value;
    const prioridad = document.querySelector("#filtroPrioridad").value;
    View.renderTabla(PedidoService.listarFiltrado(estado, prioridad));
    View.renderResumen(PedidoService.resumen());
  },
  accionTabla(event) {
    const button = event.target.closest("button[data-action='atender']");
    if (!button) return;
    PedidoRepository.actualizarEstado(button.dataset.id, "atendido");
    PedidoController.refrescar();
  },
  cargarDatos() {
    PedidoRepository.guardarTodos([
      { id: crearId(), cliente: "Maria Quispe", producto: "Pack escolar", cantidad: 3, fecha: "2026-08-20", prioridad: "urgente", estado: "pendiente" },
      { id: crearId(), cliente: "Jose Mamani", producto: "Caja de lapiceros", cantidad: 5, fecha: "2026-08-22", prioridad: "alta", estado: "atendido" },
      { id: crearId(), cliente: "Ana Torres", producto: "Mochila urbana", cantidad: 1, fecha: "2026-08-25", prioridad: "normal", estado: "pendiente" }
    ]);
    PedidoController.refrescar();
  },
  limpiarDatos() {
    PedidoRepository.limpiar();
    PedidoController.refrescar();
  }
};

PedidoController.iniciar();

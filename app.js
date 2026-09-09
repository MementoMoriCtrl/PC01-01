// --- 1. BARRA DE NOTIFICACIONES
const mensajesNotificacion = [
    "Pedidos personalizados con 48 horas de anticipación.",
    "¡Promo: 10% de descuento en tortas esta semana!",
    "Delivery gratis por compras mayores a S/ 50.",
    "Prueba nuestro nuevo Box Dulce de la semana."
];

function actualizarNotificacion() {
    const barra = document.querySelector("#barraNotificaciones p");
    if(barra) {
        const indice = Math.floor(Math.random() * mensajesNotificacion.length);
        barra.textContent = mensajesNotificacion[indice];
    }
}

// Ejecutar cada 4 segundos
setInterval(actualizarNotificacion, 4000);
actualizarNotificacion(); 


// --- 2. LOGICA DEL FORMULARIO (Requisitos obligatorios) ---
function procesarPedido() {
    const nombre = document.getElementById("nombreCliente").value;
    const producto = document.getElementById("productoSeleccionado").value;
    const cantidad = document.getElementById("cantidadProducto").value;
    const tipo = document.getElementById("tipoPedido").value;

    if (nombre === "" || producto === "" || cantidad === "" || tipo === "") {
        alert("Por favor, completa todos los campos del pedido para continuar.");
        return;
    }

    let mensajeLogistica = "";

    if (tipo === "delivery") {
        if (cantidad >= 3) {
            mensajeLogistica = "¡Felicidades! Al pedir 3 o más productos, tu delivery es GRATIS. Nos contactaremos al 987790205 para coordinar la dirección.";
        } else {
            mensajeLogistica = "El costo de delivery se calculará según tu ubicación.";
        }
    } else if (tipo === "recojo") {
        mensajeLogistica = "Tu pedido estará listo para recojo en nuestra tienda. ¡Te esperamos!";
    }

    const mensajeFinal = `¡Hola, ${nombre}! 🍰

Tu pedido fue recibido exitosamente.

Resumen de tu compra:
• Producto: ${producto}
• Cantidad: ${cantidad}
• Modalidad: ${tipo.toUpperCase()}

${mensajeLogistica}

¡Gracias por elegir Dulce Esencia!`;

    alert(mensajeFinal);
}


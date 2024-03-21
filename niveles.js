document.addEventListener("DOMContentLoaded", function() {
    const nivelInput = document.getElementById("nivel");
    const puntosDisponiblesSpan = document.getElementById("puntos-disponibles");
    let puntosDisponibles = 200; // Cada persona comienza con 200 puntos disponibles
    let nivelAnterior = 1; // Nivel anterior inicializado en 1

    // Función para actualizar los puntos disponibles
    function actualizarPuntosDisponibles() {
        puntosDisponiblesSpan.textContent = puntosDisponibles;
    }

    // Función para sumar puntos adicionales por nivel a partir del nivel 2
    function sumarPuntosPorNivel(nivel) {
        if (nivel > 1) {
            const puntosExtra = (nivel - nivelAnterior) * 6; // Cada nivel por encima del anterior otorga 6 puntos extras
            puntosDisponibles += puntosExtra;
            nivelAnterior = nivel; // Actualizar nivel anterior
            actualizarPuntosDisponibles();
        }
    }

    // Event listener para cambios en el nivel
    nivelInput.addEventListener("input", function() {
        const nivelActual = parseInt(this.value);
        sumarPuntosPorNivel(nivelActual); // Sumar puntos adicionales por nivel a partir del nivel 2
    });

    // Event listener para cambios en el nivel al bajar de nivel
    nivelInput.addEventListener("blur", function() {
        const nivelActual = parseInt(this.value);
        const puntosBajados = (nivelAnterior - nivelActual) * 6; // Cada nivel por debajo del anterior resta 6 puntos
        if (puntosBajados > 0) {
            puntosDisponibles -= puntosBajados;
            nivelAnterior = nivelActual; // Actualizar nivel anterior
            actualizarPuntosDisponibles();
        }
    });

    // Inicialización de puntos disponibles
    actualizarPuntosDisponibles();
});

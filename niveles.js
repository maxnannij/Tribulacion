  document.addEventListener("DOMContentLoaded", function() {
    const nivelInput = document.getElementById("nivel");
    const puntosDisponiblesSpan = document.getElementById("puntos-disponibles");
    let puntosDisponibles = 200; // Cada persona comienza con 200 puntos disponibles
    let nivelAnterior = 1; // Nivel anterior inicializado en 1

    // Función para actualizar los puntos disponibles
    function actualizarPuntosDisponibles() {
      const vida = parseInt(document.getElementById("vida").value);
      const fuerza = parseInt(document.getElementById("fuerza").value);
      const inteligencia = parseInt(document.getElementById("inteligencia").value);
      const agilidad = parseInt(document.getElementById("agilidad").value);

      const sumaCapacidades = vida + fuerza + inteligencia + agilidad;
      const puntosPorCapacidad = sumaCapacidades * 1; // Se asignan 2 puntos por cada punto de capacidad
      const puntosPorNivel = (parseInt(nivelInput.value) - 1) * 6; // Cada nivel por encima del primero otorga 6 puntos extras
      puntosDisponibles = 200 + puntosPorNivel - puntosPorCapacidad;

      puntosDisponiblesSpan.textContent = puntosDisponibles;
    }

    // Event listener para cambios en el nivel
    nivelInput.addEventListener("input", actualizarPuntosDisponibles);

    // Agregar eventos de escucha a los campos de entrada de capacidades
    const camposCapacidades = document.querySelectorAll("#vida, #fuerza, #inteligencia, #agilidad");
    camposCapacidades.forEach(function(input) {
      input.addEventListener("input", actualizarPuntosDisponibles);
    });

    // Inicialización de puntos disponibles
    actualizarPuntosDisponibles();
  });

document.addEventListener("DOMContentLoaded", function() {
  // Tirar un dado específico cuando se hace clic en él
  const dados = document.querySelectorAll('.dado');
  dados.forEach(dado => {
    dado.addEventListener("click", function() {
      const caras = dado.dataset.caras; // Obtener el número de caras del atributo data-caras
      const resultado = tirarDado(parseInt(caras)); // Parsear el número de caras a entero
      girarDado(dado); // Girar el dado al hacer clic
      setTimeout(() => {
        mostrarResultado(dado, resultado); // Mostrar el resultado después de un tiempo
      }, 1000); // Esperar 1 segundo (corresponde a la duración de la animación en CSS)
    });
  });

  function tirarDado(caras) {
    return Math.floor(Math.random() * caras) + 1; // Generar número aleatorio dentro del rango correcto
  }

  function girarDado(dado) {
    dado.classList.add("rotar");
    setTimeout(() => {
      dado.classList.remove("rotar");
    }, 1000); // Esperar 1 segundo (corresponde a la duración de la animación en CSS)
  }

  function mostrarResultado(dado, resultado) {
    dado.textContent = resultado;
  }
});
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


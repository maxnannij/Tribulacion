document.addEventListener('DOMContentLoaded', function() {
  // Elementos de la interfaz de usuario
  var claseSelect = document.getElementById('clase');
  var nivelInput = document.getElementById('nivel');
  var vidaInput = document.getElementById('vida');
  var fuerzaInput = document.getElementById('fuerza');
  var inteligenciaInput = document.getElementById('inteligencia');
  var agilidadInput = document.getElementById('agilidad');
  var puntosDisponiblesSpan = document.getElementById('puntos-disponibles');

  // Función para actualizar las estadísticas según la clase seleccionada
  function actualizarEstadisticas() {
    var claseSeleccionada = claseSelect.value;

    switch (claseSeleccionada) {
      case 'Arquero':
        asignarEstadisticas(120, 12, 16, 18);
        break;
      case 'Cruzado':
        asignarEstadisticas(180, 18, 14, 16);
        break;
      case 'Paladin':
        asignarEstadisticas(160, 18, 14, 12);
        break;
      case 'Picaro':
        asignarEstadisticas(110, 14, 12, 18);
        break;
      case 'Sacerdote':
        asignarEstadisticas(100, 10, 18, 10);
        break;
      case 'Salmista':
        asignarEstadisticas(100, 12, 16, 12);
        break;
      default:
        // Si no se selecciona ninguna clase, se pueden restablecer los valores a cero o dejarlos como están
        asignarEstadisticas(0, 0, 0, 0);
        break;
    }

    actualizarPuntosDisponibles(); // Actualizar puntos disponibles al cambiar de clase
  }

  // Función para asignar estadísticas y actualizar campos de entrada
  function asignarEstadisticas(vida, fuerza, inteligencia, agilidad) {
    vidaInput.value = vida;
    fuerzaInput.value = fuerza;
    inteligenciaInput.value = inteligencia;
    agilidadInput.value = agilidad;
  }

  // Evento de cambio para la selección de clase
  claseSelect.addEventListener('change', actualizarEstadisticas);

  // Evento de cambio para el nivel
  nivelInput.addEventListener('change', function() {
    actualizarEstadisticas();
    actualizarPuntosDisponibles();
  });

  // Eventos de cambio para las estadísticas
  [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput].forEach(function(input) {
    input.addEventListener('change', function() {
      actualizarPuntosDisponibles();
    });
  });

  // Función para actualizar puntos disponibles
  function actualizarPuntosDisponibles() {
    var puntosDisponibles = parseInt(nivelInput.value) * 6;
    var puntosAsignados = 0;

    [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput].forEach(function(input) {
      puntosAsignados += parseInt(input.value);
    });

    var puntosRestantes = puntosDisponibles - puntosAsignados;
    puntosDisponiblesSpan.innerText = puntosRestantes;
  }
});
  // Función para asignar estadísticas y actualizar campos de entrada
  function asignarEstadisticas(vida, fuerza, inteligencia, agilidad) {
    vidaInput.value = vida;
    fuerzaInput.value = fuerza;
    inteligenciaInput.value = inteligencia;
    agilidadInput.value = agilidad;
  }

  // Evento de cambio para la selección de clase
  claseSelect.addEventListener('change', actualizarEstadisticas);

  // Evento de cambio para el nivel
  nivelInput.addEventListener('change', function() {
    actualizarEstadisticas();
    actualizarPuntosDisponibles();
  });

  // Eventos de cambio para las estadísticas
  [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput].forEach(function(input) {
    input.addEventListener('change', function() {
      actualizarPuntosDisponibles();
    });
  });

  // Función para actualizar puntos disponibles
  function actualizarPuntosDisponibles() {
    var puntosDisponibles = parseInt(nivelInput.value) * 6;
    var puntosAsignados = 0;

    [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput].forEach(function(input) {
      puntosAsignados += parseInt(input.value);
    });

    var puntosRestantes = puntosDisponibles - puntosAsignados;
    puntosDisponiblesSpan.innerText = puntosRestantes;
  }
});

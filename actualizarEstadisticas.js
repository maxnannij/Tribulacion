document.addEventListener('DOMContentLoaded', function() {
  // Elementos de la interfaz de usuario
  var claseSelect = document.getElementById('clase');
  var nivelInput = document.getElementById('nivel');
  var vidaInput = document.getElementById('vida');
  var fuerzaInput = document.getElementById('fuerza');
  var inteligenciaInput = document.getElementById('inteligencia');
  var agilidadInput = document.getElementById('agilidad');
  var puntosDisponiblesSpan = document.getElementById('puntos-disponibles');

  // Función para actualizar las estadísticas y los puntos disponibles
  function actualizarEstadisticas() {
    var claseSeleccionada = claseSelect.value;
    var nivel = parseInt(nivelInput.value);
    var puntosDisponibles = nivel * 6;

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
        asignarEstadisticas(0, 0, 0, 0);
        break;
    }

    // Actualizar puntos disponibles
    puntosDisponiblesSpan.innerText = puntosDisponibles;

    // Desactivar campos de estadísticas si no hay puntos disponibles
    desactivarCamposSiNoHayPuntos(puntosDisponibles);
  }

  // Función para asignar estadísticas y actualizar campos de entrada
  function asignarEstadisticas(vida, fuerza, inteligencia, agilidad) {
    vidaInput.value = vida;
    fuerzaInput.value = fuerza;
    inteligenciaInput.value = inteligencia;
    agilidadInput.value = agilidad;
  }

  // Función para desactivar campos de estadísticas si no hay puntos disponibles
  function desactivarCamposSiNoHayPuntos(puntosDisponibles) {
    var inputsEstadisticas = [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput];
    inputsEstadisticas.forEach(function(input) {
      input.disabled = puntosDisponibles <= 0;
    });
  }

  // Eventos de cambio para la selección de clase y el nivel
  claseSelect.addEventListener('change', actualizarEstadisticas);
  nivelInput.addEventListener('change', actualizarEstadisticas);

  // Actualizar estadísticas al cargar la página
  actualizarEstadisticas();
});

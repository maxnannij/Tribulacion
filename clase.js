document.addEventListener('DOMContentLoaded', function() {
  // Elemento select para la clase
  var claseSelect = document.getElementById('clase');
  
  // Función para actualizar las estadísticas según la clase seleccionada
  function actualizarEstadisticas() {
    var claseSeleccionada = claseSelect.value;
    var vidaInput = document.getElementById('vida');
    var fuerzaInput = document.getElementById('fuerza');
    var inteligenciaInput = document.getElementById('inteligencia');
    var agilidadInput = document.getElementById('agilidad');

    switch (claseSeleccionada) {
      case 'Arquero':
        vidaInput.value = 120;
        fuerzaInput.value = 12;
        inteligenciaInput.value = 16;
        agilidadInput.value = 18;
        break;
      case 'Cruzado':
        vidaInput.value = 180;
        fuerzaInput.value = 18;
        inteligenciaInput.value = 14;
        agilidadInput.value = 16;
        break;
      case 'Paladin':
        vidaInput.value = 160;
        fuerzaInput.value = 18;
        inteligenciaInput.value = 14;
        agilidadInput.value = 12;
        break;
      case 'Picaro':
        vidaInput.value = 110;
        fuerzaInput.value = 14;
        inteligenciaInput.value = 12;
        agilidadInput.value = 18;
        break;
      case 'Sacerdote':
        vidaInput.value = 100;
        fuerzaInput.value = 10;
        inteligenciaInput.value = 18;
        agilidadInput.value = 10;
        break;
      case 'Salmista':
        vidaInput.value = 100;
        fuerzaInput.value = 12;
        inteligenciaInput.value = 16;
        agilidadInput.value = 12;
        break;
      default:
        // Si no se selecciona ninguna clase, se pueden restablecer los valores a cero o dejarlos como están
        vidaInput.value = '';
        fuerzaInput.value = '';
        inteligenciaInput.value = '';
        agilidadInput.value = '';
        break;
    }
  }
  
  // Agregar evento de cambio al elemento select para detectar cambios en la clase seleccionada
  claseSelect.addEventListener('change', actualizarEstadisticas);
});

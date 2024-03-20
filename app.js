document.addEventListener('DOMContentLoaded', function() {
  // Cargar datos guardados al inicio
  cargarDatos();

  // Función para cargar los datos guardados
  function cargarDatos() {
    var datosGuardados = localStorage.getItem('hojaPersonaje');
    if (datosGuardados) {
      var datos = JSON.parse(datosGuardados);
      document.getElementById('nombre-personaje').innerText = datos.nombre || '';
      document.getElementById('clase').value = datos.clase || '';
      document.getElementById('nivel').value = datos.nivel || '';
      document.getElementById('vida').value = datos.vida || '';
      document.getElementById('fuerza').value = datos.fuerza || '';
      document.getElementById('inteligencia').value = datos.inteligencia || '';
      document.getElementById('agilidad').value = datos.agilidad || '';
      // Cargar items del inventario
      var inventario = datos.inventario || [];
      var inventarioList = document.getElementById('inventario-list');
      inventarioList.innerHTML = '';
      inventario.forEach(function(item) {
        var newItem = document.createElement('li');
        newItem.innerHTML = `
          <input type="text" class="item-input" placeholder="Nombre del Item" value="${item.nombre}">
          <input type="number" class="item-counter" min="0" value="${item.cantidad}">
        `;
        inventarioList.appendChild(newItem);
      });
    }
  }

  // Función para guardar los datos
  function guardarDatos() {
    var nombrePersonaje = document.getElementById('nombre-personaje').innerText;
    var clase = document.getElementById('clase').value;
    var nivel = document.getElementById('nivel').value;
    var vida = document.getElementById('vida').value;
    var fuerza = document.getElementById('fuerza').value;
    var inteligencia = document.getElementById('inteligencia').value;
    var agilidad = document.getElementById('agilidad').value;
    
    var inventario = [];
    var items = document.querySelectorAll('.item-input');
    var cantidades = document.querySelectorAll('.item-counter');
    items.forEach(function(item, index) {
      inventario.push({
        nombre: item.value,
        cantidad: cantidades[index].value
      });
    });

    var datos = {
      nombre: nombrePersonaje,
      clase: clase,
      nivel: nivel,
      vida: vida,
      fuerza: fuerza,
      inteligencia: inteligencia,
      agilidad: agilidad,
      inventario: inventario
    };

    localStorage.setItem('hojaPersonaje', JSON.stringify(datos));
  }

  // Cargar datos al inicio
  cargarDatos();

  // Guardar datos al hacer clic en el botón
  document.getElementById('guardar').addEventListener('click', function(event) {
    event.preventDefault();
    guardarDatos();
    alert('Los datos han sido guardados.');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Función para agregar un nuevo item al inventario
  document.getElementById('add-item').addEventListener('click', function(event) {
    event.preventDefault();
    var newItem = document.createElement('li');
    newItem.innerHTML = `
      <input type="text" class="item-input" placeholder="Nombre del Item">
      <input type="number" class="item-counter" min="0" value="0">
    `;
    document.getElementById('inventario-list').appendChild(newItem);
  });

  // Función para guardar los datos del personaje
  document.getElementById('guardar').addEventListener('click', function(event) {
    event.preventDefault();
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
    
    // Aquí puedes enviar los datos a un servidor o hacer lo que necesites con ellos
    console.log('Nombre del personaje:', nombrePersonaje);
    console.log('Clase:', clase);
    console.log('Nivel:', nivel);
    console.log('Vida:', vida);
    console.log('Fuerza:', fuerza);
    console.log('Inteligencia:', inteligencia);
    console.log('Agilidad:', agilidad);
    console.log('Inventario:', inventario);
  });
});

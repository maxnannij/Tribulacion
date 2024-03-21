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
// Función para borrar los datos guardados
function borrarDatos() {
    localStorage.removeItem('hojaPersonaje');
    // También puedes limpiar los campos del formulario o realizar cualquier otro trabajo relacionado con el borrado de datos.
}

// Asignar la función borrarDatos() a un botón en tu HTML
document.getElementById('borrar').addEventListener('click', function(event) {
    event.preventDefault();
    borrarDatos();
    alert('Los datos han sido eliminados.');
});


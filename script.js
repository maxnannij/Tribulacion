document.addEventListener("DOMContentLoaded", function() {
  // Tirar un dado específico cuando se hace clic en él
  const dados = document.querySelectorAll('.dado');
  dados.forEach(dado => {
    dado.addEventListener("click", function() {
      const index = Array.from(dados).indexOf(dado);
      const resultado = tirarDado(index + 1); // Ajustar el índice para que coincida con el número de caras
      girarDado(dado); // Girar el dado al hacer clic
      setTimeout(() => {
        mostrarResultado(dado, resultado); // Mostrar el resultado después de un tiempo
      }, 1000); // Esperar 1 segundo (corresponde a la duración de la animación en CSS)
    });
  });

  function tirarDado(caras) {
    return Math.floor(Math.random() * caras) + 1;
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


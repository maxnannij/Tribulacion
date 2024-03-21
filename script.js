document.addEventListener("DOMContentLoaded", function() {
  const guardarCookieButton = document.getElementById("guardar-cookie");
  const tirarDadosButton = document.getElementById("tirar-dados");
  
  // Obtener todos los dados
  const dados = document.querySelectorAll('.dado');

  guardarCookieButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    guardarComoCookie("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado como cookie.");
  });

  tirarDadosButton.addEventListener("click", function() {
    tirarDados();
  });

  // Iterar sobre cada dado y agregar evento de clic
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

  function obtenerInformacionHojaPersonaje() {
    const nombre = document.getElementById("nombre-personaje").innerText;
    const clase = document.getElementById("clase").value;
    const nivel = document.getElementById("nivel").value;
    const vida = document.getElementById("vida").value;
    const fuerza = document.getElementById("fuerza").value;
    const inteligencia = document.getElementById("inteligencia").value;
    const agilidad = document.getElementById("agilidad").value;

    return {
      nombre: nombre,
      clase: clase,
      nivel: nivel,
      vida: vida,
      fuerza: fuerza,
      inteligencia: inteligencia,
      agilidad: agilidad
    };
  }

  function guardarComoCookie(nombreCookie, valorCookie, expiracionDias) {
    let cookieString = nombreCookie + "=" + valorCookie;

    if (expiracionDias) {
      const fechaExpiracion = new Date();
      fechaExpiracion.setTime(fechaExpiracion.getTime() + (expiracionDias * 24 * 60 * 60 * 1000));
      cookieString += "; expires=" + fechaExpiracion.toUTCString();
    }

    document.cookie = cookieString;
  }

  function tirarDados() {
    const resultados = [];

    // Tirar cada dado cuando se hace clic en él
    dados.forEach((dado, index) => {
      const resultado = tirarDado(index + 1); // Ajustar el índice para que coincida con el número de caras
      girarDado(dado); // Girar el dado al hacer clic
      setTimeout(() => {
        mostrarResultado(dado, resultado); // Mostrar el resultado después de un tiempo
      }, 1000); // Esperar 1 segundo (corresponde a la duración de la animación en CSS)
    });
  }

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

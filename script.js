document.addEventListener("DOMContentLoaded", function() {
  const guardarCookieButton = document.getElementById("guardar-cookie");
  const tirarDadosButton = document.getElementById("tirar-dados");

  guardarCookieButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    guardarComoCookie("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado como cookie.");
  });

  tirarDadosButton.addEventListener("click", function() {
    tirarDados();
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

    // Tirar los dados y guardar los resultados
    resultados.push(tirarDado(6)); // Dado de 6 caras
    resultados.push(tirarDado(8)); // Dado de 8 caras
    resultados.push(tirarDado(10)); // Dado de 10 caras
    resultados.push(tirarDado(12)); // Dado de 12 caras
    resultados.push(tirarDado(20)); // Dado de 20 caras
    resultados.push(tirarDado(20)); // Segundo dado de 20 caras

    // Mostrar los resultados en la interfaz
    mostrarResultados(resultados);
  }

  function tirarDado(caras) {
    return Math.floor(Math.random() * caras) + 1;
  }

  function mostrarResultados(resultados) {
    const dadosContainer = document.querySelector(".dados");
    dadosContainer.innerHTML = "<h2>Dados</h2>";

    resultados.forEach((resultado, index) => {
      const dadoDiv = document.createElement("div");
      dadoDiv.textContent = "Dado " + (index + 1) + ": " + resultado;
      dadosContainer.appendChild(dadoDiv);
    });
  }
});


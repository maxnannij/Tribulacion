document.addEventListener("DOMContentLoaded", function() {
  const guardarCookieButton = document.getElementById("guardar-cookie");
  const nivelInput = document.getElementById("nivel");
  const puntosDisponiblesSpan = document.getElementById("puntos-disponibles");

  // Inicializar puntos disponibles
  let puntosDisponibles = 200;
  puntosDisponiblesSpan.textContent = puntosDisponibles;

  nivelInput.addEventListener("change", function() {
    // Cada nivel adicional suma 6 puntos más
    const nivel = parseInt(nivelInput.value);
    puntosDisponibles = 200 + ((nivel - 1) * 6);
    puntosDisponiblesSpan.textContent = puntosDisponibles;
  });

  guardarCookieButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    guardarComoCookie("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado como cookie.");
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
      agilidad: agilidad,
      puntosDisponibles: puntosDisponibles
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
});

document.addEventListener("DOMContentLoaded", function() {
  const guardarCookieButton = document.getElementById("guardar-cookie");
  const agregarItemButton = document.getElementById("add-item");

  guardarCookieButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    guardarComoCookie("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado como cookie.");
  });

  agregarItemButton.addEventListener("click", function() {
    agregarItemInventario();
  });

  function obtenerInformacionHojaPersonaje() {
    const nombre = document.getElementById("nombre-personaje").innerText;
    return {
      nombre: nombre,
      // Otros campos de la hoja de personaje...
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

  function agregarItemInventario() {
    const inventarioList = document.getElementById("inventario-list");
    const newItem = document.createElement("li");
    newItem.innerHTML = `
      <input type="text" class="item-input" placeholder="Nombre del Item">
      <input type="number" class="item-counter" min="0" value="0">
    `;
    inventarioList.appendChild(newItem);
  }
});


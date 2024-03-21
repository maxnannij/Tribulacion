document.addEventListener("DOMContentLoaded", function() {
  const guardarLocalButton = document.getElementById("guardar-local");

  guardarLocalButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    localStorage.setItem("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado localmente.");
  });

  function obtenerInformacionHojaPersonaje() {
    const nombre = document.getElementById("nombre-personaje").innerText;
    return {
      nombre: nombre,
      // Otros campos de la hoja de personaje...
    };
  }
});

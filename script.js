document.addEventListener("DOMContentLoaded", function() {
  const guardarLocalButton = document.getElementById("guardar-local");
  const descargarButton = document.getElementById("descargar");
  const cargarInput = document.getElementById("cargar");

  guardarLocalButton.addEventListener("click", function() {
    // Obtener la información de la hoja de personaje
    const hojaPersonaje = obtenerInformacionHojaPersonaje();

    // Guardar la información localmente
    localStorage.setItem("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado localmente.");
  });

  descargarButton.addEventListener("click", function() {
    // Obtener la información de la hoja de personaje
    const hojaPersonaje = obtenerInformacionHojaPersonaje();

    // Crear un objeto Blob con la información
    const blob = new Blob([JSON.stringify(hojaPersonaje)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Crear un enlace de descarga y hacer clic en él
    const a = document.createElement("a");
    a.href = url;
    a.download = "hoja_personaje.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  cargarInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const contenido = e.target.result;
      const hojaPersonaje = JSON.parse(contenido);
      cargarInformacionHojaPersonaje(hojaPersonaje);
    };

    reader.readAsText(file);
  });

  function obtenerInformacionHojaPersonaje() {
    // Aquí obtienes la información de la hoja de personaje, por ejemplo:
    const nombre = document.getElementById("nombre-personaje").innerText;
    // Obtener el resto de la información necesaria...

    return {
      nombre: nombre,
      // Otros campos de la hoja de personaje...
    };
  }

  function cargarInformacionHojaPersonaje(hojaPersonaje) {
    // Aquí cargas la información en la hoja de personaje
    // Por ejemplo:
    document.getElementById("nombre-personaje").innerText = hojaPersonaje.nombre;
    // Cargar el resto de la información necesaria...
  }
});

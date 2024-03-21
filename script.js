document.addEventListener("DOMContentLoaded", function() {
  const guardarLocalButton = document.getElementById("guardar-local");
  const descargarButton = document.getElementById("descargar");
  const cargarInput = document.getElementById("cargar");
  const cargarWebButton = document.getElementById("cargar-web");

  guardarLocalButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    localStorage.setItem("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado localmente.");
  });

  descargarButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    const blob = new Blob([JSON.stringify(hojaPersonaje)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
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

  cargarWebButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonajeDesdeJSON();
    cargarInformacionHojaPersonaje(hojaPersonaje);
  });

  function obtenerInformacionHojaPersonaje() {
    const nombre = document.getElementById("nombre-personaje").innerText;
    return {
      nombre: nombre,
    };
  }

  function cargarInformacionHojaPersonaje(hojaPersonaje) {
    document.getElementById("nombre-personaje").innerText = hojaPersonaje.nombre;
    // Aquí puedes cargar el resto de los datos
    // Por ejemplo, si tienes otros campos en la hoja de personaje:
    // document.getElementById("clase").value = hojaPersonaje.clase;
    // document.getElementById("nivel").value = hojaPersonaje.nivel;
    // document.getElementById("vida").value = hojaPersonaje.vida;
    // Y así sucesivamente para los demás campos
  }

  function obtenerInformacionHojaPersonajeDesdeJSON() {
    // Aquí puedes simular la obtención de los datos del JSON
    // por ejemplo, podrías crear un objeto con los datos
    return {
      nombre: "Personaje cargado desde JSON",
      // Otros campos de la hoja de personaje...
    };
  }
});


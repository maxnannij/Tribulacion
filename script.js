document.addEventListener("DOMContentLoaded", function() {
  const guardarLocalButton = document.getElementById("guardar-local");
  const agregarItemButton = document.getElementById("add-item");

  guardarLocalButton.addEventListener("click", function() {
    const hojaPersonaje = obtenerInformacionHojaPersonaje();
    localStorage.setItem("hojaPersonaje", JSON.stringify(hojaPersonaje));
    alert("La información se ha guardado localmente.");
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

  function agregarItemInventario() {
    const inventarioList = document.getElementById("inventario-list");
    const newItem = document.createElement("li");
    newItem.innerHTML = `
      <input type="text" class="item-input" placeholder="Nombre del Item">
      <input type="number" class="item-counter" min="0" value="0">
      <button class="delete-item">Borrar</button>
    `;
    inventarioList.appendChild(newItem);

    // Agregar evento de clic al botón de borrar
    const deleteButton = newItem.querySelector(".delete-item");
    deleteButton.addEventListener("click", function() {
      if (confirm("¿Estás seguro de que deseas borrar este ítem?")) {
        newItem.remove();
      }
    });
  }
});

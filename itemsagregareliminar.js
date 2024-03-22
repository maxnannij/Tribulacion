document.addEventListener("DOMContentLoaded", function () {
  var addItemButton = document.getElementById("add-item");
  var itemList = document.getElementById("inventario-list");

  addItemButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (itemList.childElementCount < 5) {
      var newItem = document.createElement("li");
      newItem.innerHTML = `
        <input type="text" class="item-input" placeholder="Nombre del Item">
        <input type="number" class="item-counter" min="0" value="0">
        <a href="#" class="remove-item">Eliminar</a>
      `;
      itemList.appendChild(newItem);
    } else {
      alert("Solo se pueden agregar hasta 5 ítems.");
    }
  });

  itemList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      e.preventDefault();
      if (itemList.childElementCount > 1) {
        e.target.parentNode.remove();
      } else {
        alert("Debe haber al menos un ítem.");
      }
    }
  });
});

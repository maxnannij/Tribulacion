/*****************************++efecto equipo*****************************************/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los campos de vida de los equipamientos
    const camposVida = document.querySelectorAll('.vida-input');
    
    // Función para sumar los puntos de vida de los equipamientos
    function sumarPuntosVida() {
        let totalVida = 0;
        camposVida.forEach(function(input) {
            totalVida += parseInt(input.value) || 0; // Asegurarse de manejar campos vacíos
        });
        return totalVida;
    }
    
    // Función para actualizar el campo de efecto de vida con el total calculado
    function actualizarEfectoVida() {
        const efectoVidaInput = document.getElementById('efecto-vida');
        const totalVida = sumarPuntosVida();
        efectoVidaInput.value = totalVida;
    }
    
    // Llamar a la función para actualizar el campo de efecto de vida al cargar la página
    actualizarEfectoVida();
    
    // Escuchar cambios en los campos de vida de los equipamientos y actualizar el campo de efecto de vida
    camposVida.forEach(function(input) {
        input.addEventListener('input', actualizarEfectoVida);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los campos de fuerza de los equipamientos
    const camposFuerza = document.querySelectorAll('.ataque-input');
    
    // Función para sumar los puntos de fuerza de los equipamientos
    function sumarPuntosFuerza() {
        let totalFuerza = 0;
        camposFuerza.forEach(function(input) {
            totalFuerza += parseInt(input.value) || 0; // Asegurarse de manejar campos vacíos
        });
        return totalFuerza;
    }
    
    // Función para actualizar el campo de efecto de fuerza con el total calculado
    function actualizarEfectoFuerza() {
        const efectoFuerzaInput = document.getElementById('efecto-fuerza');
        const totalFuerza = sumarPuntosFuerza();
        efectoFuerzaInput.value = totalFuerza;
    }
    
    // Llamar a la función para actualizar el campo de efecto de fuerza al cargar la página
    actualizarEfectoFuerza();
    
    // Escuchar cambios en los campos de fuerza de los equipamientos y actualizar el campo de efecto de fuerza
    camposFuerza.forEach(function(input) {
        input.addEventListener('input', actualizarEfectoFuerza);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los campos de inteligencia de los equipamientos
    const camposInteligencia = document.querySelectorAll('.inteligencia-input');
    
    // Función para sumar los puntos de inteligencia de los equipamientos
    function sumarPuntosInteligencia() {
        let totalInteligencia = 0;
        camposInteligencia.forEach(function(input) {
            totalInteligencia += parseInt(input.value) || 0; // Asegurarse de manejar campos vacíos
        });
        return totalInteligencia;
    }
    
    // Función para actualizar el campo de efecto de inteligencia con el total calculado
    function actualizarEfectoInteligencia() {
        const efectoInteligenciaInput = document.getElementById('efecto-inteligencia');
        const totalInteligencia = sumarPuntosInteligencia();
        efectoInteligenciaInput.value = totalInteligencia;
    }
    
    // Llamar a la función para actualizar el campo de efecto de inteligencia al cargar la página
    actualizarEfectoInteligencia();
    
    // Escuchar cambios en los campos de inteligencia de los equipamientos y actualizar el campo de efecto de inteligencia
    camposInteligencia.forEach(function(input) {
        input.addEventListener('input', actualizarEfectoInteligencia);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los campos de agilidad de los equipamientos
    const camposAgilidad = document.querySelectorAll('.agilidad-input');
    
    // Función para sumar los puntos de agilidad de los equipamientos
    function sumarPuntosAgilidad() {
        let totalAgilidad = 0;
        camposAgilidad.forEach(function(input) {
            totalAgilidad += parseInt(input.value) || 0; // Asegurarse de manejar campos vacíos
        });
        return totalAgilidad;
    }
    
    // Función para actualizar el campo de efecto de agilidad con el total calculado
    function actualizarEfectoAgilidad() {
        const efectoAgilidadInput = document.getElementById('efecto-agilidad');
        const totalAgilidad = sumarPuntosAgilidad();
        efectoAgilidadInput.value = totalAgilidad;
    }
    
    // Llamar a la función para actualizar el campo de efecto de agilidad al cargar la página
    actualizarEfectoAgilidad();
    
    // Escuchar cambios en los campos de agilidad de los equipamientos y actualizar el campo de efecto de agilidad
    camposAgilidad.forEach(function(input) {
        input.addEventListener('input', actualizarEfectoAgilidad);
    });
});
/***************************************Guardar**************************************/
document.addEventListener('DOMContentLoaded', function() {
  // Cargar datos guardados al inicio
  cargarDatos();

  // Función para cargar los datos guardados
  function cargarDatos() {
    var datosGuardados = localStorage.getItem('hojaPersonaje');
    if (datosGuardados) {
      var datos = JSON.parse(datosGuardados);
      document.getElementById('nombre-personaje').innerText = datos.nombre || '';
      document.getElementById('clase').value = datos.clase || '';
      document.getElementById('nivel').value = datos.nivel || '';
      document.getElementById('vida').value = datos.vida || '';
      document.getElementById('fuerza').value = datos.fuerza || '';
      document.getElementById('inteligencia').value = datos.inteligencia || '';
      document.getElementById('agilidad').value = datos.agilidad || '';
      // Cargar items del inventario
      var inventario = datos.inventario || [];
      var inventarioList = document.getElementById('inventario-list');
      inventarioList.innerHTML = '';
      inventario.forEach(function(item) {
        var newItem = document.createElement('li');
        newItem.innerHTML = `
          <input type="text" class="item-input" placeholder="Nombre del Item" value="${item.nombre}">
          <input type="number" class="item-counter" min="0" value="${item.cantidad}">
        `;
        inventarioList.appendChild(newItem);
      });
    }
  }

  // Función para guardar los datos
  function guardarDatos() {
    var nombrePersonaje = document.getElementById('nombre-personaje').innerText;
    var clase = document.getElementById('clase').value;
    var nivel = document.getElementById('nivel').value;
    var vida = document.getElementById('vida').value;
    var fuerza = document.getElementById('fuerza').value;
    var inteligencia = document.getElementById('inteligencia').value;
    var agilidad = document.getElementById('agilidad').value;
    
    var inventario = [];
    var items = document.querySelectorAll('.item-input');
    var cantidades = document.querySelectorAll('.item-counter');
    items.forEach(function(item, index) {
      inventario.push({
        nombre: item.value,
        cantidad: cantidades[index].value
      });
    });

    var datos = {
      nombre: nombrePersonaje,
      clase: clase,
      nivel: nivel,
      vida: vida,
      fuerza: fuerza,
      inteligencia: inteligencia,
      agilidad: agilidad,
      inventario: inventario
    };

    localStorage.setItem('hojaPersonaje', JSON.stringify(datos));
  }

  // Cargar datos al inicio
  cargarDatos();

  // Guardar datos al hacer clic en el botón
  document.getElementById('guardar').addEventListener('click', function(event) {
    event.preventDefault();
    guardarDatos();
    alert('Los datos han sido guardados.');
  });
});
/*+++++++++++++++++++++++++++++++++++Calculo total de capacidades+++++++++++++++++++++++++++++++*/
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los elementos relevantes
    const vidaInput = document.getElementById("vida");
    const fuerzaInput = document.getElementById("fuerza");
    const inteligenciaInput = document.getElementById("inteligencia");
    const agilidadInput = document.getElementById("agilidad");

    const efectoVidaInput = document.getElementById("efecto-vida");
    const efectoFuerzaInput = document.getElementById("efecto-fuerza");
    const efectoInteligenciaInput = document.getElementById("efecto-inteligencia");
    const efectoAgilidadInput = document.getElementById("efecto-agilidad");

    const totalVidaInput = document.getElementById("total-vida");
    const totalFuerzaInput = document.getElementById("total-fuerza");
    const totalInteligenciaInput = document.getElementById("total-inteligencia");
    const totalAgilidadInput = document.getElementById("total-agilidad");

    // Selecciona los elementos de equipamiento relevantes
    const equipamientoInputs = document.querySelectorAll('.equipamiento');

    // Calcula los totales
    const calcularTotales = () => {
        let vida = parseInt(vidaInput.value);
        let fuerza = parseInt(fuerzaInput.value);
        let inteligencia = parseInt(inteligenciaInput.value);
        let agilidad = parseInt(agilidadInput.value);

        let efectoVida = parseInt(efectoVidaInput.value);
        let efectoFuerza = parseInt(efectoFuerzaInput.value);
        let efectoInteligencia = parseInt(efectoInteligenciaInput.value);
        let efectoAgilidad = parseInt(efectoAgilidadInput.value);

        // Suma los valores de equipamiento
        equipamientoInputs.forEach(input => {
            if (input.value !== '') {
                switch (input.id.split('-')[1]) {
                    case 'vida':
                        vida += parseInt(input.value);
                        break;
                    case 'fuerza':
                        fuerza += parseInt(input.value);
                        break;
                    case 'inteligencia':
                        inteligencia += parseInt(input.value);
                        break;
                    case 'agilidad':
                        agilidad += parseInt(input.value);
                        break;
                }
            }
        });

        // Calcula los totales
        totalVidaInput.value = vida + efectoVida;
        totalFuerzaInput.value = fuerza + efectoFuerza;
        totalInteligenciaInput.value = inteligencia + efectoInteligencia;
        totalAgilidadInput.value = agilidad + efectoAgilidad;
    };

    // Escucha eventos de cambio en los campos de entrada y llama a la función calcularTotales
    [vidaInput, fuerzaInput, inteligenciaInput, agilidadInput,
     efectoVidaInput, efectoFuerzaInput, efectoInteligenciaInput, efectoAgilidadInput].forEach(input => {
        input.addEventListener("input", calcularTotales);
    });

    // Escucha eventos de cambio en los campos de equipamiento y llama a la función calcularTotales
    equipamientoInputs.forEach(input => {
        input.addEventListener('input', calcularTotales);
    });

    // Calcula los totales al cargar la página
    calcularTotales();
});
/**************agregar y quitar items***********************/
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
/*******************************Niveles********************************/
  document.addEventListener("DOMContentLoaded", function() {
    const nivelInput = document.getElementById("nivel");
    const puntosDisponiblesSpan = document.getElementById("puntos-disponibles");
    let puntosDisponibles = 200; // Cada persona comienza con 200 puntos disponibles
    let nivelAnterior = 1; // Nivel anterior inicializado en 1

    // Función para actualizar los puntos disponibles
    function actualizarPuntosDisponibles() {
      const vida = parseInt(document.getElementById("vida").value);
      const fuerza = parseInt(document.getElementById("fuerza").value);
      const inteligencia = parseInt(document.getElementById("inteligencia").value);
      const agilidad = parseInt(document.getElementById("agilidad").value);

      const sumaCapacidades = vida + fuerza + inteligencia + agilidad;
      const puntosPorCapacidad = sumaCapacidades * 1; // Se asignan 2 puntos por cada punto de capacidad
      const puntosPorNivel = (parseInt(nivelInput.value) - 1) * 6; // Cada nivel por encima del primero otorga 6 puntos extras
      puntosDisponibles = 200 + puntosPorNivel - puntosPorCapacidad;

      puntosDisponiblesSpan.textContent = puntosDisponibles;
    }

    // Event listener para cambios en el nivel
    nivelInput.addEventListener("input", actualizarPuntosDisponibles);

    // Agregar eventos de escucha a los campos de entrada de capacidades
    const camposCapacidades = document.querySelectorAll("#vida, #fuerza, #inteligencia, #agilidad");
    camposCapacidades.forEach(function(input) {
      input.addEventListener("input", actualizarPuntosDisponibles);
    });

    // Inicialización de puntos disponibles
    actualizarPuntosDisponibles();
  });
/***********************************tirar dados*************************/
document.addEventListener("DOMContentLoaded", function() {
    const dados = document.querySelectorAll('.dado');
    dados.forEach(dado => {
        dado.addEventListener("click", function() {
            const caras = parseInt(dado.dataset.caras); // Obtener el número de caras del atributo data-caras
            const resultado = tirarDado(caras); // Generar número aleatorio limitado por el número de caras
            girarDado(dado); // Girar el dado al hacer clic
            setTimeout(() => {
                mostrarResultado(dado, resultado); // Mostrar el resultado después de un tiempo
            }, 1000); // Esperar 1 segundo (corresponde a la duración de la animación en CSS)
        });
    });

    function tirarDado(caras) {
        return Math.floor(Math.random() * caras) + 1; // Generar número aleatorio dentro del rango correcto
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

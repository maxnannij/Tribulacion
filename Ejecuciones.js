//calculo de equipo inteligencia y agilidad//
document.addEventListener("DOMContentLoaded", function() {
    const modInteligenciaElement = document.querySelector('.inteligencia-modificada');
    const inteligenciaEquipoElements = document.querySelectorAll('.inteligencia-input');

    // Función para calcular la inteligencia modificada
    function calcularInteligenciaModificada() {
        let inteligenciaEquipo = 0;

        // Suma la inteligencia proporcionada por cada pieza de equipo
        inteligenciaEquipoElements.forEach(element => {
            inteligenciaEquipo += parseInt(element.value) || 0;
        });

        // Actualiza el valor de la inteligencia modificada en el DOM
        modInteligenciaElement.textContent = inteligenciaEquipo;
    }

    // Event listener para calcular la inteligencia modificada cuando se modifique el equipo
    inteligenciaEquipoElements.forEach(element => {
        element.addEventListener('input', calcularInteligenciaModificada);
    });

    // Calcula la inteligencia modificada inicialmente al cargar la página
    calcularInteligenciaModificada();
});
document.addEventListener("DOMContentLoaded", function() {
    const modAgilidadElement = document.querySelector('.agilidad-modificada');
    const agilidadEquipoElements = document.querySelectorAll('.agilidad-input');

    // Función para calcular la agilidad modificada
    function calcularAgilidadModificada() {
        let agilidadEquipo = 0;

        // Suma la agilidad proporcionada por cada pieza de equipo
        agilidadEquipoElements.forEach(element => {
            agilidadEquipo += parseInt(element.value) || 0;
        });

        // Actualiza el valor de la agilidad modificada en el DOM
        modAgilidadElement.textContent = agilidadEquipo;
    }

    // Event listener para calcular la agilidad modificada cuando se modifique el equipo
    agilidadEquipoElements.forEach(element => {
        element.addEventListener('input', calcularAgilidadModificada);
    });

    // Calcula la agilidad modificada inicialmente al cargar la página
    calcularAgilidadModificada();
});

//calculo de fuerza,inteligencia y agilidad//
document.addEventListener("DOMContentLoaded", function() {
    const numberBaseInteligencia = document.querySelector(".numberbaseinteligencia");
    const inteligenciaModificada = document.querySelector(".inteligencia-modificada");
    const numberInteligencia = document.querySelector(".numberinteligencia");
    const inteligenciaEquipos = document.querySelectorAll(".inteligencia-equipo");

    // Función para actualizar el número de inteligencia total
    function actualizarNumeroInteligenciaTotal() {
        let inteligenciaTotalEquipos = 0;

        // Sumar la inteligencia de todos los equipos
        inteligenciaEquipos.forEach(function(inteligenciaEquipo) {
            const inteligenciaEquipoValor = parseInt(inteligenciaEquipo.value);
            if (!isNaN(inteligenciaEquipoValor)) {
                inteligenciaTotalEquipos += inteligenciaEquipoValor;
            }
        });

        // Obtener la inteligencia base y la inteligencia modificada
        const inteligenciaBase = parseInt(numberBaseInteligencia.textContent);
        const inteligenciaMod = parseInt(inteligenciaModificada.textContent);

        // Calcular la inteligencia total sumando la inteligencia base, la inteligencia modificada y la inteligencia de los equipos
        const inteligenciaTotal = inteligenciaBase + inteligenciaMod + inteligenciaTotalEquipos;

        // Actualizar el número de inteligencia en el HTML
        numberInteligencia.textContent = inteligenciaTotal;
    }

    // Función para actualizar el número de inteligencia total cada 2 segundos
    setInterval(actualizarNumeroInteligenciaTotal, 500);

    // Evento input para la inteligencia base y la inteligencia modificada
    numberBaseInteligencia.addEventListener("input", actualizarNumeroInteligenciaTotal);
    inteligenciaModificada.addEventListener("input", actualizarNumeroInteligenciaTotal);

    // Evento input para la inteligencia de cada equipo
    inteligenciaEquipos.forEach(function(inteligenciaEquipo) {
        inteligenciaEquipo.addEventListener("input", actualizarNumeroInteligenciaTotal);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const numberBaseAgilidad = document.querySelector(".numberbaseagilidad");
    const agilidadModificada = document.querySelector(".agilidad-modificada");
    const numberAgilidad = document.querySelector(".numberagilidad");
    const agilidadEquipos = document.querySelectorAll(".agilidad-equipo");

    // Función para actualizar el número de agilidad total
    function actualizarNumeroAgilidadTotal() {
        let agilidadTotalEquipos = 0;

        // Sumar la agilidad de todos los equipos
        agilidadEquipos.forEach(function(agilidadEquipo) {
            const agilidadEquipoValor = parseInt(agilidadEquipo.value);
            if (!isNaN(agilidadEquipoValor)) {
                agilidadTotalEquipos += agilidadEquipoValor;
            }
        });

        // Obtener la agilidad base y la agilidad modificada
        const agilidadBase = parseInt(numberBaseAgilidad.textContent);
        const agilidadMod = parseInt(agilidadModificada.textContent);

        // Calcular la agilidad total sumando la agilidad base, la agilidad modificada y la agilidad de los equipos
        const agilidadTotal = agilidadBase + agilidadMod + agilidadTotalEquipos;

        // Actualizar el número de agilidad en el HTML
        numberAgilidad.textContent = agilidadTotal;
    }

    // Función para actualizar el número de agilidad total cada 2 segundos
    setInterval(actualizarNumeroAgilidadTotal, 500);

    // Evento input para la agilidad base y la agilidad modificada
    numberBaseAgilidad.addEventListener("input", actualizarNumeroAgilidadTotal);
    agilidadModificada.addEventListener("input", actualizarNumeroAgilidadTotal);

    // Evento input para la agilidad de cada equipo
    agilidadEquipos.forEach(function(agilidadEquipo) {
        agilidadEquipo.addEventListener("input", actualizarNumeroAgilidadTotal);
    });
});

//barra de vida//
document.addEventListener("DOMContentLoaded", function() {
    function actualizarBarraDeVida() {
        // Obtener elementos de la barra de vida y la cantidad de vida base y modificada
        const barraDeVida = document.querySelector('.barradevida');
        const baseVida = parseInt(document.querySelector('.numberbasevida').textContent);
               
        // Calcular el total de vida sumando la base y la modificación
        const vidaTotal = baseVida;
        
        // Calcular la vida actual restando el daño recibido
        const vidaActual = Math.max(0, vidaTotal - parseInt(document.querySelector('.numberdanio').textContent));
        
        // Calcular el porcentaje de vida actual
        const porcentajeVida = Math.min(100, (vidaActual / vidaTotal) * 100);

        // Crear la cadena de gradiente lineal con los porcentajes de vida
        const gradienteLineal = `linear-gradient(90deg, red ${porcentajeVida}%, black ${porcentajeVida}%)`;

               // Establecer el color de la barra de vida
        barraDeVida.style.background = gradienteLineal;
    }
    actualizarBarraDeVida(); // Llamada inicial para actualizar la barra de vida inmediatamente
    setInterval(actualizarBarraDeVida, 500); // Ejecutar la función cada medio segundo
});

//calculo de vida//
document.addEventListener("DOMContentLoaded", function() {
    function calcularVidaRestante() {
        // Obtener el elemento de la vida total y el daño recibido
        const baseVida = parseInt(document.querySelector('.numberbasevida').textContent);
        const danioRecibido = parseInt(document.querySelector('.numberdanio').textContent);
        
        // Calcular la vida restante
        const vidaRestante = Math.max(0, baseVida - danioRecibido);
        
        // Actualizar el elemento de la vida restante en el HTML
        document.querySelector('.numbervida').textContent = vidaRestante;
    }

    calcularVidaRestante(); // Calcular la vida restante inicialmente
    setInterval(calcularVidaRestante, 500); // Calcular la vida restante cada medio segundo
});

//calculo de atk//
document.addEventListener("DOMContentLoaded", function() {
    const numberAtkElement = document.getElementById('numberatk');
    const numberFuerzaElement = document.getElementById('numberfuerza');
    const fuerzaEquipoElements = document.querySelectorAll('.fuerza-input');

    // Función para calcular el total de ataque del equipo
    function calcularTotalAtaque() {
        let totalAtaqueEquipo = 0;

        // Suma el ataque proporcionado por cada pieza de equipo
        fuerzaEquipoElements.forEach(element => {
            totalAtaqueEquipo += parseInt(element.value) || 0;
        });

        // Calcula el total de ataque
        const totalAtaque = totalAtaqueEquipo + Math.floor(parseInt(numberFuerzaElement.textContent) / 10);

        // Actualiza el valor del total de ataque en el DOM
        numberAtkElement.textContent = totalAtaque;
    }

    // Llama a la función para calcular el total de ataque cada medio segundo
    setInterval(calcularTotalAtaque, 500);

    // Llama a la función para calcular el total de ataque inicialmente
    calcularTotalAtaque();

    // Escucha cambios en el número de fuerza
    numberFuerzaElement.addEventListener('input', function() {
        calcularTotalAtaque();
    });
});

//calculo de def//
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de defensa del equipamiento
    const elementosDefensa = document.querySelectorAll('.vida-input');

    // Función para sumar la defensa del equipamiento
    function sumarDefensa() {
        let defensaTotal = 0;
        elementosDefensa.forEach(elemento => {
            defensaTotal += parseInt(elemento.value) || 0; // Parsear el valor a entero o asignar 0 si no se puede parsear
        });
        return defensaTotal;
    }

    // Función para actualizar el valor de la defensa en el elemento numberdef
    function actualizarDefensa() {
        const numberdefElemento = document.getElementById('numberdef');
        numberdefElemento.textContent = sumarDefensa();
    }
    // Llamar a la función actualizarDefensa al cargar la página
    actualizarDefensa();

    // Escuchar cambios en los elementos de defensa del equipamiento y actualizar la defensa
    elementosDefensa.forEach(elemento => {
        elemento.addEventListener('input', actualizarDefensa);
    });
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

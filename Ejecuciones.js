document.addEventListener("DOMContentLoaded", function() {
    const modVidaElement = document.querySelector('.vida-modificada');
    const vidaEquipoElements = document.querySelectorAll('.vida-input');

    // Función para calcular la vida modificada
    function calcularVidaModificada() {
        let vidaEquipo = 0;

        // Suma la vida proporcionada por cada pieza de equipo
        vidaEquipoElements.forEach(element => {
            vidaEquipo += parseInt(element.value) || 0;
        });

        // Actualiza el valor de la vida modificada en el DOM
        modVidaElement.textContent = vidaEquipo;
    }

    // Event listener para calcular la vida modificada cuando se modifique el equipo
    vidaEquipoElements.forEach(element => {
        element.addEventListener('input', calcularVidaModificada);
    });

    // Calcula la vida modificada inicialmente al cargar la página
    calcularVidaModificada();
});
document.addEventListener("DOMContentLoaded", function() {
    const modFuerzaElement = document.querySelector('.fuerza-modificada');
    const fuerzaEquipoElements = document.querySelectorAll('.fuerza-input');

    // Función para calcular la fuerza modificada
    function calcularFuerzaModificada() {
        let fuerzaEquipo = 0;

        // Suma la fuerza proporcionada por cada pieza de equipo
        fuerzaEquipoElements.forEach(element => {
            fuerzaEquipo += parseInt(element.value) || 0;
        });

        // Actualiza el valor de la fuerza modificada en el DOM
        modFuerzaElement.textContent = fuerzaEquipo;
    }

    // Event listener para calcular la fuerza modificada cuando se modifique el equipo
    fuerzaEquipoElements.forEach(element => {
        element.addEventListener('input', calcularFuerzaModificada);
    });

    // Calcula la fuerza modificada inicialmente al cargar la página
    calcularFuerzaModificada();
});
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

document.addEventListener("DOMContentLoaded", function() {
    const numberBaseVida = document.querySelector(".numberbasevida");
    const vidaModificada = document.querySelector(".vida-modificada");
    const numberVida = document.querySelector(".numbervida");
    const vidaEquipos = document.querySelectorAll(".vida-equipo");
    const numberDanio = document.querySelector(".numberdanio");

    // Función para actualizar el número de vida total
    function actualizarNumeroVidaTotal() {
        let vidaTotalEquipos = 0;

        // Sumar la vida de todos los equipos
        vidaEquipos.forEach(function(vidaEquipo) {
            const vidaEquipoValor = parseInt(vidaEquipo.value);
            if (!isNaN(vidaEquipoValor)) {
                vidaTotalEquipos += vidaEquipoValor;
            }
        });

        // Obtener la vida base y la vida modificada
        const vidaBase = parseInt(numberBaseVida.textContent);
        const vidaMod = parseInt(vidaModificada.textContent);

        // Calcular la vida total sumando la vida base, la vida modificada y la vida de los equipos
        let vidaTotal = vidaBase + vidaMod + vidaTotalEquipos;

        // Restar el daño de la vida si el valor de daño es válido
        const danio = parseInt(numberDanio.textContent);
        if (!isNaN(danio)) {
            vidaTotal -= danio;
            if (vidaTotal < 0) {
                vidaTotal = 0; // La vida no puede ser negativa
            }
        }

        // Actualizar el número de vida en el HTML
        numberVida.textContent = vidaTotal;
    }

    // Función para actualizar el número de vida total cada 2 segundos
    setInterval(actualizarNumeroVidaTotal, 500);

    // Evento input para la vida base y la vida modificada
    numberBaseVida.addEventListener("input", actualizarNumeroVidaTotal);
    vidaModificada.addEventListener("input", actualizarNumeroVidaTotal);

    // Evento input para la vida de cada equipo
    vidaEquipos.forEach(function(vidaEquipo) {
        vidaEquipo.addEventListener("input", actualizarNumeroVidaTotal);
    });

    // Evento input para el daño
    numberDanio.addEventListener("input", actualizarNumeroVidaTotal);
});
document.addEventListener("DOMContentLoaded", function() {
    const numberBaseFuerza = document.querySelector(".numberbasefuerza");
    const fuerzaModificada = document.querySelector(".fuerza-modificada");
    const numberFuerza = document.querySelector(".numberfuerza");
    const fuerzaEquipos = document.querySelectorAll(".fuerza-equipo");

    // Función para actualizar el número de fuerza total
    function actualizarNumeroFuerzaTotal() {
        let fuerzaTotalEquipos = 0;

        // Sumar la fuerza de todos los equipos
        fuerzaEquipos.forEach(function(fuerzaEquipo) {
            const fuerzaEquipoValor = parseInt(fuerzaEquipo.value);
            if (!isNaN(fuerzaEquipoValor)) {
                fuerzaTotalEquipos += fuerzaEquipoValor;
            }
        });

        // Obtener la fuerza base y la fuerza modificada
        const fuerzaBase = parseInt(numberBaseFuerza.textContent);
        const fuerzaMod = parseInt(fuerzaModificada.textContent);

        // Calcular la fuerza total sumando la fuerza base, la fuerza modificada y la fuerza de los equipos
        const fuerzaTotal = fuerzaBase + fuerzaMod + fuerzaTotalEquipos;

        // Actualizar el número de fuerza en el HTML
        numberFuerza.textContent = fuerzaTotal;
    }

    // Función para actualizar el número de fuerza total cada 2 segundos
    setInterval(actualizarNumeroFuerzaTotal, 500);

    // Evento input para la fuerza base y la fuerza modificada
    numberBaseFuerza.addEventListener("input", actualizarNumeroFuerzaTotal);
    fuerzaModificada.addEventListener("input", actualizarNumeroFuerzaTotal);

    // Evento input para la fuerza de cada equipo
    fuerzaEquipos.forEach(function(fuerzaEquipo) {
        fuerzaEquipo.addEventListener("input", actualizarNumeroFuerzaTotal);
    });
});
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

document.addEventListener("DOMContentLoaded", function() {
    function actualizarBarraDeVida() {
        // Obtener elementos de la barra de vida y la cantidad de vida base y modificada
        const barraDeVida = document.querySelector('.barradevida');
        const baseVida = parseInt(document.querySelector('.numberbasevida').textContent);
        const modVida = parseInt(document.querySelector('.vida-modificada').textContent);
        
        // Calcular el total de vida sumando la base y la modificación
        const vidaTotal = baseVida + modVida;
        
        // Calcular la vida actual restando el daño recibido
        const vidaActual = Math.max(0, vidaTotal - parseInt(document.querySelector('.numberdanio').textContent));
        
        // Calcular el porcentaje de vida actual
        const porcentajeVida = Math.min(100, (vidaActual / vidaTotal) * 100);

        // Crear la cadena de gradiente lineal con los porcentajes de vida
        const gradienteLineal = `linear-gradient(90deg, red ${porcentajeVida}%, rgba(0,0,0,0) ${porcentajeVida}%)`;

               // Establecer el color de la barra de vida
        barraDeVida.style.background = gradienteLineal;
    }
    actualizarBarraDeVida(); // Llamada inicial para actualizar la barra de vida inmediatamente
    setInterval(actualizarBarraDeVida, 500); // Ejecutar la función cada medio segundo
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

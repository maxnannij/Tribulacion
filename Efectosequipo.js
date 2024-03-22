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

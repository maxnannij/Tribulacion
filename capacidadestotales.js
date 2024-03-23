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

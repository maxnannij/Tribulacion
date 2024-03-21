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

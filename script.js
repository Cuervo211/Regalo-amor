document.addEventListener("DOMContentLoaded", () => {

    const btnInicio = document.getElementById("btnInicio");
    const btnFinal = document.getElementById("btnFinal");

    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");

    const teAmo = document.getElementById("teAmo");
    const fecha = document.getElementById("fecha");
    const img = document.getElementById("img");

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    // Inicio
    btnInicio.addEventListener("click", () => {
        inicio.style.display = "none";
        contenido.classList.remove("oculto");
    });

    // Carrusel automático
    setInterval(() => {
        slides[index].classList.remove("activo");
        index = (index + 1) % slides.length;
        slides[index].classList.add("activo");
    }, 3000);

    // Final
    btnFinal.addEventListener("click", () => {
        teAmo.classList.remove("oculto");
        fecha.classList.remove("oculto");

        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 400]);
        }
    });

});

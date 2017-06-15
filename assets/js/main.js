// Para el funcionamiento del carrusel

$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('navbar');

    if (distanciaY > 100) {
        navbar.classList.add('navbar-color');
        // Si la navbar vuelve arriba regresar al color original, al logo original y al estilo de invisibilidad.
    } else {
        navbar.classList.remove('navbar-color');
    }
}

// Evento para el navegador al hacer scroll que detona la función que provoca los cambios de color en la navbar segun la distancia
window.addEventListener('scroll', cambioDeNavbar);
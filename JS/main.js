$(document).ready(function() {

    $(".carousel-inner").owlCarousel({

        autoPlay: 2000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        loop: true,
        responsive: {
            600: {
                items: 4
            }
        }






    });

});
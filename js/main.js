(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 
    

})(jQuery);

//bagian menu search

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const query = input.value.toLowerCase();

        if (query.includes('pulau osi')) {
            window.location.href = 'Blog-pulau-osi.html';
        } else if (query.includes('pulau kassa')) {
            window.location.href = 'destination.html';
        } else if (query.includes('selat valentine buano')) {
            window.location.href = 'Blog-pulau-buano.html';
        } else if (query.includes('alang assaude')) {
            window.location.href = 'Blog-pulau-alang-asaude.html';
        } else if (query.includes('air terjun lumoli')) {
            window.location.href = 'Blog-air-terjun-lumoli.html';
        } else if (query.includes('manipa luhutubang')) {
            window.location.href = 'Blog-pulau-manipa-luhutubang.html';
        } else if (query.includes('galery wisata')) {
            window.location.href = 'gallery.html';
        } else if (query.includes('testimonial')) {
            window.location.href = 'testimonial.html';
        } else if (query.includes('resto putri negri kawa')) {
            window.location.href = 'tour.html';
        } else if (query.includes('resto pulau osi')) {
            window.location.href = 'tour-resto-osi.html';
        } else if (query.includes('d,luku cafe kairatu')) {
            window.location.href = 'tour -luku-cafe.html';
        } else if (query.includes('rumah makan99 piru')) {
            window.location.href = 'tour -makan 99.html';
        } else if (query.includes('hotel amboina piru')) {
            window.location.href = 'guides.html';
        } else if (query.includes('hotel kairatu beach')) {
            window.location.href = 'hotel-kairatu-beach.html';
        } else if (query.includes('mitra hotel')) {
            window.location.href = 'mitra-hotel.html';
        } else if (query.includes('penginapan indah kairatu')) {
            window.location.href = 'penginapan-indah.html';
        } else if (query.includes('arion penginapan')) {
            window.location.href = 'arion-penginapan.html';
        } else {
            window.location.href = '404.html'; // Mengarahkan ke halaman 404
        }
    });
});


// bagian fitur multibahasa

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
       
        includedLanguages: 'en,id,ru,ar,ms', // Ganti amb dengan ms untuk Bahasa Melayu
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Panggil fungsi googleTranslateElementInit saat dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    googleTranslateElementInit();
});




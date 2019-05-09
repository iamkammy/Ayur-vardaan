(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /*====  welcome_hero_slider_area =====*/

        $('.welcome_hero_slider_area').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            dots: true,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dots: false
                },
                480: {
                    items: 1,
                    margin: 0,
                    dots: false
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1
                }
            }
        });
        /*====  welcome_hero_slider_area_two =====*/

        $('.welcome_hero_slider_area_two').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dots: false,
                    nav: false
                },
                480: {
                    items: 1,
                    margin: 0,
                    dots: false,
                    nav: false
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1
                }
            }
        });

        /*====  testimonial_slider_carousel =====*/

        $('.doctor_of_medicare_carousel').owlCarousel({
            items: 4,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                480: {
                    items: 2,
                    margin: 30
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4
                }
            }
        });
        /*====  testimonial_slider_carousel =====*/

        $('.testimonial_slider_carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            dots: true,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                480: {
                    items: 2,
                    margin: 30
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3
                }
            }
        });

        /*====  testimonial_slider_carousel_two =====*/

        $('.testimonial_slider_carousel_two').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            dots: true,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                480: {
                    items: 2,
                    margin: 30
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3
                }
            }
        });

        //Counter Js
        $('.fact_number').counterUp({
            delay: 20,
            time: 2500
        });

        // isotope filter js
        $(".portfolio_menu ul li").on('click', function () {

            $(".portfolio_menu ul li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".portfolio_items").isotope({
                filter: selector,
                transitionDuration: '0.6s'
            });

        });

        // Magnific Popup video

        $('#video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            zoom: {
                enabled: true,
            }
        });


        // scrollt nav
        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'easeInOutExpo', // the easing function for animation
            scrollTime: 1250, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70 // offste (in px) for fixed top navigation
        });

        // sticky header
        jQuery(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $("#header").removeClass("sticky");
            } else {
                $("#header").addClass("sticky");
            }
        });



    });

    // slicknav activate
    $('#nav').slicknav({
        prependTo: '.responsive_mobile_menu',
        label: '',
        closeOnClick: true
    });


    // off canvas menu hide show js
    $(".toggle_btn").on('click', function () {
        $(".sidebar_header_menu_area").toggleClass("show");
    });





    // Window Load Function
    $(window).on('load', function () {
        // isotope js
        $(".portfolio_items").isotope();

    });

})(jQuery);

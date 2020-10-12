'use strict';

// onload
window.onload = function () {}
//console.log('onload');

// onload


;window.addEventListener('DOMContentLoaded', function () {

    console.log('ttt');

    // alzheimer__card
    var swiper = new Swiper('.alzheimer__card', {
        slidesPerView: 1,
        spaceBetween: 0
    });
    // alzheimer__card


    // conversion
    $(".cover-btn__before").click(function () {
        gsap.to('.conversion__content--before', 0.8, { x: '88vw' });
    });
    $(".cover-btn__after").click(function () {
        gsap.to('.conversion__content--before', 0.8, { x: '0vw' });
    });
    // conversion


    // drug-spec
    var drugSwite2 = new Swiper('.drug-swite--2', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        allowClick: false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
            slideChangeTransitionStart: function slideChangeTransitionStart() {
                var idx = this.realIndex + 1;
                console.log('idx = ' + idx);
                $('.drug-spec__panel--inner .step_2 .explain-text span').removeClass('active');
                $('.drug-spec__panel--inner .step_2 .explain-text span.idx-' + idx).addClass('active');
            }
        }
    });

    var drugSwite3 = new Swiper('.drug-swite--3', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        //autoplay: { delay: 500, },
        speed: 500,
        allowClick: false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
            slideChangeTransitionStart: function slideChangeTransitionStart() {
                var idx = this.realIndex + 1;
                console.log('idx = ' + idx);
                $('.drug-spec__panel--inner .step_3 .explain-text span').removeClass('active');
                $('.drug-spec__panel--inner .step_3 .explain-text span.idx-' + idx).addClass('active');
            }
        }
    });
    // drug-spec
});
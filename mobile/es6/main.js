// onload
window.onload = function(){
    //console.log('onload');
}
// onload


window.addEventListener('DOMContentLoaded', () => { 

    console.log('ttt');



    // alzheimer__card
    var alzheimerSwiper = new Swiper('.alzheimer__card', {
        slidesPerView: 1,
        spaceBetween: 0,
      });
    // alzheimer__card


    // conversion
    $(".cover-btn__before").click( () => {
        gsap.to('.conversion__content--before', 0.8, {x: '88vw'});
    })
    $(".cover-btn__after").click( () => {
        gsap.to('.conversion__content--before', 0.8, {x: '0vw'});
    })
    // conversion


    // drug-spec
    var drugSwite2 = new Swiper('.drug-swite--2', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 800,
        allowClick : false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function(){
                var idx = this.realIndex + 1;
                console.log('idx = ' + idx);
                $('.drug-spec__panel--inner .step_2 .explain-text span').removeClass('active');
                $('.drug-spec__panel--inner .step_2 .explain-text span.idx-'+idx).addClass('active');
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
        allowClick : false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function(){
                var idx = this.realIndex + 1;
                console.log('idx = ' + idx);
                $('.drug-spec__panel--inner .step_3 .explain-text span').removeClass('active');
                $('.drug-spec__panel--inner .step_3 .explain-text span.idx-'+idx).addClass('active');
            }
        }
    });
    // drug-spec


    // meterial
    var meterialSwiper = new Swiper('.meterial__panel--inner', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });
    // meterial


    // meterial-hope
    $('.table-more').click( ()=>{
        gsap.to('.table-more', 0.8, {opacity: 0, pointerEvents: 'none'});
        gsap.to('.table-hide', 0.8, {opacity: 1, pointerEvents: 'visible', delay: 0.4});
        gsap.to('.meterial-hope__panel--table tbody', 0.6, {opacity: 1, pointerEvents: 'visible'});
        gsap.to('.meterial-hope__panel .solution--list', 0.6, {opacity: 0.2});
    });

    $('.table-hide').click( ()=>{
        console.log('tttttt');
        gsap.to('.table-hide', 0.8, {opacity: 0, pointerEvents: 'none'});
        gsap.to('.table-more', 0.8, {opacity: 1, pointerEvents: 'visible', delay: 0.4});
        gsap.to('.meterial-hope__panel--table tbody', 0.6, {opacity: 0, pointerEvents: 'none'});
        gsap.to('.meterial-hope__panel .solution--list', 0.6, {opacity: 1});
    });
    // meterial-hope


});
// onload
window.onload = function(){
    //console.log('onload');
}
// onload


window.addEventListener('DOMContentLoaded', () => { 

    //리로드시 최상단으로
    window.onbeforeunload = function () {
        //window.scrollTo(0, 0);
        //console.clear(); 
    }

    const ctrl = new ScrollMagic.Controller();

    // default setting
    const defaultSet = () => {
        console.log('default set');
        //gsap.set('.alzheimer__headline--title', {opacity: 0, y: -40});
        //gsap.set('.alzheimer__headline--info', {opacity: 0, y: -40});
    }


    // intro-news
    let introHeight, paperSize;
    const contentResize = () => {
        let h = window.innerHeight;
        paperSize = ~~( $('.intro-news__paper').height() * 0.3);
        introHeight = ~~( $('.intro-news').height() * 2 );
        gsap.set('.intro-news', {width: '100%' });
        gsap.set('.intro-news__paper', {marginTop: -(paperSize / 2), width: '160%', marginLeft: '-80%', top: '50%'});
    }
    contentResize();
    window.addEventListener("resize", contentResize);

    var introNewsScene = new ScrollMagic.Scene({
        triggerElement: ".intro-news",
        triggerHook: "onLeave",
        duration: introHeight,
        offset: -50
      }).setPin(".intro-news")
      .addTo(ctrl).on("progress", function (e) {

        let paperScalePoint = e.progress.toFixed(1);
        let paperScaleUnit = 0.065;

        console.log('paperScalePoint = ' + paperScalePoint);
        
        if( paperScalePoint == 0 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.3, top: '50%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: 0});
        }else if( paperScalePoint <= 0.1 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.415, top: '40%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -45});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.2 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.48, top: '30%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -90});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.3 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.545, top: '30%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -135});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.4 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.61, top: '30%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -180});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.5 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.675, top: '25%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -225});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.6 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.74, top: '20%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -270});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.7 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.805, top: '20%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -315});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.8 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 0.87, top: '15%', marginTop: -(paperSize / 2)});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -345});
            gsap.to('.intro-news', 0.5, {height: '100vh'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
        }else if( paperScalePoint <= 0.9 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 1, top: '0', marginTop: 0});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -360});
            gsap.to('.intro-news', 0.5, {height: '250vw'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'scroll'});
        }else if( paperScalePoint <= 1 ){
            gsap.to('.intro-news__paper', 0.5, {scale: 1, top: '0', marginTop: 0});
            gsap.to('.intro-news__paper--box', 0.5, {rotate: -360});
            gsap.to('.intro-news', 0.5, {height: '250vw'});
            gsap.set('.intro-news__paper--content p', {overflowY: 'scroll'});
        }
        
      });
      //.addIndicators({
      //  colorTrigger: "red", //트리거 팁 색상
      //  colorStart: "red", //스타트 팁 색상
      //  colorEnd: "red", //종료 팁 색상
      //  indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
      //});

    // intro-news


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


    defaultSet(); // 기본 셋팅 실행

});
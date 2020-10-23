
window.addEventListener('DOMContentLoaded', () => { 

    //리로드시 최상단으로
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const ctrl = new ScrollMagic.Controller();

    // default setting
    let introHeight, paperSize;
    const defaultSet = () => {
        let h = window.innerHeight;
        paperSize = ~~( $('.intro-news__paper').height() * 0.3);
        introHeight = ~~( $('.intro-news').height() );
        gsap.set('.intro-news', {width: '100%', height: '100vh' });
        gsap.set('.intro-news__paper',  {scale: 0.3, top: '50%', width: '160%', marginLeft: '-80%', marginTop: -(paperSize / 2)});
        gsap.set('.intro-news__paper--box', {rotate: 0});
        gsap.set('.intro-news__paper--content p', {overflowY: 'hidden'});
    }

    var introRotateAction = new TimelineLite({paused: true})
    .set('body', {overflow: 'hidden'}, 0)
    .to('.intro-news__paper', 1, {scale: 1, top: '0', marginTop: 0}, 0)
    .to('.intro-news__paper--box', 1, {rotate: -360}, 0)
    .set('.intro-news', {height: '250vw'}, 0.1)
    .set('.intro-news__paper--content p', {overflowY: 'scroll'}, 0.9)
    .set('body', {overflow: 'visible'}, 1.2)
    
   var introNewsScene = new ScrollMagic.Scene({
        triggerElement: ".intro-news",
        triggerHook: "onLeave",
        duration: introHeight
    })
    .addTo(ctrl).on("enter leave progress", function (e) {
        if(e.type == 'enter'){
            introRotateAction.play();
        }else if(e.type == 'leave'){
            introRotateAction.reverse();
        }
    });
    // intro-news


    // alzheimer 
    var alzheimerAction = new TimelineLite()
    .to('.alzheimer__headline--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.alzheimer__headline--info', 0.6, {opacity: 1, y: 0}, 0.5)

    var alzheimerScene = new ScrollMagic.Scene({
        triggerElement: ".alzheimer",
        triggerHook: 0.6
    }).setTween(alzheimerAction).addTo(ctrl);
    // alzheimer 


    // alzheimer__card
    var alzheimerSwiper = new Swiper('.alzheimer__card', {
        slidesPerView: 1,
        spaceBetween: 0,
    });
    // alzheimer__card


    // alzheimer-hope
    var alzheimerHopeAction =  new TimelineLite()
    .to('.alzheimer-hope__text-title', 0.8, {opacity: 1, y: 0}, 0.2)
    .to('.alzheimer-hope__comment .quotation-left', 0.6, {opacity: 1}, 0.7)
    .to('.alzheimer-hope__comment .quotation-right', 0.6, {opacity: 1}, 0.7)
    .to('.alzheimer-hope__comment-text', 0.6, {opacity: 1, y: 0}, 1.2)
    .to('.alzheimer-hope__text-explain', 1, {opacity: 1, y: 0}, 0.8)
    .to('.alzheimer-hope__comment .underline', 0.6, {scaleX: 1}, 1)
    .to('.alzheimer-hope__comment-copylight', 0.8, {opacity: 1}, 1.4)

    var alzheimerHopeScene = new ScrollMagic.Scene({
        triggerElement: ".alzheimer-hope",
        triggerHook: 0.6
    }).setTween(alzheimerHopeAction).addTo(ctrl);

    gsap.set('.alzheimer-hope__comment-text', {fontWeight: '400', scale:0.9});
    var alzheimerHopeTextScene = new ScrollMagic.Scene({
        triggerElement: ".alzheimer-hope__comment-text",
        triggerHook: 0.6,
        duration: Number($('.alzheimer-hope__comment-text').height())
    }).addTo(ctrl).on("progress", function (e) {
        var textProgress1 = e.progress.toFixed(1);
        if( textProgress1 >= 0.3){
            gsap.to('.alzheimer-hope__comment-text', 1, {fontWeight: '400', scale:0.9});
        }
        if( textProgress1 >= 0.6){
            gsap.to('.alzheimer-hope__comment-text', 1, {fontWeight: '500', scale:0.95});
        }
        if( textProgress1 >= 0.9){
            gsap.to('.alzheimer-hope__comment-text', 1, {fontWeight: '700', scale:1});
        }
    })
    // alzheimer-hope


    // conversion
    var conversionSetAction = new TimelineLite()
    .to('.conversion__content--before-title', 0.6, {opacity: 1, y: 0}, 0)
    .to('.conversion__content--before-graph', 0.6, {opacity: 1}, 0.4)
    .to('.conversion__content--before-detail', 0.8, {opacity: 1}, 0.6)
    .to('.conversion__content--before .conversion__now', 0.6, {opacity: 1}, 1)
    .to('.conversion__content--before .cover-btn__before', 0.8, {opacity: 1}, 1.2)
    .to('.conversion__content--before-graph .round.first', 1, {scale: 1}, 0.8)
    .to('.conversion__content--before-graph .round.second', 1, {scale: 1}, 1)
    .to('.conversion__content--before-graph .round.third', 1, {scale: 1}, 1.2)
    .to('.conversion__content--before-graph .round.first span', 0.8, {opacity: 1}, 1.4)
    .to('.conversion__content--before-graph .round.second span', 0.8, {opacity: 1}, 1.6)
    .to('.conversion__content--before-graph .round.third span', 0.8, {opacity: 1}, 1.8)

    var conversionrSwiper = new Swiper('.conversion__swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide : 1,
        on: {
            slideChangeTransitionStart: function(){
                var idx = this.realIndex + 1;
                gsap.set('.conversion__swiper', {x: '0'});
                if(idx == 2){
                    gsap.to('.conversion__swiper', 0.8, {x: '6vw', delay: 0.8});
                }else {
                    gsap.to('.conversion__swiper', 0.8, {x: '-6vw', delay: 0.8});
                }
            }
        }
    });
    $('.cover-btn__before').click( ()=> {
        conversionrSwiper.slideTo(0, 600);
    });
    $('.cover-btn__after').click( ()=> {
        conversionrSwiper.slideTo(1, 600);
    });

    var conversionScene = new ScrollMagic.Scene({
        triggerElement: ".conversion",
        triggerHook: 0.6
    }).setTween(conversionSetAction).addTo(ctrl);
    // conversion


    // drug-spec
    var drugSpecAction =  new TimelineLite()
    .to('.drug-spec__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.drug-spec__panel--cover', 0.6, {opacity: 1}, 0.4)
    .to('.drug-spec__panel--navigation', 0.6, {opacity: 1}, 0.6)

    var drugSpecScene = new ScrollMagic.Scene({
        triggerElement: ".drug-spec",
        triggerHook: 0.6
    }).setTween(drugSpecAction).addTo(ctrl);

    const drugSpecStep = {
        step1(){
            $('.drug-spec__panel--inner').removeClass('active');
            $('.drug-spec__panel--inner.step_1').addClass('active');
            gsap.to('.drug-spec__background', 0.6, {opacity: 1});
            $('.navigation__second').removeClass('active');
            $('.navigation__thrid').removeClass('active');
            $('.navigation__first').addClass('active');            
        },
        step2(){
            $('.drug-spec__panel--inner').removeClass('active');
            $('.drug-spec__panel--inner.step_2').addClass('active');
            $('.navigation__first').removeClass('active');
            $('.navigation__thrid').removeClass('active');
            $('.navigation__second').addClass('active');
            gsap.to('.drug-spec__background', 0.6, {opacity: 0});
        },
        step3(){
            $('.drug-spec__panel--inner').removeClass('active');
            $('.drug-spec__panel--inner.step_3').addClass('active');
            $('.navigation__first').removeClass('active');
            $('.navigation__second').removeClass('active');
            $('.navigation__thrid').addClass('active');
            gsap.to('.drug-spec__background', 0.6, {opacity: 0});
        }
    }

    var drugSwite2 = new Swiper('.drug-swite--2', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 800,
        allowClick : false,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function(){
                var idx = this.realIndex + 1;
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
        speed: 500,
        allowClick : false,
        allowTouchMove : true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function(){
                var idx = this.realIndex + 1;
                $('.drug-spec__panel--inner .step_3 .explain-text span').removeClass('active');
                $('.drug-spec__panel--inner .step_3 .explain-text span.idx-'+idx).addClass('active');
            }
        }
    });

    let drugOffset = $('.drug-spec__offset').height() - 50;
    var drugSpecScene = new ScrollMagic.Scene({
        triggerElement: ".drug-spec__pin",
        triggerHook: "onLeave",
        duration: ~~(window.innerHeight * 3),
        offset : drugOffset,
    }).setPin(".drug-spec__pin")
    .addTo(ctrl).on("progress", function (e) {
        let drugSpecStepPoint = e.progress.toFixed(2);

       if( drugSpecStepPoint <= 0.3 ){
        drugSpecStep.step1();
    }
    if( drugSpecStepPoint > 0.3 && drugSpecStepPoint <= 0.45 ){
        drugSpecStep.step2();
        drugSwite2.slideTo(0, 600);
    }
    if( drugSpecStepPoint > 0.45 && drugSpecStepPoint <= 0.6 ){
        drugSpecStep.step2();
        drugSwite2.slideTo(1, 600);
    }
    if( drugSpecStepPoint > 0.6 && drugSpecStepPoint <= 0.75 ){
        drugSpecStep.step2();
        drugSwite2.slideTo(2, 600);
    }
    if( drugSpecStepPoint > 0.75 && drugSpecStepPoint <= 0.9 ){
        drugSpecStep.step3();
        drugSwite3.slideTo(0, 600);
    }
    if( drugSpecStepPoint > 0.9 ){
        drugSpecStep.step3();
        drugSwite3.slideTo(1, 600);
    }
    });
    // drug-spec


    // meterial
    var meterialAction =  new TimelineLite()
    .set('.meterial__panel--title', {opacity: 0, y: 40}, 0)
    .to('.meterial__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.meterial__panel--inner-list .round', 0.8, {opacity: 1}, 0.4)
    .to('.meterial__panel--inner-list .inner-content', 0.8, {opacity: 1}, 0.8)
    .to('.meterial__panel--inner-detail', 0.6, {opacity: 1}, 1.2)

    var meterialScene = new ScrollMagic.Scene({
        triggerElement: ".meterial",
        triggerHook: 0.4
    }).setTween(meterialAction).addTo(ctrl);

    var meterialSwiper = new Swiper('.meterial__panel--inner', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });
    // meterial


    // gv-1001
    var gv1001Action =  new TimelineLite()
    .to('.gv-1001__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.gv-1001__panel--content-video', 1, {opacity: 1}, 0.4)
    .to('.gv-1001__panel--content-detail-text', 0.6, {opacity: 1, y: 0}, 0.6)
    .to('.gv-1001__panel--content-comment .quotation-left', 0.6, {opacity: 1}, 1)
    .to('.gv-1001__panel--content-comment .quotation-right', 0.6, {opacity: 1}, 1)
    .to('.gv-1001__panel--content-text', 1, {opacity: 1}, 1.3)
    .to('.gv-1001__panel--content-comment .border', 0.6, {opacity: 1}, 1.5)
    .to('.gv-1001__panel--content-copylight', 0.6, {opacity: 1}, 1.8)

    var gv1001Scene = new ScrollMagic.Scene({
        triggerElement: ".gv-1001",
        triggerHook: 0.5
    }).setTween(gv1001Action).addTo(ctrl);

    gsap.set('.gv-1001__panel--content-text', {fontWeight: '400', scale:0.9});
    var gv1001TextScene = new ScrollMagic.Scene({
        triggerElement: ".gv-1001__panel--content-text",
        triggerHook: 0.6,
        duration: Number($('.gv-1001__panel--content-text').height())
    }).addTo(ctrl).on("progress", function (e) {
        var textProgress1 = e.progress.toFixed(1);
        if( textProgress1 >= 0.3){
            gsap.to('.gv-1001__panel--content-text', 1, {fontWeight: '400', scale:0.9});
        }
        if( textProgress1 >= 0.6){
            gsap.to('.gv-1001__panel--content-text', 1, {fontWeight: '500', scale:0.95});
        }
        if( textProgress1 >= 0.9){
            gsap.to('.gv-1001__panel--content-text', 1, {fontWeight: '700', scale:1});
        }
    });
    // gv-1001


    // meterial-hope
    var meterialhopeAction =  new TimelineLite()
    .to('.meterial-hope__panel--title', 0.6, {opacity: 1, transform: 'translateY(0)'}, 0.2)
    .to('.meterial-hope__panel .solution--title', 0.6, {opacity: 1, y: 0}, 0.6)
    .to('.meterial-hope__panel--table', 0.8, {opacity: 1}, 1)
    .to('.meterial-hope__panel .solution--list .solution--item.one', 1, {opacity: 1}, 1.4)
    .to('.meterial-hope__panel .solution--list .solution--item.two', 1, {opacity: 1}, 1.8)
    .to('.meterial-hope__panel .solution--list .solution--item.three', 1, {opacity: 1}, 2.2)
    .to('.meterial-hope__panel .solution--explain', 1, {opacity: 1}, 2.4)

    var meterialhopeScene = new ScrollMagic.Scene({
        triggerElement: ".meterial-hope",
        triggerHook: 0.6,
    }).setTween(meterialhopeAction).addTo(ctrl);

    $('.table-more').click( ()=>{
        gsap.to('.meterial-hope__panel--table-cell.more', {opacity: 1, pointerEvents: 'visible', delay: 0.4});
        gsap.to('.table-more', 0.8, {opacity: 0, pointerEvents: 'none'});
        gsap.to('.table-hide', 0.8, {opacity: 1, pointerEvents: 'visible', delay: 0.4});
        gsap.to('.meterial-hope__panel .solution--list', 0.6, {opacity: 0.2});
    });

    $('.table-hide').click( ()=>{
        gsap.to('.meterial-hope__panel--table-cell.more', {opacity: 0, pointerEvents: 'none'});
        gsap.to('.table-hide', 0.8, {opacity: 0, pointerEvents: 'none'});
        gsap.to('.table-more', 0.8, {opacity: 1, pointerEvents: 'visible', delay: 0.4});
        gsap.to('.meterial-hope__panel .solution--list', 0.6, {opacity: 1});
    });
    // meterial-hope


    // outro
    var outroAction =  new TimelineLite()
    .to('.outro__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.outro__panel--content-text', 0.6, {opacity: 1, y: 0}, 0.4)
    .to('.outro__panel--content-strong', 0.8, {opacity: 1}, 0.6)
    .to('.outro__panel--content-comment .quotation-left', 0.8, {opacity: 1}, 1.2)
    .to('.outro__panel--content-comment .quotation-right', 0.8, {opacity: 1}, 1.2)
    .to('.outro__panel--content-comment span', 0.8, {opacity: 1}, 1.4)
    .to('.outro__panel--content-comment .underline', 0.6, {opacity: 1}, 1.8)
    .to('.outro__panel--content-person', 1, {opacity: 1}, 1.8)

    var outroScene = new ScrollMagic.Scene({
        triggerElement: ".outro",
        triggerHook: 0.6,
    }).setTween(outroAction).addTo(ctrl);

    gsap.set('.outro__panel--content-comment .weightFont', {fontWeight: '400', scale:0.9});
    var outroTextScene = new ScrollMagic.Scene({
        triggerElement: ".outro__panel--content-comment",
        triggerHook: 0.5,
        duration: Number($('.outro__panel--content-comment .weightFont').height())
    }).addTo(ctrl).on("progress", function (e) {
        var textProgress1 = e.progress.toFixed(1);
        if( textProgress1 >= 0.3){
            gsap.to('.outro__panel--content-comment .weightFont', 1, {fontWeight: '400', scale:0.9});
        }
        if( textProgress1 >= 0.6){
            gsap.to('.outro__panel--content-comment .weightFont', 1, {fontWeight: '500', scale:0.95});
        }
        if( textProgress1 >= 0.9){
            gsap.to('.outro__panel--content-comment .weightFont', 1, {fontWeight: '700', scale:1});
        }
    });
    // outro

    defaultSet(); // 기본 셋팅 실행

});

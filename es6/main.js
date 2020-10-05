// 스크립트 시작

//global
//const pageIntroAction;

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
        //console.log('default set');
        gsap.set('.alzheimer__headline--title', {opacity: 0, y: -40});
        gsap.set('.alzheimer__headline--info', {opacity: 0, y: -40});
    }

    // intro-news
    let paperY;
    const contentResize = () => {
        let h = window.innerHeight;
        // ((브라우저높이 - paper) / 2 ) - gnb
        paperY = ~~(( h - 574 ) / 2) - 45;
        console.log('paperY = ' + paperY);
        //paperY = 0;
        ////transform: translateY(20vh) scale(0.3);
        //gsap.set('.intro-news__paper', {scale: 0.35, y: paperY});
        gsap.set('.intro-news__paper', {scale: 0.35, y: '20vh', rotate: 0, top: -535});
    }

    contentResize();
    window.addEventListener("resize", contentResize);

    var introNewsScene = new ScrollMagic.Scene({
        triggerElement: ".intro-news",
        triggerHook: "onLeave",
        duration: "1640",
        offset: -45
      }).setPin(".intro-news")
      .addTo(ctrl).on("progress", function (e) {

        let paperScalePoint = e.progress.toFixed(1);
        let paperScaleUnit = 0.065;

        if( paperScalePoint == 0 ){
            //console.log('000');
            gsap.to('.intro-news__paper--annexed', 0.2, {opacity: 0});
            gsap.to('.intro-news__paper', 0.5, {scale: 0.35, y: '20vh', rotate: 0, top: -535, width: 1300 , marginLeft: -650 });
        }else if( paperScalePoint <= 0.1 ){
            //console.log('1');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.415, y: '20vh', rotate: -45, top: -475, width: 'calc(1300px + 10%)', marginLeft: 'calc(-650px - 5%)' });
        }else if( paperScalePoint <= 0.2 ){
            //console.log('2');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.48, y: '15vh', rotate: -90, top: -415, width: 'calc(1300px + 10%)', marginLeft: 'calc(-650px - 5%)' });
        }else if( paperScalePoint <= 0.3 ){
            //console.log('3');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.545, y: '15vh', rotate: -135, top: -355, width: 'calc(1300px + 20%)', marginLeft: 'calc(-650px - 10%)' });
        }else if( paperScalePoint <= 0.4 ){
            //console.log('4');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.61, y: '10vh', rotate: -180, top: -295, width: 'calc(1300px + 20%)', marginLeft: 'calc(-650px - 10%)' });
        }else if( paperScalePoint <= 0.5 ){
            //console.log('5');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.675, y: '10vh', rotate: -225, top: -235, width: 'calc(1300px + 30%)', marginLeft: 'calc(-650px - 15%)' });
        }else if( paperScalePoint <= 0.6 ){
            //console.log('6');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.74, y: '5vh', rotate: -270, top: -175, width: 'calc(1300px + 30%)', marginLeft: 'calc(-650px - 15%)' });
        }else if( paperScalePoint <= 0.7 ){
            //console.log('7');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.805, y: '5vh', rotate: -315, top: -140, width: 'calc(1300px + 40%)', marginLeft: 'calc(-650px - 20%)' });
        }else if( paperScalePoint <= 0.8 ){
            //console.log('8');
            gsap.to('.intro-news__paper', 0.5, {scale: 0.87, y: '2vh', rotate: -360, top: -50, width: 'calc(1300px + 40%)', marginLeft: 'calc(-650px - 20%)' });
        }else if( paperScalePoint <= 0.9 ){
            //console.log('9');
            gsap.to('.intro-news__paper--annexed', 0.2, {opacity: 0});
            gsap.to('.intro-news__paper', 0.5, {scale: 1, y: 0, rotate: -360, top: -0, width: 'calc(1300px + 50%)', marginLeft: 'calc(-650px - 25%)' });
        }else if( paperScalePoint <= 1 ){
            //console.log('1');
            gsap.to('.intro-news__paper--annexed', 0.2, {opacity: 1});
            gsap.to('.intro-news__paper', 0.5, {scale: 1, y: 0, rotate: -360, top: -0, width: 'calc(1300px + 50%)', marginLeft: 'calc(-650px - 25%)' });
        }
      });
      //.addIndicators({
      //  colorTrigger: "red", //트리거 팁 색상
      //  colorStart: "red", //스타트 팁 색상
      //  colorEnd: "red", //종료 팁 색상
      //  indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
      //  });

    // intro-news

    // alzheimer 
    var alzheimerAction = new TimelineLite()
    .to('.alzheimer__headline--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.alzheimer__headline--info', 0.6, {opacity: 1, y: 0}, 0.5)
    .to('.alzheimer__card--item-news.one', 0.5, {opacity: 1}, 0.7)
    .to('.alzheimer__card--item-news.two', 0.5, {opacity: 1}, 0.8)
    .to('.alzheimer__card--item-news.three', 0.5, {opacity: 1}, 0.9)
    .to('.alzheimer__card--item-news.four', 0.5, {opacity: 1}, 1)

    var alzheimerScene = new ScrollMagic.Scene({
        triggerElement: ".alzheimer",
        triggerHook: 0.6
    }).setTween(alzheimerAction).addTo(ctrl);
    // alzheimer 

    // alzheimer-hope
    var alzheimerHopeAction =  new TimelineLite()
    .to('.alzheimer-hope__text-title', 0.8, {opacity: 1, y: 0}, 0.2)
    .to('.alzheimer-hope__comment-text', 0.6, {opacity: 1}, 0.4)
    .to('.alzheimer-hope__text-explain', 1, {opacity: 1, y: 0}, 0.6)
    .to('.alzheimer-hope__comment-copylight', 0.8, {opacity: 1}, 1)
    //.to('.alzheimer-hope__person', 1, {opacity: 1, x: 0}, 0.5)

    var alzheimerHopeScene = new ScrollMagic.Scene({
        triggerElement: ".alzheimer-hope",
        triggerHook: 0.6
    }).setTween(alzheimerHopeAction).addTo(ctrl);
    // alzheimer-hope

    
    // conversion
    var conversionHopeAction =  new TimelineLite()
    .to('.conversion__content--after-title', 0.6, {opacity: 1}, 0.2)
    .to('.conversion__content--before-title', 0.6, {opacity: 1}, 0.2)

    var conversionHopeScene = new ScrollMagic.Scene({
        triggerElement: ".conversion",
        triggerHook: 0.6
    }).setTween(conversionHopeAction).addTo(ctrl);

    
    $('.drag__cover--btn').hover(function(){
        //gsap.to('.drag__cover--btn', 0.5, {opacity: 0, delay: 0.1});
        gsap.to('.drag__cover', 0.8, {scaleX: 0, delay: 0.4});
        gsap.to('.conversion__content--before-graph', 0.6, {opacity: 1, delay: 0.6});
        gsap.to('.conversion__content--after-graph', 0.6, {opacity: 1, delay: 0.8});
        gsap.to('.conversion__now', 0.8, {opacity: 1, delay: 0.8});
    });
    

    var introNewsScene = new ScrollMagic.Scene({
        triggerElement: ".drug-spec",
        duration: "1500",
        triggerHook : 0.99
      })
      .addTo(ctrl).on("progress", function (e) {

        let flipProgress = e.progress.toFixed(1);
        //let paperScaleUnit = 0.065;
        //console.log('flipProgress = ' + flipProgress);
        if( flipProgress == 0 ){
            gsap.to('.conversion__panel--flip', 0.3, {scale: 1, ease: 'none'});
        }else if( flipProgress <= 0.1 ){
            //console.log('01');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 1.5, ease: 'none'});
        }else if( flipProgress <= 0.2 ){
            //console.log('2');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 2, ease: 'none'});
        }else if( flipProgress <= 0.3 ){
            //console.log('3');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 2.5, ease: 'none'});
        }else if( flipProgress <= 0.4 ){
            //console.log('4');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 3, ease: 'none'});
        }else if( flipProgress <= 0.5 ){
            //console.log('5');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 3.5, ease: 'none'});
        }else if( flipProgress <= 0.6 ){
            //console.log('6');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 4, ease: 'none'});
        }else if( flipProgress <= 0.7 ){
            //console.log('7');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 4.5, ease: 'none'});
        }else if( flipProgress <= 0.8 ){
            //console.log('8');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 5, ease: 'none'});
        }else if( flipProgress <= 0.9 ){
            //console.log('9');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 5.5, ease: 'none'});
        }else if( flipProgress <= 1 ){
            //console.log('1111');
            gsap.to('.conversion__panel--flip', 0.3, {scale: 6, ease: 'none'});
        }
      });
      //.addIndicators({
      //  colorTrigger: "red", //트리거 팁 색상
      //  colorStart: "red", //스타트 팁 색상
      //  colorEnd: "red", //종료 팁 색상
      //  indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
        //});
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

    //drug-swite--2
    var drugSwite2 = new Swiper('.drug-swite--2', {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        //autoplay: { delay: 1000, },
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

    var drugSpecScene = new ScrollMagic.Scene({
        triggerElement: ".drug-spec__pin",
        triggerHook: "onLeave",
        duration: "2500",
        offset : -45
        ////offset: -200
        //offset: drugOffset
      }).setPin(".drug-spec__pin")
      .addTo(ctrl).on("progress", function (e) {

        let drugSpecStepPoint = e.progress.toFixed(1);
            console.log(drugSpecStepPoint)


            if(drugSpecStepPoint <= 0.3){
                
                drugSpecStep.step1();
            }else if(drugSpecStepPoint <= 0.6){
                
                drugSpecStep.step2();
            }else {
                
                drugSpecStep.step3();
            }
            
      });
      //.addIndicators({
      //  colorTrigger: "red", //트리거 팁 색상
      //  colorStart: "red", //스타트 팁 색상
      //  colorEnd: "red", //종료 팁 색상
      //  indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
      //});
    // drug-spec


    // meterial
    var meterialAction =  new TimelineLite()
    .to('.meterial__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)

    var meterialScene = new ScrollMagic.Scene({
        triggerElement: ".meterial",
        triggerHook: 0.6
    }).setTween(meterialAction).addTo(ctrl);

    let meterialHover;
    $(".meterial__panel--inner-list-item").hover(function(){
        if( $(this).hasClass('active') ) return false;
        meterialHover = $(this).attr('class').replace('meterial__panel--inner-list-item list','');
        
        $(".meterial__panel--inner-list-item").removeClass('active');
        $(".meterial__panel--inner-list-item.list"+meterialHover).addClass('active');


    }, function(){
        console.log('leave');
        $(".meterial__panel--inner-list-item").removeClass('active');
    });
    // meterial


    // gv-1001
    var gv1001Action =  new TimelineLite()
    .to('.gv-1001__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.gv-1001__panel--content-comment .quotation-left', 0.6, {opacity: 1}, 0.4)
    .to('.gv-1001__panel--content-comment .quotation-right', 0.6, {opacity: 1}, 0.4)
    .to('.gv-1001__panel--content-text', 1, {opacity: 1}, 0.6)
    .to('.gv-1001__panel--content-detail', 0.6, {opacity: 1, y: 0}, 1)
    //.to('.gv-1001__panel--content-image', 1, {opacity: 1}, 1.2)
    .to('.gv-1001__panel--content-video', 1, {opacity: 1}, 1.2)

    var gv1001Scene = new ScrollMagic.Scene({
        triggerElement: ".gv-1001",
        triggerHook: 0.4
    }).setTween(gv1001Action).addTo(ctrl);
    // gv-1001


    // meterial-hope
    var meterialhopeAction =  new TimelineLite()
    .to('.meterial-hope__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.meterial-hope__panel--table', 1, {opacity: 1}, 0.4)
    .to('.table__background', 1.2, {opacity: 1}, 0.6)
    //.to('.meterial-hope__panel--explain', 0.6, {opacity: 1, y: 0}, 0.6)

    var tableBgRotate = new TimelineLite({paused: true, repeat: -1})
    /*
    .to('.table__background li:nth-of-type(1)', 2, {background: '#1e00ff'}, 0)
    .to('.table__background li:nth-of-type(2)', 2, {background: '#1e00ff'}, 2)
    .to('.table__background li:nth-of-type(1)', 0.5, {background: '#0c0066'}, 2)
    .to('.table__background li:nth-of-type(3)', 2, {background: '#1e00ff'}, 4)
    .to('.table__background li:nth-of-type(2)', 0.5, {background: '#0c0066'}, 4)
    */
    .to('.table__background li:nth-of-type(1)', 2, {background: '#1e00ff'}, 0)
    .to('.table__background li:nth-of-type(2)', 2, {background: '#1e00ff'}, 2)
    .to('.table__background li:nth-of-type(1)', 0.5, {background: '#0c0066'}, 2)

    .to('.table__background li:nth-of-type(3)', 2, {background: '#1e00ff'}, 4)
    .to('.table__background li:nth-of-type(2)', 0.5, {background: '#0c0066'}, 4)

    .to('.table__background li:nth-of-type(4)', 2, {background: '#1e00ff'}, 6)
    .to('.table__background li:nth-of-type(3)', 0.5, {background: '#0c0066'}, 6)

    var meterialhopeScene = new ScrollMagic.Scene({
        triggerElement: ".meterial-hope",
        triggerHook: 0.6
    }).setTween(meterialhopeAction).addTo(ctrl)
    .on('enter leave', function(e){
        //console.log(e);
        if(e.state == 'BEFORE'){
            tableBgRotate.pause();  
        }else {
            tableBgRotate.play();  
        }
    });
    // meterial-hope

    // alzheimer__card
    let hoverItem;
    $(".alzheimer__card--item-news").hover(function(){
        if( $(this).hasClass('active') ) return false;
        hoverItem = $(this).attr('class').replace('alzheimer__card--item-news ', '');

        $(".alzheimer__card--item-news").removeClass('active');
        $(".alzheimer__card--item-news .explain").removeClass('active');
        $(".alzheimer__card--item-news."+hoverItem).addClass('active');
        $(".alzheimer__card--item-news."+hoverItem+' .explain').addClass('active');
    });
    // alzheimer__card


    // outro
    var outroAction =  new TimelineLite()
    .to('.outro__panel--title', 0.6, {opacity: 1, y: 0}, 0.2)
    .to('.outro__panel--content-text', 0.6, {opacity: 1, y: 0}, 0.4)
    .to('.outro__panel--content-strong', 0.6, {opacity: 1, y: 0}, 0.6)
    .to('.outro__panel--content-person', 1, {opacity: 1}, 1)
    .to('.outro__panel--content-comment', 1, {opacity: 1}, 1.4)

    var outroScene = new ScrollMagic.Scene({
        triggerElement: ".outro",
        triggerHook: 0.1,
        offset : 400
    }).setTween(outroAction).addTo(ctrl);
    //.addIndicators({
    //    colorTrigger: "white", //트리거 팁 색상
    //    colorStart: "white", //스타트 팁 색상
    //    colorEnd: "white", //종료 팁 색상
    //    indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
    //  });
    // outro


    

    defaultSet(); // 기본 셋팅 실행

})


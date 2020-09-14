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
        console.log('default set');
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


    // conversion
    $('.drag__cover--btn').hover(function(){
        gsap.to('.drag__cover--btn', 0.5, {opacity: 0, delay: 0.1});
        gsap.to('.drag__cover', 0.8, {scaleX: 0, delay: 0.4});
        gsap.to('.conversion__content--before-graph', 0.6, {opacity: 1, delay: 0.6});
        gsap.to('.conversion__content--after-graph', 0.6, {opacity: 1, delay: 0.8});
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
    
    //let drguMg = (window.innerHeight - 880) / 2;
    //let drugOffset = 1920 - drguMg;

    console.log('drugOffset = ' + drugOffset);
    var drugSpecScene = new ScrollMagic.Scene({
        triggerElement: ".drug-spec__pin",
        triggerHook: "onLeave",
        duration: "3000",
        //offset: -200
        offset: drugOffset
      }).setPin(".drug-spec__pin")
      .addTo(ctrl).on("progress", function (e) {

        let test = e.progress.toFixed(1);
            console.log(test)
       
      })
      .addIndicators({
        colorTrigger: "red", //트리거 팁 색상
        colorStart: "red", //스타트 팁 색상
        colorEnd: "red", //종료 팁 색상
        indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
      });
    // drug-spec

    // alzheimer__card
    let hoverItem;
    $(".alzheimer__card--item-news").hover(function(){
        if( $(this).hasClass('active') ) return false;
        hoverItem = $(this).attr('class').replace('alzheimer__card--item-news ', '');

        $('.alzheimer__card--item-news.four .numberring:nth-of-type(2)').removeClass('on');
        $(".alzheimer__card--item-news").removeClass('active');
        $(".alzheimer__card--item-news."+hoverItem).addClass('active');
        if( hoverItem == 'four' ){
            $('.alzheimer__card--item-news.four .numberring:nth-of-type(2)').addClass('on');
        }
    });
    // alzheimer__card




    

    defaultSet(); // 기본 셋팅 실행

})


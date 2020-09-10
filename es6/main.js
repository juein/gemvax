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
        window.scrollTo(0, 0);
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
        gsap.set('.intro-news__paper', {scale: 0.35, y: paperY});
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

        // e.progress
        
        let paperScalePoint = e.progress.toFixed(1);
        console.log( paperScalePoint );
        
        //let paperTop = paperY / 10;
        //console.log('paperTop = ' + paperTop);
        
        // 0 : 0.35
        //  1 - 0.3 : 0.65
        // 0.065 / 10 = 0.065
        // 0.65 * paperScalePoint

        //let paperTop = 49;
        //490 - (49 * paperScalePoint)


        //gsap.to('.intro-news__paper', 0.5, {scale: ( paperScalePoint * 1 ) });
        //gsap.to('.intro-news__paper', 0.5, {scale: ( paperScalePoint * 1 ), top: -490 + (49 * paperScalePoint) });

        if( paperScalePoint <= 0.3){
            console.log('111');
        }else if( paperScalePoint <= 0.6 ){
            console.log('222');
        }else {
            console.log('333');
        }




      })
      .addIndicators({
        colorTrigger: "red", //트리거 팁 색상
        colorStart: "red", //스타트 팁 색상
        colorEnd: "red", //종료 팁 색상
        indent: 40 //우측 스크롤바부터 얼마나 떨어뜨릴지
    });

    // intro-news




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


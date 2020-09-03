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
    //window.onbeforeunload = function () {
    //    //window.scrollTo(0, 0);
    //    //console.clear(); 
    //}

    const ctrl = new ScrollMagic.Controller();

    // default setting
    const defaultSet = () => {
        console.log('default set');
    }




    

    defaultSet(); // 기본 셋팅 실행

})


'use strict';

// 스크립트 시작

//global
//const pageIntroAction;

// onload
window.onload = function () {}
//console.log('onload');

// onload


;window.addEventListener('DOMContentLoaded', function () {

    //리로드시 최상단으로
    //window.onbeforeunload = function () {
    //    //window.scrollTo(0, 0);
    //    //console.clear(); 
    //}

    var ctrl = new ScrollMagic.Controller();

    // default setting
    var defaultSet = function defaultSet() {
        console.log('default set');
    };

    defaultSet(); // 기본 셋팅 실행
});
var VirtualScroll = (function(document) {

    var vs = {};

    var numListeners, listeners = [], initialized = false;

    var touchStartX, touchStartY;

    // [ These settings can be customized with the options() function below ]
    // Mutiply the touch action by two making the scroll a bit faster than finger movement
    var touchMult = 2;
    // Firefox on Windows needs a boost, since scrolling is very slow
    var firefoxMult = 15;
    // How many pixels to move with each key press
    var keyStep = 120;
    // General multiplier for all mousehweel including FF
    var mouseMult = 1;

    var bodyTouchAction;

    var hasWheelEvent = 'onwheel' in document;
    var hasMouseWheelEvent = 'onmousewheel' in document;
    var hasTouch = 'ontouchstart' in document;
    var hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
    var hasPointer = !!window.navigator.msPointerEnabled;
    var hasKeyDown = 'onkeydown' in document;

    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;

    var event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0,
        originalEvent: null
    };

    vs.on = function(f) {
        if(!initialized) initListeners();
        listeners.push(f);
        numListeners = listeners.length;
    }

    vs.options = function(opt) {
        keyStep = opt.keyStep || 120;
        firefoxMult = opt.firefoxMult || 15;
        touchMult = opt.touchMult || 2;
        mouseMult = opt.mouseMult || 1;
    }

    vs.off = function(f) {
        listeners.splice(f, 1);
        numListeners = listeners.length;
        if(numListeners <= 0) destroyListeners();
    }

    var notify = function(e) {
        event.x += event.deltaX;
        event.y += event.deltaY;
        event.originalEvent = e;

        for(var i = 0; i < numListeners; i++) {
            listeners[i](event);
        }
    }

    var onWheel = function(e) {
        // In Chrome and in Firefox (at least the new one)
        event.deltaX = e.wheelDeltaX || e.deltaX * -1;
        event.deltaY = e.wheelDeltaY || e.deltaY * -1;

        // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
        // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
        if(isFirefox && e.deltaMode == 1) {
            event.deltaX *= firefoxMult;
            event.deltaY *= firefoxMult;
        }

        event.deltaX *= mouseMult;
        event.deltaY *= mouseMult;

        notify(e);
    }

    var onMouseWheel = function(e) {
        // In Safari, IE and in Chrome if 'wheel' isn't defined
        event.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
        event.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

        notify(e);
    }

    var onTouchStart = function(e) {
        var t = (e.targetTouches) ? e.targetTouches[0] : e;
        touchStartX = t.pageX;
        touchStartY = t.pageY;
    }

    var onTouchMove = function(e) {
        // e.preventDefault(); // < This needs to be managed externally
        var t = (e.targetTouches) ? e.targetTouches[0] : e;

        event.deltaX = (t.pageX - touchStartX) * touchMult;
        event.deltaY = (t.pageY - touchStartY) * touchMult;

        touchStartX = t.pageX;
        touchStartY = t.pageY;

        `notify`(e);
    }

    var onKeyDown = function(e) {
        // 37 left arrow, 38 up arrow, 39 right arrow, 40 down arrow
        event.deltaX = event.deltaY = 0;
        switch(e.keyCode) {
            case 37:
                event.deltaX = -keyStep;
                break;
            case 39:
                event.deltaX = keyStep;
                break;
            case 38:
                event.deltaY = keyStep;
                break;
            case 40:
                event.deltaY = -keyStep;
                break;
        }

        notify(e);
    }

    var initListeners = function() {
        if(hasWheelEvent) document.addEventListener("wheel", onWheel);
        if(hasMouseWheelEvent) document.addEventListener("mousewheel", onMouseWheel);

        if(hasTouch) {
            document.addEventListener("touchstart", onTouchStart);
            document.addEventListener("touchmove", onTouchMove);
        }

        if(hasPointer && hasTouchWin) {
            bodyTouchAction = document.body.style.msTouchAction;
            document.body.style.msTouchAction = "none";
            document.addEventListener("MSPointerDown", onTouchStart, true);
            document.addEventListener("MSPointerMove", onTouchMove, true);
        }

        if(hasKeyDown) document.addEventListener("keydown", onKeyDown);

        initialized = true;
    }

    var destroyListeners = function() {
        if(hasWheelEvent) document.removeEventListener("wheel", onWheel);
        if(hasMouseWheelEvent) document.removeEventListener("mousewheel", onMouseWheel);

        if(hasTouch) {
            document.removeEventListener("touchstart", onTouchStart);
            document.removeEventListener("touchmove", onTouchMove);
        }

        if(hasPointer && hasTouchWin) {
            document.body.style.msTouchAction = bodyTouchAction;
            document.removeEventListener("MSPointerDown", onTouchStart, true);
            document.removeEventListener("MSPointerMove", onTouchMove, true);
        }

        if(hasKeyDown) document.removeEventListener("keydown", onKeyDown);

        initialized = false;
    }

    return vs;
})(document);

var MAIN = (function(){
    var $window = $(window),
        sectionIdx = 0,
        sectionPos = 0,
        sectionPrvIdx = 0,
        sectionFlag = true,
        moveFlag = false;


    function init(){
        titleIncision('sec_type1');
        titleIncision('sec_type2');
        titleIncision('sec_type3');
        // titleIncision('sec_type4');
        btnHoverCursor($('.sec_type1 .main_img_link'));
        btnHoverCursor($('.sec_type2 .main_img_link'));
        btnHoverCursor($('.sec_type3 .main_img_link'));
        // btnHoverCursor($('.sec_type4 .main_img_link'));

        VirtualScroll.on(function(e) {
            if(!sectionFlag){
                sectionFlag = true;

                if(e.deltaY >= 0 ){
                    sectionIdx -= 1;

                    if(sectionIdx < 0){
                        sectionIdx = 0;
                        sectionFlag = false;
                        //return false;
                    }else{

                        scrollInMot(sectionIdx)
                    }

                }else{
                    sectionIdx += 1;
                    if(sectionIdx > 2){
                        sectionIdx = 2;
                        sectionFlag = false;
                        //return false;
                    }else{
                        scrollInMot(sectionIdx)
                    }
                }

                sectionPos = sectionIdx;
                TweenMax.to($(".wrap_inner"), 1, {y:-sectionIdx * ($window.height()-65),ease:Power2.easeOut});

                $('.main_wrap .section_paging .now').html(sectionIdx+1);
                TweenMax.to($('.main_wrap .section_paging .move_paging'),0.5,{y:20*sectionIdx});
            }
        });
        $window.resize(function(){
            TweenMax.to(".wrap_inner", 0, {y:-sectionIdx * ($window.height()-65)});

        });

        mainTopMotion();
        setBtns()
    }

    function setBtns(){
        $('.sec_type1 .main_img_link .btn_cursor').click(function(e){
            e.preventDefault();
            location.href = rootDomain+'/about';
            return false;
        });

        $('.sec_type2 .main_img_link .btn_cursor').click(function(e){
            e.preventDefault();
            location.href = rootDomain+'/ambassador';
            return false;
        });

        $('.sec_type3 .main_img_link .btn_cursor').click(function(e){
            e.preventDefault();
            location.href = rootDomain+'/about/bi?move=movie';
            return false;
        });

    }

    function mainTopMotion(){
        TweenMax.to($('#header .navi'),1,{top:0,ease: Power3.easeInOut});
        TweenMax.to($('.sec_type1 .img_box .img_area .img_inner>a img'),2,{opacity:1,y:0,ease: Power3.easeInOut});
        TweenMax.to($('.sec_type1 .img_box .img_area .img_inner>a img'),2,{scale:1,delay:1,ease: Power0.easeNone});
        TweenMax.to($('.sec_type1 .img_box .img_area .img_bg.top'),1.5,{yPercent:-100,ease: Power3.easeInOut});
        TweenMax.to($('.sec_type1 .img_box .img_area .img_bg.left'),2.2,{width:0,ease: Power3.easeInOut});
        TweenMax.to($('.sec_type1 .copy_box'),1,{y:0,opacity:1,delay:1,ease: Power3.easeOut});
        TweenMax.delayedCall(1.5, function(){
            for(var i = 0,len = $('.sec_type1 .copy_box .copy_area .copy_title span').length;i<len;i++){
                TweenMax.to($('.sec_type1 .copy_box .copy_area .copy_title span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.08*(i+1),ease: Power3.easeOut});
            }

        });
        TweenMax.to($('.sec_type1 .copy_area .copy_sub_txt'),1,{opacity:1,delay:2,ease: Power3.easeInOut,onStart : function(){
            sectionFlag = false;
        }});
        TweenMax.to($('.sec_type1 .copy_area .btn_more'),1,{opacity:1,delay:2.2,ease: Power3.easeInOut});
    }

    function scrollInMot(idx){
        switch (idx) {
            case 0 :
                //sectionFlag = false;
                TweenMax.set($('.sec_type1 .img_box .img_area .img_inner>a img'),{scale:1.05,opacity:0,y:900});
                TweenMax.set($('.sec_type1 .img_box .img_area .img_bg.top'),{yPercent:0});
                TweenMax.set($('.sec_type1 .img_box .img_area .img_bg.left'),{width:'100%'});
                TweenMax.set($('.sec_type1 .copy_box'),{y:100,opacity:0});
                TweenMax.set($('.sec_type1 .copy_box .copy_area .copy_title span'),{x:30,fontSize:'42px',opacity:0});
                TweenMax.set($('.sec_type1 .copy_area .copy_sub_txt'),{opacity:0});
                TweenMax.set($('.sec_type1 .copy_area .btn_more'),{opacity:0});

                TweenMax.to($('.sec_type1 .img_box .img_area .img_inner>a img'),2,{opacity:1,y:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type1 .img_box .img_area .img_inner>a img'),2,{scale:1,delay:1,ease: Power0.easeNone});
                TweenMax.to($('.sec_type1 .img_box .img_area .img_bg.top'),1.5,{yPercent:-100,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type1 .img_box .img_area .img_bg.left'),2.2,{width:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type1 .copy_box'),1,{y:0,opacity:1,delay:1,ease: Power3.easeOut});
                TweenMax.delayedCall(1.5, function(){
                    for(var i = 0,len = $('.sec_type1 .copy_box .copy_area .copy_title span').length;i<len;i++){
                        TweenMax.to($('.sec_type1 .copy_box .copy_area .copy_title span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.08*(i+1),ease: Power3.easeOut});
                    }
                });
                TweenMax.to($('.sec_type1 .copy_area .copy_sub_txt'),1,{opacity:1,delay:2,ease: Power3.easeInOut,onStart : function(){
                    sectionFlag = false;
                }});
                TweenMax.to($('.sec_type1 .copy_area .btn_more'),1,{opacity:1,delay:2.2,ease: Power3.easeInOut});
                break;
            case 1 :
                //TweenMax.set($('.sec_type2 .img_box .img_area .img_inner img'),{opacity:0,y:900});
                TweenMax.set($('.sec_type2 .img_box .img_area .img_bg.right'),{width:'100%'});
                TweenMax.set($('.sec_type2 .img_box .img_area .img_inner>a img'),{scale:1.05});
                TweenMax.set($('.sec_type2 .copy_box'),{y:100,opacity:0});
                TweenMax.set($('.sec_type2 .copy_box .copy_area .copy_title span'),{x:30,fontSize:'42px',opacity:0});
                TweenMax.set($('.sec_type2 .copy_area .copy_sub_txt'),{opacity:0});
                TweenMax.set($('.sec_type2 .copy_area .btn_more'),{opacity:0});

                //TweenMax.to($('.sec_type2 .img_box .img_area .img_inner img'),1.6,{opacity:1,y:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type2 .img_box .img_area .img_bg.right'),1.3,{width:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type2 .img_box .img_area .img_inner>a img'),2,{scale:1,delay:0.3,ease: Power0.easeNone});
                TweenMax.to($('.sec_type2 .copy_box'),1,{y:0,opacity:1,delay:0.5,ease: Power3.easeOut});
                TweenMax.delayedCall(1, function(){
                    for(var i = 0,len = $('.sec_type2 .copy_box .copy_area .copy_title span').length;i<len;i++){
                        TweenMax.to($('.sec_type2 .copy_box .copy_area .copy_title span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.05*(i+1),ease: Power3.easeOut});
                    }
                });
                TweenMax.to($('.sec_type2 .copy_area .copy_sub_txt'),1,{opacity:1,delay:1.5,ease: Power3.easeInOut,onStart : function(){
                    sectionFlag = false;
                }});
                TweenMax.to($('.sec_type2 .copy_area .btn_more'),1,{opacity:1,delay:1.8,ease: Power3.easeInOut});

                break;
            case 2 :

                //TweenMax.set($('.sec_type2 .img_box .img_area .img_inner img'),{opacity:0,y:900});
                TweenMax.set($('.sec_type3 .img_box .img_area .img_bg.left'),{width:'100%'});
                TweenMax.set($('.sec_type3 .img_box .img_area .img_inner>a img'),{scale:1.05});
                TweenMax.set($('.sec_type3 .copy_box'),{y:100,opacity:0});
                TweenMax.set($('.sec_type3 .copy_box .copy_area .copy_title span'),{x:30,fontSize:'42px',opacity:0});
                TweenMax.set($('.sec_type3 .copy_area .copy_sub_txt'),{opacity:0});
                TweenMax.set($('.sec_type3 .copy_area .btn_more'),{opacity:0});

                //TweenMax.to($('.sec_type2 .img_box .img_area .img_inner img'),1.6,{opacity:1,y:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type3 .img_box .img_area .img_bg.left'),1.4,{width:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type3 .img_box .img_area .img_inner>a img'),2,{scale:1,delay:0.4,ease: Power0.easeNone});
                TweenMax.to($('.sec_type3 .copy_box'),1,{y:0,opacity:1,delay:0.5,ease: Power3.easeOut});
                TweenMax.delayedCall(1, function(){
                    for(var i = 0,len = $('.sec_type3 .copy_box .copy_area .copy_title span').length;i<len;i++){
                        TweenMax.to($('.sec_type3 .copy_box .copy_area .copy_title span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.05*(i+1),ease: Power3.easeOut});
                    }
                    TweenMax.set($('.sec_type4 .img_box .img_area .img_bg.right'),{width:'100%'});
                    TweenMax.set($('.sec_type4 .img_box .img_area .img_inner> img'),{scale:1.05});
                    TweenMax.set($('.sec_type4 .copy_box'),{y:100,opacity:0});
                    TweenMax.set($('.sec_type4 .copy_box .copy_area .copy_title span'),{x:30,fontSize:'42px',opacity:0});
                    TweenMax.set($('.sec_type4 .copy_area .copy_sub_txt'),{opacity:0});
                    TweenMax.set($('.sec_type4 .copy_area .btn_more'),{opacity:0});
                });
                TweenMax.to($('.sec_type3 .copy_area .copy_sub_txt'),1,{opacity:1,delay:1.5,ease: Power3.easeInOut,onStart : function(){
                    sectionFlag = false;
                }});
                TweenMax.to($('.sec_type3 .copy_area .btn_more'),1,{opacity:1,delay:1.8,ease: Power3.easeInOut});


                break;
            case 3 :


                //TweenMax.to($('.sec_type2 .img_box .img_area .img_inner img'),1.6,{opacity:1,y:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type4 .img_box .img_area .img_bg.right'),1.4,{width:0,ease: Power3.easeInOut});
                TweenMax.to($('.sec_type4 .img_box .img_area .img_inner>a img'),2,{scale:1,delay:0.4,ease: Power0.easeNone});
                TweenMax.to($('.sec_type4 .copy_box'),1,{y:0,opacity:1,delay:0.5,ease: Power3.easeOut});
                TweenMax.delayedCall(1, function(){
                    for(var i = 0,len = $('.sec_type4 .copy_box .copy_area .copy_title span').length;i<len;i++){
                        TweenMax.to($('.sec_type4 .copy_box .copy_area .copy_title span').eq(i),0.8,{x:0,opacity:1,fontSize:'40px',delay:0.05*(i+1),ease: Power3.easeOut});
                    }
                });
                TweenMax.to($('.sec_type4 .copy_area .copy_sub_txt'),1,{opacity:1,delay:1.5,ease: Power3.easeInOut,onStart : function(){
                    sectionFlag = false;
                }});
                TweenMax.to($('.sec_type4 .copy_area .btn_more'),1,{opacity:1,delay:1.8,ease: Power3.easeInOut});

                break;
        }
        sectionPrvIdx = idx;

    }

    function titleIncision(_target) {
        var secArr = $('.'+_target).find('.copy_title').html().split("<br>");
        $('.'+_target).find('.copy_title').html('');
        var dom='';
        /* br이 있을경우 */
        if(secArr.length>=2){
            for(var i = 0; i < secArr[0].split("").length; i++){
                dom += "<span>" + secArr[0].split("")[i] + "</span>"

            }
            dom += "<br>";
            for(var i = 0; i < secArr[1].split("").length; i++){
                dom += "<span>" + secArr[1].split("")[i] + "</span>"

            }
            $('.'+_target).find('.copy_title').append(dom)
        }else{
            for (var i = 0; i < secArr[0].split("").length; i++) {
                if(!$('.'+_target).find('.copy_title').hasClass('block')){
                    $('.'+_target).find('.copy_title').append("<span><em>" + secArr[0].split("")[i] + "</em></span>")

                }else{
                    $('.'+_target).find('.copy_title').append("<span>" + secArr[0].split("")[i] + "</span>")

                }
            }
        }

    }

    function btnHoverCursor(target){
        var targetWidth = target.width(),
            halfWidth = targetWidth / 2,
            targetHei = target.height(),
            posLeft,
        //$searchSlide = target.find('.slidesjs-control').find('img'),

            $btnCursor = target.find('.btn_cursor');

        target.mouseenter(function(e){

            var offLeft = e.pageX - $(this).offset().left - 22;
            var offTop = e.pageY - $(this).offset().top - 22;

            TweenMax.to( $btnCursor, 0, {x: offLeft,y:offTop});
            posCheck(offLeft);
            if(!$btnCursor.hasClass('enter')){
                $btnCursor.addClass('enter')
                target.addClass('enter')
            }

        });

        target.mousemove(function(e){
            var offLeft = e.pageX - $(this).offset().left - 22;
            var offTop = e.pageY - $(this).offset().top - 22;

            if(offTop < 0){
                offTop = 0;
            }else if(offTop > targetHei - 45){
                offTop = targetHei - 45;
            }

            if(offLeft < 0){
                offLeft = 0;
            }else if(offLeft > targetWidth - 45){
                offLeft = targetWidth - 45;
            }

            TweenMax.to( $btnCursor, 0.1, {x: offLeft,y:offTop,force3D:true});

            posCheck(offLeft);
            if(!$btnCursor.hasClass('enter')){
                $btnCursor.addClass('enter')
                target.addClass('enter')
            }
        });

        function posCheck(offLeft,_type){
            if(offLeft > halfWidth){
                if(!$btnCursor.hasClass('next')){
                    $btnCursor.addClass('next').removeClass('prev');
                    target.addClass('enter');
                }

                if(moveFlag){
                    return;
                }

                if(navigator.userAgent.toLowerCase().indexOf('chrome') != -1 ){
                    posLeft = relativeValue(offLeft,halfWidth,targetWidth, 0, -100,true);


                    //TweenMax.to( $searchSlide, 0.5, {x:posLeft});

                }
            }else{
                posLeft = relativeValue(offLeft,0,halfWidth,100,0,true);

                if(!$btnCursor.hasClass('prev')){
                    $btnCursor.addClass('prev').removeClass('next');
                    target.addClass('enter');
                }

                if(moveFlag){
                    return;
                }

                if(navigator.userAgent.toLowerCase().indexOf('chrome') != -1 ){

                    //TweenMax.to( $searchSlide, 0.5, {x:posLeft});

                }
            }
        }

        target.mouseleave(function(){
            $btnCursor.removeClass('prev , next');
            $btnCursor.removeClass('enter')
            target.removeClass('enter')
            //TweenMax.to( $searchSlide, 0.5, {x:0});

        });

    }

    function relativeValue(value, minR, maxR, minV , maxV , round){
        var num = (value - minR) * (maxV - minV) / (maxR - minR) + minV;

        if(round == true){
            return num.toFixed(0);
        }else{
            return num;
        }
    }


    return{
        init : init
    }


})();

$(function(){
    MAIN.init()
}());
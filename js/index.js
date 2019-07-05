window.onload = function(){
    setTimeout(() => {
       scrollTo(0,0); 
    }, 100);
}
$(document).ready(function(){
    var s1_img = $(".page1 .img_tag");
    var s1_line = $(".page1 .line_tag");
    var s1_num = $(".page1 .num");
    var s1_main = $(".page1 h2");
    var s1_sub1 = $(".page1 h3");
    var s1_sub2 = $(".page1 a");
    var s2_img1 = $(".page2 .img_tag1");
    var s2_img2 = $(".page2 .img_tag2");
    var s2_line = $(".page2 .line_tag");
    var s2_num = $(".page2 .num");
    var s2_main = $(".page2 h2");
    var s2_main2 = $(".page2 h4");
    var s2_sub1 = $(".page2 h3");
    var s2_sub2 = $(".page2 a");
    var s3r_img = $(".page3 .right_sec .img_tag");
    var s3r_line = $(".page3 .right_sec .line_tag");
    var s3r_main = $(".page3 .right_sec h2");
    var s3r_sub1 = $(".page3 .right_sec h3");
    var s3r_sub2 = $(".page3 .right_sec a");
    var s3l_img = $(".page3 .left_sec .img_tag");
    var s3l_line = $(".page3 .left_sec .line_tag");
    var s3l_main = $(".page3 .left_sec h2");
    var s3l_sub1 = $(".page3 .left_sec h3");
    var s3l_sub2 = $(".page3 .left_sec a");
    // $(".page1 img").click(function(){
    //     remove_ani();
    //     add_style();
    // });
    // function pageAnimation(idx){
    //     switch(idx){
    //         case 0 :
    //             s1_img.removeClass("ani_mainimg_1");
    //             s1_num.removeClass("ani_num");
    //             s1_main.removeClass("ani_maintext_1");
    //             s1_sub1.removeClass("ani_subtext_1_1");
    //             s1_sub2.removeClass("ani_subtext_1_2");
    //             s1_img.addClass("hide");
    //             s1_num.addClass("hide");
    //             s1_main.addClass("hide");
    //             s1_sub1.addClass("hide");
    //             s1_sub2.addClass("hide");
    //             setTimeout(() => {
    //                 s1_img.removeClass("hide");
    //                 s1_num.removeClass("hide");
    //                 s1_main.removeClass("hide");
    //                 s1_sub1.removeClass("hide");
    //                 s1_sub2.removeClass("hide");
    //                 s1_img.addClass("ani_mainimg_1");
    //                 s1_num.addClass("ani_num");
    //                 s1_main.addClass("ani_maintext_1");
    //                 s1_sub1.addClass("ani_subtext_1_1");
    //                 s1_sub2.addClass("ani_subtext_1_2");
    //             },600);
    //             break;
            
    //         case 1 :
    //             s2_img.removeClass("ani_mainimg_1");
    //             s2_num.removeClass("ani_num");
    //             s2_main.removeClass("ani_maintext_1");
    //             s2_sub1.removeClass("ani_subtext_1_1");
    //             s2_sub2.removeClass("ani_subtext_1_2");
    //             s2_img.addClass("hide");
    //             s2_num.addClass("hide");
    //             s2_main.addClass("hide");
    //             s2_sub1.addClass("hide");
    //             s2_sub2.addClass("hide");
    //             setTimeout(() => {
    //                 s2_img.removeClass("hide");
    //                 s2_num.removeClass("hide");
    //                 s2_main.removeClass("hide");
    //                 s2_sub1.removeClass("hide");
    //                 s2_sub2.removeClass("hide");
    //                 s2_img.addClass("ani_mainimg_1");
    //                 s2_num.addClass("ani_num");
    //                 s2_main.addClass("ani_maintext_1");
    //                 s2_sub1.addClass("ani_subtext_1_1");
    //                 s2_sub2.addClass("ani_subtext_1_2");
    //             },600);
    //             break;

    //         case 2 :
    //             s3_img.removeClass("ani_mainimg_1");
    //             s3_num.removeClass("ani_num");
    //             s3_main.removeClass("ani_maintext_1");
    //             s3_sub1.removeClass("ani_subtext_1_1");
    //             s3_sub2.removeClass("ani_subtext_1_2");
    //             s3_img.addClass("hide");
    //             s3_num.addClass("hide");
    //             s3_main.addClass("hide");
    //             s3_sub1.addClass("hide");
    //             s3_sub2.addClass("hide");
    //             setTimeout(() => {
    //                 s3_img.removeClass("hide");
    //                 s3_num.removeClass("hide");
    //                 s3_main.removeClass("hide");
    //                 s3_sub1.removeClass("hide");
    //                 s3_sub2.removeClass("hide");
    //                 s3_img.addClass("ani_mainimg_1");
    //                 s3_num.addClass("ani_num");
    //                 s3_main.addClass("ani_maintext_1");
    //                 s3_sub1.addClass("ani_subtext_1_1");
    //                 s3_sub2.addClass("ani_subtext_1_2");
    //             },600);
    //             break;
    //     }
    // }
    function useAnimation(idx){
        switch(idx){
            case 0 :
                s1_img.removeClass("hide");
                s1_line.removeClass("hide");
                s1_num.removeClass("hide");
                s1_main.removeClass("hide");
                s1_sub1.removeClass("hide");
                s1_sub2.removeClass("hide");
                s1_img.addClass("ani_mainimg_1");
                s1_line.addClass("ani_line_1");
                s1_num.addClass("ani_num");
                s1_main.addClass("ani_maintext_1");
                s1_sub1.addClass("ani_subtext_1_1");
                s1_sub2.addClass("ani_subtext_1_2");
                break;
            
            case 1 :
                s2_img1.removeClass("hide");
                s2_img2.removeClass("hide");
                s2_line.removeClass("hide");
                s2_num.removeClass("hide");
                s2_main.removeClass("hide");
                s2_main2.removeClass("hide");
                s2_sub1.removeClass("hide");
                s2_sub2.removeClass("hide");
                s2_img1.addClass("ani_mainimg_2");
                s2_img2.addClass("ani_mainimg_3");
                s2_line.addClass("ani_line_1");
                s2_num.addClass("ani_num");
                s2_main.addClass("ani_maintext_1");
                s2_main2.addClass("ani_maintext_1");
                s2_sub1.addClass("ani_subtext_1_1");
                s2_sub2.addClass("ani_subtext_1_2");
                break;

            case 2 :
                s3r_img.removeClass("hide");
                s3r_line.removeClass("hide");
                s3r_main.removeClass("hide");
                s3r_sub1.removeClass("hide");
                s3r_sub2.removeClass("hide");
                s3l_img.removeClass("hide");
                s3l_line.removeClass("hide");
                s3l_main.removeClass("hide");
                s3l_sub1.removeClass("hide");
                s3l_sub2.removeClass("hide");

                s3l_img.addClass("ani_mainimg_4");
                s3l_line.addClass("ani_line_1");
                s3l_main.addClass("ani_maintext_2");
                s3l_sub1.addClass("ani_subtext_1_1");
                s3l_sub2.addClass("ani_subtext_1_2");
                
                s3r_img.addClass("ani_mainimg_5");
                s3r_line.addClass("ani_line_1");
                s3r_main.addClass("ani_maintext_2");
                s3r_sub1.addClass("ani_subtext_1_1");
                s3r_sub2.addClass("ani_subtext_1_2");
        }
    }
    function delAnimation(idx){
        switch(idx){
            case 0 :
                s1_img.removeClass("ani_mainimg_1");
                s1_line.removeClass("ani_line_1");
                s1_num.removeClass("ani_num");
                s1_main.removeClass("ani_maintext_1");
                s1_sub1.removeClass("ani_subtext_1_1");
                s1_sub2.removeClass("ani_subtext_1_2");
                s1_img.addClass("hide");
                s1_line.addClass("hide");
                s1_num.addClass("hide");
                s1_main.addClass("hide");
                s1_sub1.addClass("hide");
                s1_sub2.addClass("hide");
                break;
            
            case 1 :
                s2_img1.removeClass("ani_mainimg_2");
                s2_img2.removeClass("ani_mainimg_3");
                s2_line.removeClass("ani_line_1");
                s2_num.removeClass("ani_num");
                s2_main.removeClass("ani_maintext_1");
                s2_main2.removeClass("ani_maintext_1");
                s2_sub1.removeClass("ani_subtext_1_1");
                s2_sub2.removeClass("ani_subtext_1_2");
                s2_img1.addClass("hide");
                s2_img2.addClass("hide");
                s2_line.addClass("hide");
                s2_num.addClass("hide");
                s2_main.addClass("hide");
                s2_main2.addClass("hide");
                s2_sub1.addClass("hide");
                s2_sub2.addClass("hide");
                break;

            case 2 :
                s3l_img.removeClass("ani_mainimg_4");
                s3l_line.removeClass("ani_line_1");
                s3l_main.removeClass("ani_maintext_2");
                s3l_sub1.removeClass("ani_subtext_1_1");
                s3l_sub2.removeClass("ani_subtext_1_2");
                s3r_img.removeClass("ani_mainimg_5");
                s3r_line.removeClass("ani_line_1");
                s3r_main.removeClass("ani_maintext_2");
                s3r_sub1.removeClass("ani_subtext_1_1");
                s3r_sub2.removeClass("ani_subtext_1_2");
                
                s3r_img.addClass("hide");
                s3r_line.addClass("hide");
                s3r_main.addClass("hide");
                s3r_sub1.addClass("hide");
                s3r_sub2.addClass("hide");
                s3l_img.addClass("hide");
                s3l_line.addClass("hide");
                s3l_main.addClass("hide");
                s3l_sub1.addClass("hide");
                s3l_sub2.addClass("hide");
                break;
        }
    }

    // $(elm).each(function (index) {
    //     $(this).on("mousewheel DOMMouseScroll", function (e) {
    //         e.preventDefault();
    //         var delta = 0;
    //         if (!event) event = window.event;
    //         if (event.wheelDelta) {
    //             delta = event.wheelDelta / 120;
    //             if (window.opera) delta = -delta;
    //         } 
    //         else if (event.detail)
    //             delta = -event.detail / 3;
    //         var moveTop = $(window).scrollTop();
    //         var elmSelecter = $(elm).eq(index);
    //         // 마우스휠을 위에서 아래로
    //         if (delta < 0) {
    //             if ($(elmSelecter).next() != undefined) {
    //                 try{
    //                     moveTop = $(elmSelecter).next().offset().top;
    //                     if(index < 2){
    //                             page = index + 1;
    //                         $("html,body").stop().animate({
    //                             scrollTop: moveTop + 'px'
    //                         }, {
    //                             duration: 550, complete: function () {
    //                             }
    //                         });
    //                         pageAnimation(page);
    //                     }
    //                 }catch(e){}
    //             }
    //         // 마우스휠을 아래에서 위로
    //         } else {
    //             if ($(elmSelecter).prev() != undefined) {
    //                 try{
    //                     moveTop = $(elmSelecter).prev().offset().top;
    //                     if(index > 0){
    //                             page = index - 1;
    //                         $("html,body").stop().animate({
    //                             scrollTop: moveTop + 'px'
    //                         }, {
    //                             duration: 550, complete: function () {
    //                             }
    //                         });
    //                         pageAnimation(page);
    //                     }
    //                 }catch(e){}
    //             }
    //         }
    //     });
    // });
    // $('html, body').on("mousewheel DOMMouseScroll scroll", function (e) {
    //     index = page;
    //     if(denyScroll){
    //         e.stopImmediatePropagation();
    //         e.preventDefault();
    //         e.stopPropagation();
    //         event.preventDefault();
    //         event.stopPropagation();
    //         event.stopImmediatePropagation();
    //         return false;
    //     }
    //     var delta = 0;
    //     if (!event) event = window.event;
    //     if (event.wheelDelta) {
    //         delta = event.wheelDelta / 120;
    //         if (window.opera) delta = -delta;
    //     } 
    //     else if (event.detail)
    //         delta = -event.detail / 3;
    //     var moveTop = $(window).scrollTop();
    //     var elmSelecter = $(elm).eq(index);
    //     // 마우스휠을 위에서 아래로
    //     if (delta < 0) {
    //         if ($(elmSelecter).next() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).next().offset().top;
    //                 if(index < 2){
    //                     denyScroll = true;
    //                     page = index + 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     // 마우스휠을 아래에서 위로
    //     } else {
    //         if ($(elmSelecter).prev() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).prev().offset().top;
    //                 if(index > 0){
    //                     denyScroll = true;
    //                     page = index - 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     }
    // });
    // $('html').keydown(function(e){
    //     index = page;
    //     if(denyScroll){
    //         e.preventDefault();
    //         e.stopPropagation();
    //         event.preventDefault();
    //         event.stopPropagation();
    //         return false;
    //     }
    //     var moveTop = $(window).scrollTop();
    //     var elmSelecter = $(elm).eq(index);
    //     // 마우스휠을 위에서 아래로
    //     if (e.keyCode == 40) {
    //         if ($(elmSelecter).next() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).next().offset().top;
    //                 if(index < 2){
    //                     denyScroll = true;
    //                     page = index + 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     // 마우스휠을 아래에서 위로
    //     } else if(e.keyCode == 38) {
    //         if ($(elmSelecter).prev() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).prev().offset().top;
    //                 if(index > 0){
    //                     denyScroll = true;
    //                     page = index - 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     }
    // });
        // var position = $(window).scrollTop();
        // if(e.keyCode == 38){
        //     $('body').animate({
        //         scrollTop : position-$('.page_sec').height()
        //     },550);
        //     if(page != 0){
        //         page -= 1;
        //     }
        // }
        // else if(e.keyCode == 40){
        //     $('body').animate({
        //         scrollTop : position+$('.page_sec').height()
        //     },550);
        //     if(page != 3){
        //         page += 1;
        //     }
        // }
    // $('html').bind('mousewheel', function(e){
    //     e.stopPropagation();
    //     var position = $(window).scrollTop();
    //     if(e.originalEvent.wheelDelta > 0) {
    //         $('body').animate({
    //             scrollTop : position-$('.page_sec').height()
    //         },550);
    //         if(page != 1){
    //             page -= 1;
    //         }
    //     }else {
    //         $('body').animate({
    //             scrollTop : position+$('.page_sec').height()
    //         },550);
    //         if(page != 4){
    //             page += 1;
    //         }
    //     }
   
    //     //prevent page fom scrolling
    //     return false;
    // });
// should start at 0

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     var heig = $(window).height();
    //     if(scroll >= position) {
    //         var mv = position + heig
    //         console.log('scrollDown');
    //         $('body').animate({
    //             scrollTop : position+heig
    //         },1000);
    //     }
    //     else {
    //         $('body').animate({
    //             scrollTop : position-heig
    //         },1000);

    //     }
    //     position = $(window).scrollTop();
    //     return false;
    // });
    // $('html').keydown(function(e){
    //     if (e.keyCode == 40) {
    //         fullpage_api.moveSectionDown();
    //         if ($(elmSelecter).next() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).next().offset().top;
    //                 if(index < 2){
    //                     denyScroll = true;
    //                     page = index + 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     // 마우스휠을 아래에서 위로
    //     } else if(e.keyCode == 38) {
    //         fullpage_api.moveSectionUp();
    //         if ($(elmSelecter).prev() != undefined) {
    //             try{
    //                 moveTop = $(elmSelecter).prev().offset().top;
    //                 if(index > 0){
    //                     denyScroll = true;
    //                     page = index - 1;
    //                     $("html,body").stop().animate({
    //                         scrollTop: moveTop + 'px'
    //                     }, {
    //                         duration: 550, complete: function () {
    //                             setTimeout(() => {
    //                                 denyScroll = false;
    //                             }, 1500);
    //                         }
    //                     });
    //                     pageAnimation(page);
    //                 }
    //             }catch(e){}
    //         }
    //     }
    // });
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        scrollingSpeed: 850,
        keyboardScrolling:true,
        onLeave: function(ori,des){
            delAnimation(des.index);
        },
        afterLoad: function (ori,des){
            useAnimation(des.index);
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
            setTimeout(() => {
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }, 1800);
        }
    });
});
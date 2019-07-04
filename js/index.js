window.onload = function(){
    setTimeout(() => {
       scrollTo(0,0); 
    }, 100);
}
$(document).ready(function(){
    alert('test');
    var page = 0;
    
    var s1_img = $(".page1 img");
    var s1_num = $(".page1 .num");
    var s1_main = $(".page1 h2");
    var s1_sub1 = $(".page1 h3");
    var s1_sub2 = $(".page1 a");
    var s2_img = $(".page2 img");
    var s2_num = $(".page2 .num");
    var s2_main = $(".page2 h2");
    var s2_sub1 = $(".page2 h3");
    var s2_sub2 = $(".page2 a");
    var s3_img = $(".page3 img");
    var s3_num = $(".page3 .num");
    var s3_main = $(".page3 h2");
    var s3_sub1 = $(".page3 h3");
    var s3_sub2 = $(".page3 a");
    $(".page1 img").click(function(){
        remove_ani();
        add_style();
    });
    function movePage(idx){
        switch(idx){
            case 0 :
                s1_img.removeClass("ani_mainimg_1");
                s1_num.removeClass("ani_num");
                s1_main.removeClass("ani_maintext_1");
                s1_sub1.removeClass("ani_subtext_1_1");
                s1_sub2.removeClass("ani_subtext_1_2");
                s1_img.addClass("hide");
                s1_num.addClass("hide");
                s1_main.addClass("hide");
                s1_sub1.addClass("hide");
                s1_sub2.addClass("hide");
                setTimeout(() => {
                    s1_img.removeClass("hide");
                    s1_num.removeClass("hide");
                    s1_main.removeClass("hide");
                    s1_sub1.removeClass("hide");
                    s1_sub2.removeClass("hide");
                    s1_img.addClass("ani_mainimg_1");
                    s1_num.addClass("ani_num");
                    s1_main.addClass("ani_maintext_1");
                    s1_sub1.addClass("ani_subtext_1_1");
                    s1_sub2.addClass("ani_subtext_1_2");
                },600);
                break;
            
            case 1 :
                s2_img.removeClass("ani_mainimg_1");
                s2_num.removeClass("ani_num");
                s2_main.removeClass("ani_maintext_1");
                s2_sub1.removeClass("ani_subtext_1_1");
                s2_sub2.removeClass("ani_subtext_1_2");
                s2_img.addClass("hide");
                s2_num.addClass("hide");
                s2_main.addClass("hide");
                s2_sub1.addClass("hide");
                s2_sub2.addClass("hide");
                setTimeout(() => {
                    s2_img.removeClass("hide");
                    s2_num.removeClass("hide");
                    s2_main.removeClass("hide");
                    s2_sub1.removeClass("hide");
                    s2_sub2.removeClass("hide");
                    s2_img.addClass("ani_mainimg_1");
                    s2_num.addClass("ani_num");
                    s2_main.addClass("ani_maintext_1");
                    s2_sub1.addClass("ani_subtext_1_1");
                    s2_sub2.addClass("ani_subtext_1_2");
                },600);
                break;

            case 2 :
                s3_img.removeClass("ani_mainimg_1");
                s3_num.removeClass("ani_num");
                s3_main.removeClass("ani_maintext_1");
                s3_sub1.removeClass("ani_subtext_1_1");
                s3_sub2.removeClass("ani_subtext_1_2");
                s3_img.addClass("hide");
                s3_num.addClass("hide");
                s3_main.addClass("hide");
                s3_sub1.addClass("hide");
                s3_sub2.addClass("hide");
                setTimeout(() => {
                    s3_img.removeClass("hide");
                    s3_num.removeClass("hide");
                    s3_main.removeClass("hide");
                    s3_sub1.removeClass("hide");
                    s3_sub2.removeClass("hide");
                    s3_img.addClass("ani_mainimg_1");
                    s3_num.addClass("ani_num");
                    s3_main.addClass("ani_maintext_1");
                    s3_sub1.addClass("ani_subtext_1_1");
                    s3_sub2.addClass("ani_subtext_1_2");
                },600);
                break;
        }
    }
    var elm = ".page_sec";
    $(elm).each(function (index) {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        if(index < 2){
                                page = index + 1;
                            $("html,body").stop().animate({
                                scrollTop: moveTop + 'px'
                            }, {
                                duration: 550, complete: function () {
                                }
                            });
                            movePage(page);
                        }
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        if(index > 0){
                                page = index - 1;
                            $("html,body").stop().animate({
                                scrollTop: moveTop + 'px'
                            }, {
                                duration: 550, complete: function () {
                                }
                            });
                            movePage(page);
                        }
                    }catch(e){}
                }
            }
        });
    });
    $('html').keydown(function(e){
        index = page;
        var moveTop = $(window).scrollTop();
        var elmSelecter = $(elm).eq(index);
        // 마우스휠을 위에서 아래로
        if (e.keyCode == 40) {
            if ($(elmSelecter).next() != undefined) {
                try{
                    moveTop = $(elmSelecter).next().offset().top;
                    if(index < 2){
                            page = index + 1;
                        $("html,body").stop().animate({
                            scrollTop: moveTop + 'px'
                        }, {
                            duration: 550, complete: function () {
                            }
                        });
                        movePage(page);
                    }
                }catch(e){}
            }
        // 마우스휠을 아래에서 위로
        } else if(e.keyCode == 38) {
            if ($(elmSelecter).prev() != undefined) {
                try{
                    moveTop = $(elmSelecter).prev().offset().top;
                    if(index > 0){
                        page = index - 1;
                        $("html,body").stop().animate({
                            scrollTop: moveTop + 'px'
                        }, {
                            duration: 550, complete: function () {
                            }
                        });
                        movePage(page);
                    }
                }catch(e){}
            }
        }
        
    });
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
});

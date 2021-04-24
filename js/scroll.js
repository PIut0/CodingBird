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

window.onload = function(){
    setTimeout(() => {
       scrollTo(0,0);
    }, 100);
}
$(document).ready(function(){
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

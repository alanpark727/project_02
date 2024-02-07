// Index Part (Index)
// j-Query

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }
    });
    $('#scrolltop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

});
$(function () {
    let pv = document.getElementById("chiikawa_pv");
    $(".play_btn").click(function(){
        if(pv.paused==true){
            pv.play();
            $(this).hide();
        } else {
            pv.pause();
        }
    });
    $(pv).mouseover(function(){
        $(".video_1>button").stop().fadeIn();
    });
    $(pv).mouseout(function(){
        $(".video_1>button").stop().fadeOut();
    });
});
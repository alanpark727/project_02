$(function (){

    $(".char_li").click(function(){
        let idx = $(this).index();
        let charBox = $("#character_info>div");

        $(charBox).eq(idx).fadeIn();
        $(charBox).eq(idx).not().siblings().hide();
    });
});
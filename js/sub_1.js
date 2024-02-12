$(function (){

    $(".char_li").click(function(){
        let idx = $(this).index();
        let charBox = $("#character_info>div");

        $(charBox).eq(idx).fadeIn();
        $(charBox).eq(idx).not().siblings().hide();
    });

    $(".char_li").click(function(){
        let idx = $(this).index();
        let hideLi = $(".hidden_li");
        let idx2 = $(hideLi).index();

        if ($(".char_li").eq(idx).click(function(){
            $(hideLi).eq(idx2).show();
        }));
    });
});

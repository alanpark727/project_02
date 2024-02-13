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

    $(".char_li").click(function () {
        let idx = $(this).index();
        let charBox = $("#character_info>div");

        $(charBox).eq(idx).fadeIn().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
});

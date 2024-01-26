// $(function(){
//     let pv = $('video').get(0);
//     $(window).load(function(){
//         pv.load;
//     })
//     $('.play_btn').on("click",function(){
//         pv.play;
//     })
// })

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
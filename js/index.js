
$(window).resize(function () {
    if (window.innerWidth < 593) {
        $('#art_01').show();
        $('#art_02').show();
        $('#art_03').hide();
        $('#art_04').hide();
    } else if (window.innerWidth < 1009) {
        $('#art_01').show();
        $('#art_02').show();
        $('#art_03').show();
        $('#art_04').hide();
    } else $('#art_04').show();
});
$(window).resize(function () {
    if (window.innerWidth < 593) {
        $('#goods_01').show();
        $('#goods_02').show();
        $('#goods_03').hide();
        $('#goods_04').hide();
    } else if (window.innerWidth < 1009) {
        $('#goods_01').show();
        $('#goods_02').show();
        $('#goods_03').show();
        $('#goods_04').hide();
    } else $('#goods_04').show();
});
// $(function(){
//     let pv = $('video').get(0);
//     $(window).load(function(){
//         pv.load;
//     })
//     $('.play_btn').on("click",function(){
//         pv.play;
//     })
// })
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

$(function(){
    let embed = $(".youtube");
    $(".youtube").empty();

    $("#tbtn").click(function(){
        $("#popUp").fadeIn();
        $("#vBox").append(embed);
    });
    $("#popUp").click(function(){
        $("#popUp").fadeOut("slow");
        $(".youtube").empty();
    });
});

$(function(){
    let embed = $(".youtube_2");
    $(".youtube_2").empty();

    $("#tbtn_2").click(function(){
        $("#popUp_2").fadeIn();
        $("#vBox_2").append(embed);
    });
    $("#popUp_2").click(function(){
        $("#popUp_2").fadeOut("slow");
        $(".youtube_2").empty();
    });
});

$(function(){
    let embed = $("#vBox_3 video");
    $(".pv").empty();

    $("#play_btn").click(function(){
        $("#popUp_3").fadeIn();
        $("#vBox_3").append(embed);
    });
    $(".cbtn").click(function(){
        $("#popUp_3").fadeOut();
        $(".pv").get(0).pause();
    });
});
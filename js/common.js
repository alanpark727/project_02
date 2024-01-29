// Common Part (Header, Footer)
// j-Query

$(document).ready(function () {
    $("#hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});
$(function () {
    $("#hamburger").click(function () {
        if ($('#hamburger').hasClass('is-active')) {
            $('#header_menu').slideToggle();
        } else {
            $('#header_menu').hide();
        }
    });
});
$(window).resize(function () {
    if (window.innerWidth >= 785) {
        $('#header_menu').show();
    } else $('#header_menu').hide();
});

$(function (){
    $('#h_nav').click(function () {
        $('#h_sub').slideToggle();
    });
});
$(function (){
    $('#n_nav').click(function () {
        $('#n_sub').slideToggle();
    });
});
$(function (){
    $('#a_nav').click(function () {
        $('#a_sub').slideToggle();
    });
});
$(function (){
    $('#e_nav').click(function () {
        $('#e_sub').slideToggle();
    });
});
$(function (){
    $('#g_nav').click(function () {
        $('#g_sub').slideToggle();
    });
});
$(function (){
    $('#m_nav').click(function () {
        $('#m_sub').slideToggle();
    });
});


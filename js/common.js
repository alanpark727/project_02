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

$(function(){
    $("#h_nav").click(function(e){
        e.preventDefault();
    });
    $("#n_nav").click(function(e){
        e.preventDefault();
    });
    $("#a_nav").click(function(e){
        e.preventDefault();
    });
    $("#e_nav").click(function(e){
        e.preventDefault();
    });
    $("#g_nav").click(function(e){
        e.preventDefault();
    });
});

$(function(){
    $("#icon_menu").click(function(e){
        e.preventDefault();
    });
});
$(document).ready(function(){
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $("header").outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function(){
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        let st = $(this).scrollTop();
    
        if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
        if(st > lastScrollTop && st > navbarHeight){
            $("header").removeClass("header_down").addClass("header_up");
        } else {
            if(st + $(window).height() < $(document).height()){
                $("header").removeClass("header_up").addClass("header_down");
            }
        }
        lastScrollTop = st;
    }
});




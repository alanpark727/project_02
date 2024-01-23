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

let images=[
    './img/test_01.jpg',
    './img/test_02.jpg',
    './img/test_03.jpg',
    './img/test_04.jpg'
];

function ImageSlider (parent, images) {
    let currentIndex = 0;

    let Slider = {
        parent : parent,
        images : parent.querySelector('.s1_img'),
        thumbnail : parent.querySelector('.s1_thumbnail'),
        PreviousBtn : parent.querySelector('.s1_btn .previous'),
        NextBtn : parent.querySelector('s1_btn .next')
    }

    Slider.images.innerHTML = images.map((image,index)=>{
        return '<img src="${image}" alt="이미지${index}">'
    }).join("");

    let imageNode = Slider.images.querySelectorAll("img");
    imageNode[currentIndex].classList.add("active");

    Slider.thumbnail.innerHTML = Slider.images.innerHTML;

    let thumbnailNode = Slider.thumbnail.querySelectorAll("img");
    thumbnailNode[currentIndex].classList.add("active");

    thumbnailNode.forEach((el,i) => {
        el.addEventListener("click", function(){
            Slider.thumbnail.querySelector("img.active").classList.remove("active");
            el.classList.add("active");
        });
    });

    Slider.PreviousBtn.addEventListener("click", function(){
        imageNode[currentIndex].classList.remove("active");
        currentIndex--;

        if(currentIndex<0) currentIndex = images.length -1;
        imageNode[currentIndex].classList.add("acitve");

        Slider.thumbnail.querySelector("img.active").classList.remove("acitve");
        thumbnailNode[currentIndex].classList.add("acitve");
    });
}
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

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slide = document.querySelector('.slideimg');

let index = 0;

prevBtn.addEventListener('click',() => {
    if(index===0) return;
    index -= 1;

    slide.style.transform = `translate3d(-${600 * index}px, 0, 0)`;
});
nextBtn.addEventListener('click',() => {
    if(index===7) return;
    index += 1;

    slide.style.transform = `translate3d(-${600 * index}px,0,0)`
});

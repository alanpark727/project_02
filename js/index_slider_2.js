let images = [
    './img/test_01.jpg',
    './img/test_02.jpg',
    './img/test_03.jpg',
    './img/test_04.jpg'
];

function ImageSlider(parent, images) {
    let currentIndex = 0;

    let Slider = {
        parent: parent,
        images: parent.querySelector('.s2_img'),
        thumnail: parent.querySelector('.s2_thumnail'),
        PreviousBtn: parent.querySelector('.s2_btn .previous'),
        NextBtn: parent.querySelector('.s2_btn .next')
    }

    Slider.images.innerHTML = images.map((image, index) => {
        return `<img src="${image}" alt="이미지${index}">`
    }).join("");

    let imageNode = Slider.images.querySelectorAll("img");
    imageNode[currentIndex].classList.add("active");

    Slider.thumnail.innerHTML = Slider.images.innerHTML;

    let thumnailNode = Slider.thumnail.querySelectorAll("img");
    thumnailNode[currentIndex].classList.add("active");

    thumnailNode.forEach((el, i) => {
        el.addEventListener("click", function () {
            Slider.thumnail.querySelector("img.active").classList.remove("active");
            el.classList.add("active");

            imageNode[currentIndex].classList.remove("active");
            currentIndex = i;
            imageNode[currentIndex].classList.add("active")
        });
    });

            //왼쪽 버튼 클릭
            Slider.PreviousBtn.addEventListener("click", function () {
                imageNode[currentIndex].classList.remove("active");
                currentIndex--;

                if (currentIndex < 0) currentIndex = images.length - 1;
                imageNode[currentIndex].classList.add("active");

                //활성화 되는 이미지와 같은 썸네일에 active 활성화
                Slider.thumnail.querySelector("img.active").classList.remove("active");
                thumnailNode[currentIndex].classList.add("active");

            });

            //오른쪽 버튼 클릭
            Slider.NextBtn.addEventListener("click", function () {
                imageNode[currentIndex].classList.remove("active");

                currentIndex = (currentIndex + 1) % images.length;
                imageNode[currentIndex].classList.add("active");

                //활성화 되는 이미지와 같은 썸네일에 active 활성화
                Slider.thumnail.querySelector("img.active").classList.remove("active");
                thumnailNode[currentIndex].classList.add("active");
            });
}
ImageSlider(document.querySelector("#s2_imgbox"), images);
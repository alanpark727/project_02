let images1 = [
    './img/banner_01.jpg',
    './img/c_banner_02.png',
    './img/c_banner_03.png',
    './img/c_banner_04.png',
    './img/c_banner_05.png'
];

function ImageSlider(parent, images1) {
    let currentIndex = 0;

    let Slider = {
        parent: parent,
        images: parent.querySelector('.s1_img'),
        thumnail: parent.querySelector('.s1_thumnail'),
        PreviousBtn: parent.querySelector('.s1_btn .previous'),
        NextBtn: parent.querySelector('.s1_btn .next')
    }

    Slider.images.innerHTML = images1.map((image, index) => {
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

                if (currentIndex < 0) currentIndex = images1.length - 1;
                imageNode[currentIndex].classList.add("active");

                //활성화 되는 이미지와 같은 썸네일에 active 활성화
                Slider.thumnail.querySelector("img.active").classList.remove("active");
                thumnailNode[currentIndex].classList.add("active");

            });

            //오른쪽 버튼 클릭
            Slider.NextBtn.addEventListener("click", function () {
                imageNode[currentIndex].classList.remove("active");

                currentIndex = (currentIndex + 1) % images1.length;
                imageNode[currentIndex].classList.add("active");

                //활성화 되는 이미지와 같은 썸네일에 active 활성화
                Slider.thumnail.querySelector("img.active").classList.remove("active");
                thumnailNode[currentIndex].classList.add("active");
            });
}
ImageSlider(document.querySelector("#s1_imgbox"), images1);
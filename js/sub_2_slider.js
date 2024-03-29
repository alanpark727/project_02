// Sub_page_02_slider Part
// j-Query

        const slide = document.querySelector(".slideshow");
        let slideWidth = slide.clientWidth;

        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        let slideItems = document.querySelectorAll(".s_img");

        const maxSlide = slideItems.length;

        let currSlide = 1;

        const pagination = document.querySelector(".slide_pagination");

        for (let i = 0; i < maxSlide; i++) {
            if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
            else pagination.innerHTML += `<li>•</li>`;
        }

        const paginationItems = document.querySelectorAll(".slide_pagination > li");

        const startSlide = slideItems[0];
        const endSlide = slideItems[slideItems.length - 1];
        const startElem = document.createElement("div");
        const endElem = document.createElement("div");

        endSlide.classList.forEach((c) => endElem.classList.add(c));
        endElem.innerHTML = endSlide.innerHTML;

        startSlide.classList.forEach((c) => startElem.classList.add(c));
        startElem.innerHTML = startSlide.innerHTML;

        slideItems[0].before(endElem);
        slideItems[slideItems.length - 1].after(startElem);

        slideItems = document.querySelectorAll(".s_img");

        let offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });

        function nextMove() {
            currSlide++;

            if (currSlide <= maxSlide) {

                const offset = slideWidth * currSlide;

                slideItems.forEach((i) => {
                    i.setAttribute("style", `left: ${-offset}px`);
                });

                paginationItems.forEach((i) => i.classList.remove("active"));
                paginationItems[currSlide - 1].classList.add("active");
                
            } else {

                currSlide = 0;
                let offset = slideWidth * currSlide;
                slideItems.forEach((i) => {
                    i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                });
                currSlide++;
                offset = slideWidth * currSlide;

                setTimeout(() => {
                    slideItems.forEach((i) => {
                        i.setAttribute("style", `transtion: ${0.15}s; left: ${-offset}px`);
                    });
                }, 0);
                paginationItems.forEach((i) => i.classList.remove("active"));
                paginationItems[currSlide -1].classList.add("active");
            }
        }

        function prevMove() {
            currSlide--;

            if (currSlide > 0) {

                const offset = slideWidth * currSlide;

                slideItems.forEach((i) => {
                    i.setAttribute("style", `left: ${-offset}px`);
                });

                paginationItems.forEach((i) => i.classList.remove("active"));
                paginationItems[currSlide -1].classList.add("active");
            } else {

                currSlide = maxSlide + 1;
                let offset = slideWidth * currSlide;

                slideItems.forEach((i) => {
                    i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                });
                currSlide--;
                offset = slideWidth * currSlide;
                setTimeout(() => {
                    slideItems.forEach((i) => {
                        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
                    });
                }, 0);
                paginationItems.forEach((i) => i.classList.remove("active"));
                paginationItems[currSlide -1].classList.add("active");
            }
        }

        nextBtn.addEventListener("click", () => {
            nextMove();
        });

        prevBtn.addEventListener("click", () => {
            prevMove();
        });

        window.addEventListener("resize", () => {
            slideWidth = slide.clientWidth;
        });

        window.addEventListener("load", () => {
            slideWidth = slide.clientWidth;
        })

        for (let i = 0; i < maxSlide; i++) {
            paginationItems[i].addEventListener("click", () => {
                currSlide = i + 1;

                const offset = slideWidth * currSlide;

                slideItems.forEach((i) => {
                    i.setAttribute("style", `left: ${-offset}px`);
                });

                paginationItems.forEach((i) => i.classList.remove("active"));
                paginationItems[currSlide -1].classList.add("active");
            });
        }

        // 스와이프로 배너 슬라이드

        let startPoint = 0;
        let endPoint = 0;

        slide.addEventListener("mousedown", (e) => {
            startPoint = e.pageX;
        });

        slide.addEventListener("mouseup", (e) => {
            endPoint = e.pageX;
            if (startPoint < endPoint) {
                prevMove();
            } else if (startPoint > endPoint) {
                nextMove();
            }
        });

        slide.addEventListener("touchstart", (e) => {
            startPoint = e.touches[0].pageX;
        });
        slide.addEventListener("touchend", (e) => {
            endPoint = e.changedTouches[0].pageX;
            if (startPoint < endPoint) {
                prevMove();
            } else if (startPoint > endPoint) {
                nextMove();
            }
        });

        let loopInterval = setInterval(() => {
            nextMove();
        }, 4000);

        slide.addEventListener("mouseover", () => {
            clearInterval(loopInterval);
        });

        slide.addEventListener("mouseout", () => {
            loopInterval = setInterval(() => {
                nextMove();
            }, 4000);
        });
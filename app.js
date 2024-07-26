const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");

const slidesNum = mainSlide.querySelectorAll("div").length;
const container = document.querySelector('.container');

let activeSlide = 0;

sidebar.style.top = `-${(slidesNum - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
    changeSlide('up')
});

downBtn.addEventListener("click", () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlide++
        if (activeSlide === slidesNum){
            activeSlide = 0
        }
    } else if (direction === 'down'){
        activeSlide--
        if (activeSlide < 0){
            activeSlide = slidesNum -1
        }
    }
    
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlide * height}px`
    
    sidebar.style.transform = `translateY(${activeSlide * height}px`


};

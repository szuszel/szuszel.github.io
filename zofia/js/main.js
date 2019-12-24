const FRONT = document.querySelector(".front-side");
const BACK = document.querySelector(".back-side");

document.addEventListener('click', function() {
    FRONT.classList.toggle("active");
    BACK.classList.toggle("active");
});

const particleBlock = document.querySelector(".particles")

function resize() {
    let height = particleBlock.offsetHeight;
    document.querySelector("html").setAttribute('style' , '--heigth: ' +  height + "px");
}

window.addEventListener('resize', resize);

resize();
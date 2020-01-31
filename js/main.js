const myImgs = document.querySelectorAll('span');

if (typeof IntersectionObserver !== 'undefined') {

    observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            observer.observe(document.querySelector('header'));

            Array.prototype.slice.call(myImgs).forEach(function (image) {
                observer.observe(image);
            });
        }, 1000);

    });
} else {

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            document.querySelector('header').classList.add("active");

            Array.prototype.slice.call(myImgs).forEach(function (image) {
                image.classList.add("active");
            });

        }, 1000);

    });
}

console.log("Hello there. See, no errors! Deal with it (⌐■_■)");

function findErrors() {
    console.log("0 errors found");
    console.log("I told ya (☞ﾟヮﾟ)☞");
}
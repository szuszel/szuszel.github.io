"use strict";

let menuButton = document.querySelector("nav"),
    menu = document.querySelector("aside");

menuButton.addEventListener('click', function () {
    menu.classList.toggle("active");
});


document.addEventListener('readystatechange', function () {
    setTimeout(function () {
        document.querySelector("img").classList.add("active");
        document.querySelector("main").classList.add("active");
    }, 1000);
});

document.querySelector("img").addEventListener('click', function () {
    document.querySelector("img").classList.remove("active");
    document.querySelector("main").classList.remove("active");
});

let menuLinks = document.querySelectorAll("aside a");

menuLinks.forEach(function (menuLinks) {
    menuLinks.addEventListener('click', function (e) {
        menu.classList.remove("active");

        if (menuLinks.getAttribute("target") != "_blank") {
            e.preventDefault();
            if (menuLinks.getAttribute("href") != "#") {
                document.querySelector("img").classList.remove("active");
                document.querySelector("main").classList.remove("active");
                setTimeout(function () {
                    window.location = menuLinks.getAttribute("href");
                }, 1300);
            }
        }
    })
});
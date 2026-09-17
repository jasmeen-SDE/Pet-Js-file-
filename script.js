const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuIcon.className = "ri-close-line";
    } else {
        menuIcon.className = "ri-menu-line";
    }
});


navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuIcon.className = "ri-menu-line";
    });
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    reset: false
};

ScrollReveal().reveal(".welcome__badge", scrollRevealOption);

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 200
});

ScrollReveal().reveal(".header__content > p", {
    ...scrollRevealOption,
    delay: 400
});

ScrollReveal().reveal(".header__buttons", {
    ...scrollRevealOption,
    delay: 600
});

ScrollReveal().reveal(".header__stats", {
    ...scrollRevealOption,
    delay: 800
});

ScrollReveal().reveal(".header__image", {
    ...scrollRevealOption,
    origin: "right",
    delay: 300
});

ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal(".about__image", {
    ...scrollRevealOption,
    origin: "left"
});

ScrollReveal().reveal(".about__item", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 150
});

ScrollReveal().reveal(".product__card", {
    ...scrollRevealOption,
    interval: 150
});

ScrollReveal().reveal(".review__card", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal(".gallery__grid img", {
    ...scrollRevealOption,
    interval: 150
});


const swiper = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        700: {
            slidesPerView: 2
        },

        1000: {
            slidesPerView: 3
        }
    }
});


const scrollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});


scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const appointmentForm = document.querySelector(".appointment__form");

appointmentForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Your appointment request has been submitted successfully! 🐾");

    appointmentForm.reset();

});




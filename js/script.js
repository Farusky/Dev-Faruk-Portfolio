/*=========================================================
    MOBILE MENU
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (menuBtn.innerHTML.includes("bars")) {

            menuBtn.innerHTML = '<i class="fas fa-times"></i>';

        } else {

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

}

/*=========================================================
    BACK TO TOP BUTTON
=========================================================*/

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================================
    STICKY HEADER
=========================================================*/

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

        }

    });

}

/*=========================================================
    SCROLL REVEAL
=========================================================*/

const revealElements = document.querySelectorAll(

".skill-card, .project-card, .education-card, .stat-card, .gallery-item, .social-card"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================================
    ACTIVE NAVIGATION
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/*=========================================================
    HERO TYPING EFFECT
=========================================================*/

const typingElement = document.querySelector(".hero h3");

if (typingElement) {

    const texts = [

        "A Software Engineering Student",

        "A Graphic Designer",

        "An Aspiring Full-Stack Developer"

    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = texts[textIndex];

        if (!deleting) {

            typingElement.textContent = currentText.substring(0, charIndex++);

            if (charIndex > currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent = currentText.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                textIndex = (textIndex + 1) % texts.length;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 80);

    }

    typeEffect();

}

/*=========================================================
    FAQ ACCORDION
=========================================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

if (faqQuestions.length > 0) {

    faqQuestions.forEach(question => {

        question.addEventListener("click", function () {

            const currentItem = this.parentElement;

            document.querySelectorAll(".faq-item").forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("active");

                }

            });

            currentItem.classList.toggle("active");

        });

    });

}

console.log("Portfolio Loaded Successfully 🚀");
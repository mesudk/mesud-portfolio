/* =================================
   MESUD PORTFOLIO JAVASCRIPT
================================ */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

        const isOpen = navbar.classList.contains("show");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* ---------- CLOSE MOBILE MENU ---------- */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("show");
        }

        if (menuBtn) {
            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


/* ---------- CURRENT YEAR ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for your message! " +
                "I will get back to you soon."
            );

            contactForm.reset();

        }
    );

}


/* ---------- ACTIVE NAVIGATION ---------- */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* ---------- SCROLL TO TOP ---------- */

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});

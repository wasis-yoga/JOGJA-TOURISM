/* ==================================================
   JOGJA TOURISM
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   1. MOBILE NAVIGATION
================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Pastikan elemen tersedia
if (menuToggle && navMenu) {

    // Buka / tutup menu
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });


    // Tutup menu ketika link diklik
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

        });

    });


    // Tutup menu ketika klik di luar menu
    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navMenu.classList.contains("show")
        ) {

            navMenu.classList.remove("show");

        }

    });

}


/* ==================================================
   2. NAVBAR SCROLL EFFECT
================================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==================================================
   3. ACTIVE NAVIGATION
================================================== */

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const href = link.getAttribute("href");


        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ==================================================
   4. CLOSE MOBILE MENU WITH ESC
================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (navMenu) {

            navMenu.classList.remove("show");

        }

    }

});


/* ==================================================
   5. CURRENT YEAR
================================================== */

const currentYear = document.querySelector(".footer-bottom p");


if (currentYear) {

    currentYear.innerHTML =
        "© " + new Date().getFullYear() + " JOGJA TOURISM";

}


/* ==================================================
   6. PAGE READY
================================================== */

console.log("JOGJA TOURISM berhasil dijalankan.");

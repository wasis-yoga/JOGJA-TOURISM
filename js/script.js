/* =====================================================
   JOGJA TOURISM
   BY WASISYOGA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");


    /* ================================================
       MOBILE MENU
    ================================================ */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            menuToggle.classList.toggle("active");

            navMenu.classList.toggle("open");

        });


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");

                navMenu.classList.remove("open");

            });

        });

    }


    /* ================================================
       ACTIVE NAVIGATION
    ================================================ */

    const sections = document.querySelectorAll("main section[id]");


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* ================================================
       CLOSE MENU WHEN CLICK OUTSIDE
    ================================================ */

    document.addEventListener("click", function (event) {

        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("open");

            menuToggle.classList.remove("active");

        }

    });


    /* ================================================
       ESC KEY
    ================================================ */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navMenu.classList.remove("open");

            menuToggle.classList.remove("active");

        }

    });


    /* ================================================
       SMOOTH SCROLL
    ================================================ */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                const navbarHeight =
                    document.querySelector(".navbar").offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });

});

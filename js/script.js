/* ==================================================
   JOGJA TOURISM
   by Wasisyoga
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================================
       MOBILE NAVIGATION
    ================================================ */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const isOpen =
                navLinks.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* close menu after clicking */

        navLinks.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navLinks.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }



    /* ================================================
       ACTIVE NAVIGATION
    ================================================ */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const current =
                            entry.target.getAttribute("id");


                        navItems.forEach(function (item) {

                            item.classList.remove("active");

                            if (
                                item.getAttribute("href")
                                === "#" + current
                            ) {

                                item.classList.add("active");

                            }

                        });

                    }

                });

            },

            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }

        );


    sections.forEach(function (section) {

        observer.observe(section);

    });



    /* ================================================
       SCROLL REVEAL
    ================================================ */

    const revealElements =
        document.querySelectorAll(
            ".destination-card, " +
            ".event-item, " +
            ".food-card, " +
            ".culture-items article, " +
            ".creative-grid article, " +
            ".news-card"
        );


    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });



    /* ================================================
       CLOSE MENU WHEN CLICK OUTSIDE
    ================================================ */

    document.addEventListener("click", function (event) {

        if (!navLinks || !menuToggle) {
            return;
        }


        const clickedInsideNav =
            navLinks.contains(event.target);

        const clickedButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedButton
        ) {

            navLinks.classList.remove("open");

        }

    });

});

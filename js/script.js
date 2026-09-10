document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("main section[id]");

    menuToggle?.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });

    document.addEventListener("click", e => {
        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            navMenu.classList.remove("open");
            menuToggle.classList.remove("active");
        }
    });

    window.addEventListener("scroll", () => {
        let current = "beranda";
        const position = window.scrollY + 180;

        sections.forEach(section => {
            if (position >= section.offsetTop &&
                position < section.offsetTop + section.offsetHeight) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );
        });
    }, { passive: true });
});

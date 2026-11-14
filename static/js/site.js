
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "×" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }

    // Registration Activation Notice
    const registrationLinks = document.querySelectorAll(
        ".register-nav, .btn-register"
    );

    registrationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const proceed = confirm(
                "SCHOOL REGISTRATION - ACTIVATION REQUIRED\n\n" +
                "A valid activation code is mandatory to register your school.\n\n" +
                "Activation codes are issued only by MM Edulogix Admin.\n\n" +
                "Please contact Admin through the Contact option in the main dashboard to obtain your activation code.\n\n" +
                "Press OK to continue to the registration form, or Cancel to stay on this page."
            );

            if (proceed) {
                window.location.href = link.href;
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // HERO BUTTONS
    // ==============================

    const exploreBtn = document.getElementById("exploreBtn");
    const howBtn = document.getElementById("howBtn");

    // Explore SafeDrive
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const storySection = document.getElementById("story");

            if (storySection) {
                storySection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // See How It Works
    if (howBtn) {
        howBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const howSection = document.getElementById("how-it-works");

            if (howSection) {
                howSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }


    // ==============================
    // SCROLL REVEAL ANIMATIONS
    // ==============================

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    document.querySelectorAll(
        ".reveal, .reveal-scale, .reveal-left, .reveal-right, .delay-item, .delay-connector"
    ).forEach(function (element) {

        observer.observe(element);

    });


    // ==============================
    // HERO MOUSE PARALLAX
    // ==============================

    const visual = document.querySelector(".hero-visual");

    document.addEventListener("mousemove", function (event) {

        if (!visual || window.innerWidth < 950) {
            return;
        }

        const x =
            (event.clientX / window.innerWidth - 0.5) * 6;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 4;

        visual.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;

    });

});
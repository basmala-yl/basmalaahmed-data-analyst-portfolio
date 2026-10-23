
// Reveal elements when they enter the viewport
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
} else {
    document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("show");
    });
}


// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");

if (menu && nav) {
    menu.setAttribute("aria-expanded", "false");

    menu.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");

        menu.setAttribute("aria-expanded", String(isOpen));
        menu.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });

    // Close the menu after clicking a navigation link
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            menu.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-label", "Open menu");
        });
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            nav.classList.remove("is-open");
            menu.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-label", "Open menu");
        }
    });
}

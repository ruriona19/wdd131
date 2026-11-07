document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});
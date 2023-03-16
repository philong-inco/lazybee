const menu = document.querySelector(".nav_menu");

const toggle_menu = document.querySelector("#nav_toggle");

toggle_menu.addEventListener("click", () => {
    menu.classList.toggle("show");
});
const menuBotao = document.querySelector(".menu-icon");
const menuMobile = document.querySelector(".menu-mobile");

menuBotao.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
});

const links = menuMobile.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("active");
    });
});
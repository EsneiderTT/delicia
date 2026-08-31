const botonRegistro = document.getElementById("registrarse");
const botonInicio = document.getElementById("iniciarSesion");

// Menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = mobileMenu ? mobileMenu.querySelectorAll("nav a") : [];

function abrirMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
}

function cerrarMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
}

if (menuToggle) menuToggle.addEventListener("click", abrirMenu);
if (menuClose) menuClose.addEventListener("click", cerrarMenu);
if (menuOverlay) menuOverlay.addEventListener("click", cerrarMenu);
menuLinks.forEach(link => link.addEventListener("click", cerrarMenu));
document.addEventListener("keydown", event => {
    if (event.key === "Escape") cerrarMenu();
});
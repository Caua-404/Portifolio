let btnmenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById('overlay-menu');
let trilho = document.getElementById('trilho');
let body = document.querySelector('body')

btnmenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("abrir-menu");
});

trilho.addEventListener("click", ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
});
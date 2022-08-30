const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");

menuBtn.addEventListener('click',()=>{menu.classList.add("active")});
closeBtn.addEventListener('click',()=>{menu.classList.remove("active")});
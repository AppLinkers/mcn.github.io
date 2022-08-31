//change navbar styles on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//click menu button
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");


menuBtn.addEventListener('click',()=>{menu.classList.add("active")});
closeBtn.addEventListener('click',()=>{menu.classList.remove("active")});
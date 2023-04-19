let openMenuBtn = document.querySelector('#openMenu');
let closeMenuBtn = document.querySelector('#closeMenu');
let menuBg = document.querySelector('#menuBg');
let menuMobile = document.querySelector('#menuMobile');


openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu)


function openMenu()
{
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "flex";
    menuBg.style.display = "block"
    menuMobile.style.display = "block"
}

function closeMenu()
{
    openMenuBtn.style.display = "flex";
    closeMenuBtn.style.display = "none";
    menuBg.style.display = "none"
    menuMobile.style.display = "none"
}
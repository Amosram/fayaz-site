/******** MENU BARS NAVIGATIOM*********/
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
}


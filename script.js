"use strict"

const navBar = document.querySelector(".nav-links");
const sideBar = document.querySelector(".side-bar h1");


function toggleMenu() {

    navBar.classList.toggle('green');
} 


sideBar.addEventListener("click", toggleMenu);





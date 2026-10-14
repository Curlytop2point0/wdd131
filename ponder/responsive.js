const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('hide');
  btn.classList.toggle('change');
}

/*
  AI Disclosure: The code in this file was written by Maxim Person with minor assistance from AI.
  1. Menu toggle script guidance from AI, Grok Bot, October 7, 2026.
*/

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('hide');
  btn.classList.toggle('change');
}

/*
  Generative AI disclosure (CSE policy):
  1. Script drafted with help from Grok Bot (AI assistant), xAI, October 7, 2026,
  following the WDD 131 W04 Responsive Menu ponder video. Reviewed by Maxim.
*/

let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark');
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark');
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}

/*
  AI Disclosure: The original code in this file was written by Maxim Person.
  Revisions based on instructor feedback (formatting, CSS cleanup, and structural changes) were made with assistance from AI.
  1. Code edits and review assisted by Grok Bot, October 14, 2026.
  2. Original theme-switching JavaScript guidance from AI, Grok Bot, September 26, 2026.
*/

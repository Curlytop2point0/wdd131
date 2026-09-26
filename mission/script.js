let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let mission = document.querySelector('.mission');
let universityName = document.querySelector('.university-name');
let divider = document.querySelector('.divider');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        mission.style.backgroundColor = '#333';
        mission.style.borderColor = '#aaa';
        universityName.style.color = '#9fd3ec';
        divider.style.borderTopColor = '#ddd';
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        // (an empty string removes the inline style, so styles.css takes over again)
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        mission.style.backgroundColor = '';
        mission.style.borderColor = '';
        universityName.style.color = '';
        divider.style.borderTopColor = '';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}

/*
  Generative AI disclosure (CSE policy):
  1. JavaScript drafted with help from Grok Bot (AI assistant), xAI, September 26, 2026,
  following the WDD 131 Mission Statement II prove instructions and demo video (starter code from the course page). Reviewed by Maxim.
*/

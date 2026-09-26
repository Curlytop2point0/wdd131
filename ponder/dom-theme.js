let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current === 'ocean') {
    document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
    pageContent.style.fontFamily = "Papyrus, fantasy";
  } else if (current === 'forest') {
    document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
    pageContent.style.fontFamily = "Impact, sans-serif";
  } else if (current === 'desert') {
    document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
    pageContent.style.fontFamily = "'Big Caslon', serif";
  } else {
    // default
    document.body.style.backgroundImage = "none";
    pageContent.style.fontFamily = "Georgia, serif";
  }
}

/*
  Generative AI disclosure (CSE policy):
  1. JavaScript drafted with help from Grok Bot (AI assistant), xAI, September 26, 2026,
  following the WDD 131 Computational Thinking ponder video (starter code from the course page). Reviewed by Maxim.
*/

const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "images/snortleblat.webp",
  attacked: function () {
    if (this.health > 0) {
      this.health -= 20;
      renderStats(this);
      if (this.health <= 0) {
        setTimeout(function () {
          alert("Character Died");
        }, 50);
      }
    }
  },
  levelUp: function () {
    if (this.health > 0) {
      this.level++;
      renderStats(this);
    }
  }
};

function renderStats(aCharacter) {
  document.querySelector(".image").setAttribute("src", aCharacter.image);
  document.querySelector(".image").setAttribute("alt", aCharacter.name);
  document.querySelector(".name").textContent = aCharacter.name;
  document.querySelector("#class").textContent = aCharacter.class;
  document.querySelector("#level").textContent = aCharacter.level;
  document.querySelector("#health").textContent = aCharacter.health;
}

function attackCharacter() {
  character.attacked();
}

function levelUpCharacter() {
  character.levelUp();
}

renderStats(character);

document.querySelector("#attacked").addEventListener("click", attackCharacter);
document.querySelector("#level-up").addEventListener("click", levelUpCharacter);

/* AI Disclosure: The code in this file was written by Maxim Person.
   1. Code review guidance from AI, Grok Bot, November 7, 2026. */

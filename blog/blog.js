// Kids Read For Fun - book blog script
// Builds each book article from the articles array in articles.js

const main = document.querySelector("main");

articles.forEach((article) => {
  const rating = [...article.stars].length;
  const articleElement = document.createElement("article");
  articleElement.classList.add("book");
  articleElement.innerHTML = `
    <div class="book-details">
      <p class="book-date">${article.date}</p>
      <p><span class="visually-hidden">Recommended ages: </span>${article.ages}</p>
      <p><span class="visually-hidden">Genre: </span>${article.genre}</p>
      <p><span class="book-rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${article.stars}</span></p>
    </div>
    <div class="book-content">
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}</p>
    </div>
  `;
  main.appendChild(articleElement);
});
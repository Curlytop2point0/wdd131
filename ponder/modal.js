const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  // Ignore clicks on the gaps between images
  if (e.target.tagName !== 'IMG') return;

  console.log(e.target);

  const img = e.target;
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const full = src.replace('sm', 'full');

  modalImage.src = full;
  modalImage.alt = alt;

  modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

/*
  AI Disclosure: The code in this file was written by Maxim Person with minor assistance from AI.
  1. JavaScript guidance from AI, Grok Bot, October 7, 2026.
*/

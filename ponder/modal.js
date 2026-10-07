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
  Generative AI disclosure (CSE policy):
  1. modal.js drafted with help from Grok Bot (AI assistant), xAI, October 7, 2026,
     following the WDD 131 W04 Responsive Gallery with Modals ponder video. Reviewed by Maxim.
*/

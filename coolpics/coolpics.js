// Menu toggle
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  nav.classList.toggle('open');
  // Tell screen readers whether the menu is open
  const isOpen = nav.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isOpen);
}

// Image viewer (modal)
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
  // Ignore clicks on the gaps between images
  if (e.target.tagName !== 'IMG') return;

  const img = e.target;
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  // images/norris-sm.jpg becomes images/norris-full.jpg
  const full = src.replace('-sm', '-full');

  modalImage.src = full;
  modalImage.alt = alt;

  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image (on the dark overlay)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// The Esc key closes the modal automatically because it is opened with showModal()

/*
  Generative AI disclosure (CSE policy):
  1. Menu toggle and image modal drafted with help from Grok Bot (AI assistant), xAI, October 8, 2026,
     following the WDD 131 W04 Cool Pics part 2 prove instructions. Reviewed by Maxim.
*/

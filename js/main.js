// Lightbox simple
const triggers = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

triggers.forEach(el => {
  el.addEventListener('click', () => {
    const full = el.getAttribute('data-full');
    if (full) {
      lightboxImg.src = full;
      lightbox.classList.add('visible');
    }
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('visible');
    lightboxImg.src = '';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('visible');
      lightboxImg.src = '';
    }
  });
}

// Bloquear botón derecho (anti "guardar imagen")
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Bloquear arrastrar imágenes
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

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

// SLIDER AUTOMÁTICO DE PORTADA
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slider .slide");
  if (!slides.length) return;

  let slideIndex = 0;

  function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");

    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  }

  showSlides();                 // muestra la primera foto
  setInterval(showSlides, 1000); // cambia cada 1 segundo (1000 ms)
});



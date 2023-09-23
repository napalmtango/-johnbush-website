const slides = document.querySelectorAll('#slider div');
const prevSlide = document.getElementById("prev");
const nextSlide = document.getElementById("next");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  slides[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add('active');
}

initializeSlider();

prevSlide.addEventListener('click', function() {
  slideLeft();
});

nextSlide.addEventListener('click', function() {
  slideRight();
});
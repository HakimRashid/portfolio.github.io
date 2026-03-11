const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

for (let index = 0; index < slides.length; index++) {
  slides[index].style.left =
    slides[index].getBoundingClientRect().width * index + "px";
}

function moveToSlide(track, currentSlide, nextSlide) {
  track.style.transform = `translateX(-${nextSlide.style.left})`;
  nextSlide.classList.add("current-slide");
  currentSlide.classList.remove("current-slide");
}

function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
}

function nextSlide() {
  const currentSlide = track.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  let targetDot = currentDot.nextElementSibling;
  if (!nextSlide) nextSlide = slides[0];
  if (!targetDot) targetDot = dots[0];

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, targetDot);
}

const intervalId = setInterval(() => {
  nextSlide();
}, 5000);

nextButton.addEventListener("click", (e) => {
  clearInterval(intervalId);
  nextSlide();
});

prevButton.addEventListener("click", (e) => {
  clearInterval(intervalId);
  const currentSlide = track.querySelector(".current-slide");
  let prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  let targetDot = currentDot.previousElementSibling;
  if (!prevSlide) prevSlide = slides[slides.length - 1];
  if (!targetDot) targetDot = dots[dots.length - 1];

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, targetDot);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  clearInterval(intervalId);
});

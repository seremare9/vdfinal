// import './app.css'
import App from "./App.svelte"

const app = new App({
  target: document.getElementById("app"),
})

let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 100;

    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scrollButton').addEventListener('click', () => {
        document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
    });
});

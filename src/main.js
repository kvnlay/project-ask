import Typed from 'typed.js';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { animateQuestion } from './utils/animations';
import { createMemoryCard, memories } from './utils/memoryGallery';
import { startCelebration } from './utils/celebration';
import { initializeBackgroundSlideshow } from './utils/backgroundSlideshow';

// Initialize FontAwesome
library.add(faHeart);
dom.watch();

// Initialize background slideshow
initializeBackgroundSlideshow();

// Initialize typed.js
const typed = new Typed('.typing-text', {
    strings: [
        "It's been great being your 'friend' 🤭...",
        "Every day with you has been special...",
        "You make my heart skip a beat...",
        "And now I want to ask you something..."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    onComplete: () => {
        setTimeout(showMemoryGallery, 1000);
    }
});

// Memory Gallery
function showMemoryGallery() {
    const gallery = document.getElementById('memory-gallery');
    gallery.classList.remove('hidden');
    
    memories.forEach((memory, index) => {
        const card = createMemoryCard(memory, index);
        gallery.appendChild(card);
    });

    setTimeout(showFinalQuestion, 2000);
}

// Final Question
function showFinalQuestion() {
    animateQuestion();
}

// Button Interactions
document.getElementById('yes-btn').addEventListener('click', startCelebration);
document.getElementById('no-btn').addEventListener('mouseover', (e) => {
    const btn = e.target;
    const newX = Math.random() * (window.innerWidth - btn.offsetWidth);
    const newY = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
});

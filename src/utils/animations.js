import { gsap } from 'gsap';

export function animateCard(card, index) {
    return gsap.from(card, {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: index * 0.3
    });
}

export function animateQuestion() {
    const question = document.getElementById('final-question');
    question.classList.remove('hidden');
    return gsap.from(question, {
        duration: 1,
        opacity: 0,
        y: 30
    });
}
export function createFloatingHeart() {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    return heart;
}

export function startCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    return setInterval(() => {
        const heart = createFloatingHeart();
        document.getElementById('hearts-container').appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 100);
}
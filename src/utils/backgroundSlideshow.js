export function initializeBackgroundSlideshow() {
    const images = [
        'https://source.unsplash.com/1920x1080/?romantic,couple',
        'https://source.unsplash.com/1920x1080/?love,dating',
        'https://source.unsplash.com/1920x1080/?romance,sunset',
        'https://source.unsplash.com/1920x1080/?couple,beach',
        'https://source.unsplash.com/1920x1080/?romantic,dinner'
    ];

    const slideshow = document.createElement('div');
    slideshow.className = 'background-slideshow';

    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image})`;
        slideshow.appendChild(slide);
    });

    document.body.insertBefore(slideshow, document.body.firstChild);

    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}
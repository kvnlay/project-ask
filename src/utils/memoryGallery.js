import { animateCard } from './animations';

export function createMemoryCard(memory, index) {
    const card = document.createElement('div');
    card.className = 'memory-card bg-white rounded-lg shadow-lg overflow-hidden';
    card.innerHTML = `
        <img src="${memory.img}" alt="Memory ${index + 1}" class="w-full h-48 object-cover">
        <div class="p-4">
            <p class="text-gray-700 text-center">${memory.text}</p>
        </div>
    `;
    return card;
}

export const memories = [
    { 
        img: 'https://source.unsplash.com/400x300/?romantic', 
        text: 'Our First Meeting' 
    },
    { 
        img: 'https://source.unsplash.com/400x300/?couple', 
        text: 'Beautiful Moments' 
    },
    { 
        img: 'https://source.unsplash.com/400x300/?love', 
        text: 'Special Times' 
    }
];
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
        img: 'https://lh3.googleusercontent.com/d/1TG2rANxPpfvu9L0zEu6hs7uV_yEMROFF', 
        text: 'Amsterdam' 
    },
    { 
        img: 'https://lh3.googleusercontent.com/d/1grurhiwVlAjXjDcVuyQl_oWW6D-UXnN-', 
        text: 'Beautiful Moments' 
    },
    { 
        img: 'https://lh3.googleusercontent.com/d/1LkRjkauY5DA0hxw9w06Rnjmu7oj3YZC5', 
        text: 'Our wins' 
    }
];

// Create floating letters background
document.addEventListener('DOMContentLoaded', function() {
    // Floating letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const container = document.createElement('div');
    container.className = 'floating-letters';
    document.body.appendChild(container);
    
    for (let i = 0; i < 30; i++) {
        const letter = document.createElement('div');
        letter.className = 'floating-letter';
        letter.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
        letter.style.left = Math.random() * 100 + 'vw';
        letter.style.top = Math.random() * 100 + 'vh';
        letter.style.animationDuration = 5 + Math.random() * 15 + 's';
        letter.style.animationDelay = Math.random() * 5 + 's';
        letter.style.fontSize = (20 + Math.random() * 30) + 'px';
        container.appendChild(letter);
    }
    
    // Floating clouds
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.innerHTML = '☁️';
        cloud.style.top = (Math.random() * 80) + 'vh';
        cloud.style.fontSize = (30 + Math.random() * 50) + 'px';
        cloud.style.animationDuration = (30 + Math.random() * 60) + 's';
        document.body.appendChild(cloud);
    }

    // Make words interactive
    const wordItems = document.querySelectorAll('.word-item');
    wordItems.forEach(word => {
        word.addEventListener('click', () => {
            word.style.animation = 'wiggle 0.5s ease';
            setTimeout(() => {
                word.style.animation = '';
            }, 500);
        });
    });
});
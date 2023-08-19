const exploreButton = document.getElementById('exploreButton');
const overlay = document.getElementById('overlay');
const animateFrame = document.getElementById('animateFrame');

exploreButton.addEventListener('click', () => {
    overlay.style.display = 'block';

    const animationDuration = 3000; // 3 seconds
    const start = performance.now();

    function animate(time) {
        const elapsed = time - start;
        
        if (elapsed < animationDuration) {
            const progress = elapsed / animationDuration;
            
            animateFrame.style.width = `${progress * 100}%`;
            animateFrame.style.height = `${progress * 100}%`;
            
            requestAnimationFrame(animate);
        } else {
            animateFrame.style.width = '100%';
            animateFrame.style.height = '100%';
        }
    }

    requestAnimationFrame(animate);
});

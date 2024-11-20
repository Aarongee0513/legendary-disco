function createDiscoBall() {
    const ball = document.querySelector('.ball');
    const panels = 200; // Number of reflective panels
    const radius = 75; // Ball radius

    for (let i = 0; i < panels; i++) {
        const panel = document.createElement('div');
        panel.className = 'panel';
        
        // Calculate position on sphere surface
        const phi = Math.acos(-1 + (2 * i) / panels);
        const theta = Math.sqrt(panels * Math.PI) * phi;
        
        // Convert to Cartesian coordinates
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        // Apply transform
        panel.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${theta}rad) rotateY(${phi}rad)`;
        
        ball.appendChild(panel);
    }
}

// Create the disco ball when the page loads
window.addEventListener('load', createDiscoBall); 

// Add this at the end of the file
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('music');
    
    // Start playing audio (needed because many browsers block autoplay)
    const playAudio = function() {
        audio.play().catch(function(error) {
            console.log("Audio autoplay failed:", error);
        });
        // Remove the click event listener after first interaction
        document.removeEventListener('click', playAudio);
    };
    
    // Add click listener to start audio on first user interaction
    document.addEventListener('click', playAudio);
}); 

// Add this after the existing DOMContentLoaded event listener
document.addEventListener('keydown', function(event) {
    const audio = document.getElementById('music');
    
    // Check if space key was pressed
    if (event.code === 'Space') {
        // Prevent space from scrolling the page
        event.preventDefault();
        
        // Toggle audio playback
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}); 
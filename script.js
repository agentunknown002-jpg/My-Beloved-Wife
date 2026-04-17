function checkLogin() {
    const userInp = document.getElementById('username').value;
    const music = document.getElementById('bg-music');
    const mainContent = document.getElementById('main-content');
    
    if (userInp === "Kyal Sin Ko Ko") {
        // 1. Hide Login
        document.getElementById('login-screen').style.display = 'none';
        
        // 2. Setup 172 Images
        generateImages(172);
        
        // 3. Start Music
        music.play();
        
        // 4. Trigger Zoom Effect
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.classList.add('zoom-in-effect');
        }, 100); 

    } else {
        alert("Access Denied.");
    }
}

function generateImages(count) {
    const garden = document.getElementById('orbit-garden');
    
    for (let i = 1; i <= count; i++) {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'orbit-photo';
        
        // Randomize the orbit distance and speed for a natural look
        const distance = Math.floor(Math.random() * 300) + 100; // 100px to 400px away
        const duration = Math.floor(Math.random() * 20) + 10;   // 10s to 30s speed
        const delay = Math.random() * -20;                      // Random start position
        
        imgDiv.style.setProperty('--distance', ${distance}px);
        imgDiv.style.animationDuration = ${duration}s;
        imgDiv.style.animationDelay = ${delay}s;
        
        // Point to your images (Assumes images are named 1.jpg, 2.jpg, etc.)
        imgDiv.innerHTML = <img src="images/${i}.jpg" onerror="this.src='fallback.jpg'">;
        
        garden.appendChild(imgDiv);
    }
}

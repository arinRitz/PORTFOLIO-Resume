// Toggle Theme
document.getElementById('toggle-theme').addEventListener('click', function() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Update icon visibility based on the current mode
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('light-icon').style.opacity = isDarkMode ? '1' : '0';
    document.getElementById('dark-icon').style.opacity = isDarkMode ? '0' : '1';
});

// Show Modal on Load
window.addEventListener('load', function() {
    const modal = document.getElementById('welcome-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 14000); // 14 seconds
});

// Close Modal Button
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('welcome-modal').style.display = 'none';
});
document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable text selection with keyboard shortcuts
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
                e.preventDefault();
            }
        });


//no click 
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable text selection with keyboard shortcuts
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
                e.preventDefault();
            }
        });
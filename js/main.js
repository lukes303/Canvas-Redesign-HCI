// Settings menu toggle button event listener
document.getElementById('settings-button').addEventListener('click', function() {
    const dropdown = document.getElementById('settings-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Dark mode toggle button event listener
document.getElementById('darkmode-button').addEventListener('click', function() {
    document.body.classList.toggle('light-mode')
});
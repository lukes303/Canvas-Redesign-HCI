// Open Settings menu
document.getElementById('settings-button').addEventListener('click', function() {
    const dropdown = document.getElementById('settings-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});


// Dark mode toggle button event listener
document.getElementById('darkmode-button').addEventListener('click', function() {
    document.body.classList.toggle('light-mode')
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('lightMode', isLightMode);
});

// Load chosen theme preference when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const isLightMode = localStorage.getItem('lightMode') === 'true';
    if (isLightMode) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});

// Open notifications
document.getElementById('notifications-button').addEventListener('click', function() {
    const dropdown = document.getElementById('notifications-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Open add card
document.getElementById('add-card-button').addEventListener('click', function() {
    const dropdown = document.getElementById('add-card-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Search 
document.getElementById('search-button').addEventListener('click', function() {
    const sidebar = document.getElementById('search-sidebar');
    sidebar.classList.toggle('sidebar-active');
});
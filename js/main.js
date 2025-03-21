// Settings menu toggle button event listener
document.getElementById('settings-button').addEventListener('click', function() {
    const dropdown = document.getElementById('settings-dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Dark mode toggle button event listener
document.getElementById('darkmode-button').addEventListener('click', function() {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'rgb(240, 240, 240)' ? 'rgb(15, 15, 15)': 'rgb(240, 240, 240)';
});
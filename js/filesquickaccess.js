document.addEventListener('DOMContentLoaded', function() {
    // Handle adding files to quick access
    const addButtons = document.querySelectorAll('.add-button');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            e.stopPropagation();
            
            // Get the file name from the adjacent link
            const fileItem = this.closest('.file');
            const fileLink = fileItem.querySelector('a');
            const fileName = fileLink.textContent.trim();
            const fileHref = fileLink.getAttribute('href');
            
            // Store the file in localStorage to persist between pages
            addToQuickAccess(fileName, fileHref);
            
            // Provide feedback to the user
            button.textContent = "✓";
            setTimeout(() => {
                button.textContent = "+";
            }, 1500);
        });
    });
    
    // Function to add a file to quick access storage
    function addToQuickAccess(fileName, fileHref) {
        // Get existing quick access items or initialize empty array
        let quickAccessItems = JSON.parse(localStorage.getItem('quickAccessItems')) || [];
        
        // Check if file is already in quick access
        const exists = quickAccessItems.some(item => item.name === fileName);
        
        if (!exists) {
            // Add new file to quick access
            quickAccessItems.push({
                name: fileName,
                href: fileHref,
                // For simplicity, we'll add to the first class card
                // In a real implementation, you'd want to specify which class
                cardId: "class-card-1"
            });
            
            // Save back to localStorage
            localStorage.setItem('quickAccessItems', JSON.stringify(quickAccessItems));
        }
    }
});

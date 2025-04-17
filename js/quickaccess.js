document.addEventListener('DOMContentLoaded', function() {
    // Load quick access items from localStorage
    loadQuickAccessItems();
    
    // Set up event listeners for all delete buttons
    setupDeleteButtons();
    
    function loadQuickAccessItems() {
        const quickAccessItems = JSON.parse(localStorage.getItem('quickAccessItems')) || [];
        
        // Process each saved item
        quickAccessItems.forEach(item => {
            const cardId = item.cardId || 'class-card-1'; // Default to first card if not specified
            const cardQuickAccess = document.querySelector(`#${cardId} #quickaccess1`);
            
            // Only proceed if we found the target quick access list
            if (cardQuickAccess) {
                // Create new list item
                const listItem = document.createElement('li');
                listItem.className = 'class-card-file-item class-card-left-padding';
                
                // Create link
                const link = document.createElement('a');
                link.href = item.href;
                link.className = 'card-links';
                link.textContent = item.name;
                
                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.className = 'class-card-file-item-delete';
                deleteButton.textContent = '×';
                
                // Add event listener to delete button
                deleteButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    removeQuickAccessItem(item.name);
                    listItem.remove();
                });
                
                // Assemble and append the list item
                listItem.appendChild(link);
                listItem.appendChild(deleteButton);
                cardQuickAccess.appendChild(listItem);
            }
        });
    }
    
    function setupDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.class-card-file-item-delete');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Prevent the click from propagating to parent elements
                e.stopPropagation();
                
                // Get the file name
                const listItem = this.closest('.class-card-file-item');
                const link = listItem.querySelector('a');
                const fileName = link.textContent;
                
                // Remove from localStorage
                removeQuickAccessItem(fileName);
                
                // Remove from DOM
                if (listItem) {
                    listItem.remove();
                }
            });
        });
    }
    
    function removeQuickAccessItem(fileName) {
        let quickAccessItems = JSON.parse(localStorage.getItem('quickAccessItems')) || [];
        
        // Filter out the item to be removed
        quickAccessItems = quickAccessItems.filter(item => item.name !== fileName);
        
        // Save back to localStorage
        localStorage.setItem('quickAccessItems', JSON.stringify(quickAccessItems));
    }
});

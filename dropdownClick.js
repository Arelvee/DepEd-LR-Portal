document.addEventListener('DOMContentLoaded', function() {
    // Handle click for dropdown menu items
    document.querySelectorAll('.dropdown > a').forEach(function(dropdownLink) {
        dropdownLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Close other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(function(content) {
                if (content !== dropdownLink.nextElementSibling) {
                    content.classList.remove('show');
                }
            });
            // Toggle the dropdown content
            dropdownLink.nextElementSibling.classList.toggle('show');
        });
    });

    // Handle click for filter dropdown button
    document.querySelector('.filter-dropdown button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        document.querySelector('.filter-dropdown-content').classList.toggle('show');
    });

    // Close dropdowns if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown') && !event.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.dropdown-content, .filter-dropdown-content').forEach(function(content) {
                content.classList.remove('show');
            });
        }
    });
});

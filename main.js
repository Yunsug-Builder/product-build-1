const themeSwitcher = document.getElementById('theme-switcher');

// Function to set the correct theme on page load
function setInitialTheme() {
    // You can add logic here to check for a saved user preference if you implement that later
    // For now, it defaults to dark unless the checkbox is checked.
}

// Function to reload Disqus with the correct theme
function reloadDisqusTheme() {
    if (window.DISQUS) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.url = window.location.href;
                this.page.identifier = window.location.pathname;
                // Set theme based on the presence of 'light-mode' class
                this.page.theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            }
        });
    }
}

// Initial setup
setInitialTheme();

// Theme switcher logic
themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    
    // Check if the Disqus thread exists on the page before trying to reload it
    if (document.getElementById('disqus_thread')) {
        reloadDisqusTheme();
    }
});
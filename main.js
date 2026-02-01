const themeSwitcher = document.getElementById('theme-switcher');

// Function to apply the saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitcher.checked = true;
    } else {
        document.body.classList.remove('light-mode');
        themeSwitcher.checked = false;
    }
}

// Function to reload Disqus with the correct theme
function reloadDisqusTheme() {
    if (window.DISQUS) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.url = window.location.href;
                this.page.identifier = window.location.pathname;
                this.page.theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            }
        });
    }
}

// Apply the theme as soon as the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    // Theme switcher logic
    themeSwitcher.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');

        // Save the new theme preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        
        // Check if the Disqus thread exists on the page before trying to reload it
        if (document.getElementById('disqus_thread')) {
            reloadDisqusTheme();
        }
    });
});

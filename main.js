const themeSwitcher = document.getElementById('theme-switcher');

// Set the initial state of the checkbox on page load, if the theme was previously set to light
if (localStorage.getItem('theme') === 'light') {
    themeSwitcher.checked = true;
}

// Function to reload Disqus with the correct theme
function reloadDisqusTheme() {
    if (window.DISQUS) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.url = window.location.href;
                this.page.identifier = window.location.pathname;
                this.page.theme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
            }
        });
    }
}

// Theme switcher event listener
themeSwitcher.addEventListener('change', () => {
    // Toggle the class on the html element
    document.documentElement.classList.toggle('light-mode');

    // Save the new theme preference to localStorage
    if (document.documentElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    
    // If the Disqus thread exists, reload it with the new theme
    if (document.getElementById('disqus_thread')) {
        reloadDisqusTheme();
    }
});
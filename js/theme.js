document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitcher = document.getElementById('theme-switcher');

    if (!themeSwitcher) {
        return;
    }

    // Set the initial state of the checkbox based on localStorage or the html class
    if (localStorage.getItem('theme') === 'light' || document.documentElement.classList.contains('light-mode')) {
        themeSwitcher.checked = false; // Unchecked for light mode
    } else {
        themeSwitcher.checked = true; // Checked for dark mode
    }

    // Theme switcher event listener
    themeSwitcher.addEventListener('change', () => {
        // Toggle the class on the html element
        if (themeSwitcher.checked) {
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

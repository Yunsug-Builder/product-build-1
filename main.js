
const themeSwitcher = document.getElementById('theme-switcher');

// Theme switcher logic
themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

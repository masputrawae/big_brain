// Theme Switcher Module
const ThemeManager = (() => {
    // Constants
    const THEMES = {
        DARK: 'dark',
        LIGHT: 'light'
    };
    const ICONS = {
        DARK: 'bi bi-moon-stars',
        LIGHT: 'bi bi-sun'
    };
    const STORAGE_KEY = 'theme';

    // DOM Elements
    const themeSwitcher = document.getElementById('switchTheme');
    const htmlElement = document.documentElement;
    const themeIcon = themeSwitcher?.querySelector('i');

    // Theme Utilities
    const getSystemPreference = () => 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;

    const setTheme = (theme) => {
        if (!themeSwitcher || !htmlElement || !themeIcon) return;
        
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        themeIcon.className = theme === THEMES.DARK ? ICONS.DARK : ICONS.LIGHT;
    };

    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(newTheme);
    };

    const initialize = () => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        setTheme(savedTheme || getSystemPreference());
    };

    // Public API
    return {
        init: () => {
            if (!themeSwitcher) return;
            themeSwitcher.addEventListener('click', toggleTheme);
            initialize();
        }
    };
})();

// Sidebar Manager Module
const SidebarManager = (() => {
    // DOM Elements
    const sidebar = document.querySelector('.layout__sidebar');
    const sidebarCloseBtn = document.getElementById('sidebarClose');
    const sidebarToggleBtn = document.getElementById('sidebarToggle');

    // Event Handlers
    const handleClose = () => {
        sidebar?.classList.remove('active');
    };

    const handleToggle = () => {
        sidebar?.classList.toggle('active');
    };

    const handleOutsideClick = (e) => {
        if (sidebar && 
            !sidebar.contains(e.target) && 
            !e.target.closest('#sidebarToggle') && 
            sidebar.classList.contains('active')) {
            handleClose();
        }
    };

    // Public API
    return {
        init: () => {
            if (!sidebar) return;
            
            if (sidebarCloseBtn) {
                sidebarCloseBtn.addEventListener('click', handleClose);
            }
            if (sidebarToggleBtn) {
                sidebarToggleBtn.addEventListener('click', handleToggle);
            }
            document.addEventListener('click', handleOutsideClick);
        }
    };
})();

// Initialize Modules
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    SidebarManager.init();
});

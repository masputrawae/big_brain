// Offcanvas functionality
const toggleOffcanvas = document.getElementById('toggleOffcanvas');
const offcanvas = document.getElementById('offcanvas');

if (toggleOffcanvas && offcanvas) {
  const listIcon = toggleOffcanvas.querySelector('.bi-list');
  const closeIcon = toggleOffcanvas.querySelector('.bi-x-lg');
  
  const toggleIcons = (isActive) => {
    listIcon.style.display = isActive ? 'none' : 'inline-block';
    closeIcon.style.display = isActive ? 'inline-block' : 'none';
  };

  const closeOffcanvas = () => {
    offcanvas.classList.remove('active');
    toggleIcons(false);
  };

  // Initialize icons
  toggleIcons(false);

  toggleOffcanvas.addEventListener('click', () => {
    const isActive = !offcanvas.classList.contains('active');
    offcanvas.classList.toggle('active');
    toggleIcons(isActive);
  });

  document.addEventListener('click', (e) => {
    if (!offcanvas.contains(e.target) && !toggleOffcanvas.contains(e.target)) {
      closeOffcanvas();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('active')) {
      closeOffcanvas();
    }
  });
}

// Theme switcher functionality
const themeSwitcher = document.getElementById('switchTheme');
const moonIcon = themeSwitcher.querySelector('.bi-moon-stars');
const sunIcon = themeSwitcher.querySelector('.bi-sun');

const toggleTheme = (isDark) => {
  moonIcon.style.display = isDark ? 'none' : 'inline-block';
  sunIcon.style.display = isDark ? 'inline-block' : 'none';
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
const isDark = savedTheme === 'dark';
toggleTheme(isDark);

themeSwitcher.addEventListener('click', () => {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  toggleTheme(!isDarkMode);
});

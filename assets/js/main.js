document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle handler
  const handleThemeToggle = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    const themeIcon = toggleTheme.querySelector('i');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.classList.toggle('bi-moon-stars-fill');
    themeIcon.classList.toggle('bi-sun-fill');
  };

  // Offcanvas toggle handler
  const handleOffcanvasToggle = () => {
    const offcanvasIcon = toggleOffcanvas.querySelector('i');
    
    offcanvas.classList.toggle('nav--open');
    offcanvasIcon.classList.toggle('bi-list');
    offcanvasIcon.classList.toggle('bi-x-lg');
  };

  // Close offcanvas when clicking outside
  const handleOutsideClick = (event) => {
    if (!offcanvas.contains(event.target) && !toggleOffcanvas.contains(event.target)) {
      const offcanvasIcon = toggleOffcanvas.querySelector('i');
      
      offcanvas.classList.remove('nav--open');
      offcanvasIcon.classList.remove('bi-x-lg');
      offcanvasIcon.classList.add('bi-list');
    }
  };

  // Animation observer callback
  const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          const animationType = ['u-animation-up', 'u-animation-left', 'u-animation-right']
            .find(cls => entry.target.classList.contains(cls));
          
          if (animationType) {
            entry.target.classList.add(`${animationType}--show`);
          }
        }, index * 150);
      }
    });
  };

  // Theme initialization
  const toggleTheme = document.getElementById('toggleTheme');
  if (toggleTheme) {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const themeIcon = toggleTheme.querySelector('i');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-stars-fill');
    }
    toggleTheme.addEventListener('click', handleThemeToggle);
  }

  // Offcanvas initialization
  const toggleOffcanvas = document.getElementById('toggleOffcanvas');
  const offcanvas = document.getElementById('offcanvas');
  
  if (toggleOffcanvas && offcanvas) {
    toggleOffcanvas.addEventListener('click', handleOffcanvasToggle);
    document.addEventListener('click', handleOutsideClick);
  }

  // Animation initialization
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
  const animatedElements = document.querySelectorAll('.u-animation-up, .u-animation-left, .u-animation-right');
  animatedElements.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      let theme = 'light';
      if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
      }
      localStorage.setItem('theme', theme);
    });
  });  
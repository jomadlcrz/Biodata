function toggleDarkMode() {
  const body = document.body;
  const toggleImage = document.getElementById('darkModeToggle');
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleImage.src = 'images/sun.png';
    toggleImage.alt = 'Toggle Light Mode';
  } else {
    toggleImage.src = 'images/moon.png';
    toggleImage.alt = 'Toggle Dark Mode';
  }
}

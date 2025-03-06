document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de hamburguesa y el menú
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
  // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de hamburguesa y el menú
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
  // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });

// document.getElementById("contactButton").addEventListener("click", function() {
//   window.location.href = "./pages/contact.html";
// });

document.getElementById("goToProjects").addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({
    behavior: 'smooth'
  });
});
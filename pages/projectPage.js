document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de hamburguesa y el menú
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.querySelector('.menu');
  // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });

  document.getElementById("goToProjects").addEventListener("click", function() {
    document.getElementById("otherProjects").scrollIntoView({
      behavior: 'smooth'
    });
  });

 // Buttons to go to contact page
document.getElementById("contactButton").addEventListener("click", function() {
  window.location.href = "./contact.html";
});

// Buttons to go to home page
document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "./homePage.html";
});

 // Scrolls to Projects:
document.getElementById("goToProjects").addEventListener("click", function() {
  document.getElementById("otherProjects").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("goToProjectsB").addEventListener("click", function() {
  document.getElementById("otherProjects").scrollIntoView({
    behavior: 'smooth'
  });
});

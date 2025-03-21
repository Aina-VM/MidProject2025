document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón de hamburguesa y el menú
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.querySelector('.menu');
  // Función para alternar el menú
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
});

  // Scroll to contact page
document.getElementById("contactButton").addEventListener("click", function() {
  document.getElementById("contactUs").scrollIntoView({
    behavior: 'smooth'
  });
});

// Buttons to go to home page
document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "./homePage.html";
});

 // Buttons to go to project page
document.getElementById("goToProjects").addEventListener("click", function() {
  window.location.href = "./projectPage.html";
});

document.getElementById("goToProjectsB").addEventListener("click", function() {
  window.location.href = "./projectPage.html";
});


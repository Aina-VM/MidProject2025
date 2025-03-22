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


//form validation

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener valores de los campos
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Limpiar mensajes de error
  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";

  let isValid = true;

  // Validar teléfono (solo números)
  if (!/^\d+$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Por favor, ingresa solo números.";
    isValid = false;
  }

  // Validar correo electrónico (formato básico)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Por favor, ingresa un correo válido.";
    isValid = false;
  }

  // Si todo es válido, mostrar un mensaje o proceder con el envío
  if (isValid) {
    alert("Formulario enviado correctamente!");
  }
});
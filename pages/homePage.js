document.addEventListener("DOMContentLoaded", function() {
  // HomeLink functionality
  const homeLink = document.getElementById("homeLink");
  if (homeLink) {
    homeLink.classList.add("highlight");
  }

  // Hamburger Menu functionality
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.querySelector('.menu');
  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
});

 // Buttons to go to contact page
document.getElementById("goToContact").addEventListener("click", function() {
  window.location.href = "./contact.html";
});

document.getElementById("contactButton").addEventListener("click", function() {
  window.location.href = "./contact.html";
});

// Buttons to go to project page
document.getElementById("goToSimplify").addEventListener("click", function() {
  window.location.href = "./projectPage.html";
});

 // Scrolls to Projects:
document.getElementById("goToProjects").addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("goToProjectsB").addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("goToProjectsSeccion").addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({
    behavior: 'smooth'
  });
});

// Scrolls to Services:
document.getElementById("goToServices").addEventListener("click", function() {
  document.getElementById("servicesPart").scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("goToServicesB").addEventListener("click", function() {
  document.getElementById("servicesPart").scrollIntoView({
    behavior: 'smooth',
    block: "start" // Align to the start (top) of the element
  });
});


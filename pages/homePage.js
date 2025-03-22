document.addEventListener("DOMContentLoaded", function() {

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


// service error
document.getElementById("error").addEventListener("click", function() {
  window.location.href = "./error.html";
});

// CTA form validation

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe inmediatamente

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  // Limpia cualquier mensaje de error previo
  emailError.textContent = "";

  // Validar el email usando una expresión normal
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Por favor, introduce un correo electrónico válido.";
  } else {
    alert("Suscripción realizada correctamente!");
  }
});


//JSON NIGHTMARE

document.addEventListener("DOMContentLoaded", function() {
  // Get the query parameter (e.g., ?id=2)
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id"); // Get the project ID

  if (projectId) {
    // Fetch the JSON data
    fetch('./public/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const projects = data.projects;

        // Only proceed if the project is 2 (Dashcoin) or 3 (Vectorify)
        if (projectId == 2 || projectId == 3) {
          const project = projects.find(p => p.uuid == projectId); // Find project by ID

          if (project) {
            displayProjectDetails(project); // Show the details
          } else {
            console.error("Project not found in the JSON file!");
          }
        } else {
          console.error("Invalid project ID! Only 2 and 3 are allowed.");
        }
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  } else {
    console.error("No project ID provided in the URL!");
  }

  // Function to display project details
  function displayProjectDetails(project) {
    const projectDetailsContainer = document.querySelector(".simplify");

    projectDetailsContainer.innerHTML = `
      <div class="simplify-titles">
        <h1>${project.name}</h1>
        <div class="text-row">
          <p class="ui-design">${project.description}</p>
          <div class="simplify-data">
            <p>Completed on</p>
            <data>${project.completed_on}</data>
          </div>
        </div>
      </div>
      <div class="simplify-images">
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="simplify-description">
        <p>${project.content}</p>
      </div>
    `;
  }
});
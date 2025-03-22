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

// services error
document.getElementById("error").addEventListener("click", function() {
  window.location.href = "./error.html";
});


//Al Lio amb JSON:
document.addEventListener("DOMContentLoaded", function() {
  const projectDetailsContainer = document.querySelector('.simplify');
  const otherProjects = document.querySelector('#otherProjects');

  // Fetch the JSON data from the public folder
  fetch('./public/db.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const projects = data.projects;

      // Add event listeners to "Learn more" links
      document.querySelectorAll('.projectCard a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior

          const projectId = this.getAttribute('data-id'); // Get project ID
          const project = projects.find(p => p.uuid == projectId); // Find project by ID

          if (project) {
            displayProjectDetails(project); // Display project details
          }
        });
      });

      // Function to display project details
      function displayProjectDetails(project) {
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
    })
    .catch(error => {
      console.error('Error fetching the JSON data:', error);
    });
});
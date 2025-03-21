# MidProject2025

Project Name: MidPRoject2025 - Aina
Description
MidPRoject2025 is a web-based application designed to dynamically load and display information about various projects from a JSON file. The application features sections for recent projects and other projects, linking users to detailed project pages with additional content. It uses HTML, CSS, and JavaScript to render the pages dynamically and incorporates seamless navigation between sections and pages.

Features
Dynamic Loading of Project Data: Fetch project information from a JSON file stored in the public folder and render it dynamically on the webpage.

Project Detail Pages: Redirect users to specific project detail pages when they click "Learn more" links.

Recent Projects Section: Includes featured projects like Dashcoin and Vectorify, dynamically rendered and linked to their detailed pages.

Other Projects Section: Displays a collection of projects (Orbit, Purify, and CryptoPie) with options to view detailed content.

Smooth Scroll and Navigation: Enables smooth scrolling and dynamic section updates via JavaScript events.

Responsive Design: Designed with a responsive layout to ensure compatibility across various devices.

Technologies Used
Frontend:

HTML: Markup for structuring the content.

CSS: Styling the layout and appearance of the page.

JavaScript: Dynamically updating content and handling navigation.

Backend:

JSON: Stores project data for dynamic fetching.

Tools:

Visual Studio Code: Development environment.

GitHub: Version control and repository hosting.

Netlify: Deployment for static files.

Explore the website: 

A. Homepage Navigation:

Explore the "Recent Projects" and "Other Projects" sections.

Click the "Learn more" links to navigate to detailed project pages.

B. Project Detail Pages:

Project details for Dashcoin and Vectorify are dynamically fetched and displayed using their unique identifiers.

Similarly, explore Orbit, Purify, and CryptoPie in the "Other Projects" section.

C. Contact Page with Form Submission:

Validate the email field and interact with the subscribe feature.

JSON Structure:
The project information is stored in a JSON file in the public folder. Here is an example:

json
{
  "projects": [
    {
      "uuid": 2,
      "name": "Dashcoin",
      "description": "Web Development",
      "content": "Lorem ipsum dolor sit amet...",
      "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/2.jpg?raw=true",
      "completed_on": "June 10, 2021"
    },
    {
      "uuid": 3,
      "name": "Vectorify",
      "description": "User Experience Design",
      "content": "Lorem ipsum dolor sit amet...",
      "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true",
      "completed_on": "June 10, 2021"
    }
  ]
}


Verify your application is live and accessible.

Future Improvements:
- Expand JSON structure to include more projects and categories. Especifically I want that from Home Page "Learn More" for projects 2 and 3 goes to Project Page and puts there their information.

- Enhance form validation with real-time feedback and server-side integration.


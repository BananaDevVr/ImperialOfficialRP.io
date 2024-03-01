// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("application-form");
    const resultsSection = document.getElementById("applications"); // Get the section where results will be displayed

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(form);
        const username = formData.get("username");
        const age = formData.get("age");
        const experience = formData.get("experience");
        const reason = formData.get("reason");
        const skills = formData.get("skills");
        const discord = formData.get("discord");
        const availability = formData.get("availability");
        const timezone = formData.get("timezone");

        // Create a new section for the application results
        const resultSection = document.createElement("section");
        resultSection.classList.add("application-result");

        // Display answers
        const resultsHTML = `
            <h3>Application Results</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Reason for joining:</strong> ${reason}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Availability:</strong> ${availability}</p>
            <p><strong>Timezone:</strong> ${timezone}</p>
            <p>Thank you for submitting your application! Scroll down to see the results.</p>
            <p>Don't forget to DM the owner with your application screenshot.</p>
        `;
        resultSection.innerHTML = resultsHTML;

        // Append the results section to the main element
        resultsSection.appendChild(resultSection);

        // Optionally, you can send the form data to a server using fetch or XMLHttpRequest for storage or further processing.
    });
});
// Smooth scrolling function
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Enable smooth scrolling behavior
        });
    });
});

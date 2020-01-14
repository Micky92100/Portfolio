const welcome = document.getElementById("welcome");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

welcome.style.display = "inline-block";
about.style.display = "none";
projects.style.display = "none";
contact.style.display = "none";

function toSection(sectionId) {
    switch (sectionId) {
        case "welcome":
            welcome.style.display = "inline-block";
            about.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "none";
            break;
        case "about":
            about.style.display = "inline-block";
            welcome.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "none";
            break;
        case "projects":
            projects.style.display = "inline-block";
            about.style.display = "none";
            welcome.style.display = "none";
            contact.style.display = "none";
            break;
        case "contact":
            contact.style.display = "inline-block";
            about.style.display = "none";
            projects.style.display = "none";
            welcome.style.display = "none";
            break;
    }
}

// TODO fadeIn fadeOut: jQuery

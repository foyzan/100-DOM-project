// Select the navigation buttons
var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

// Select the content paragraphs
var homeText = document.querySelector("#hometext");
var aboutText = document.querySelector("#abouttext");
var contactText = document.querySelector("#contacttext");

// Initially display the home content
homeText.style.display = "block";

// Function to hide all content paragraphs
function hideAll() {
    document.querySelectorAll("p").forEach(function(p) {
        p.style.display = "none";
    });
}

// Add event listener to the home button
home.addEventListener('click', function() {
    hideAll();
    homeText.style.display = "block";
});

// Add event listener to the about button
about.addEventListener('click', function() {
    hideAll();
    aboutText.style.display = "block";
});

// Add event listener to the contact button
contact.addEventListener('click', function() {
    hideAll();
    contactText.style.display = "block";
});

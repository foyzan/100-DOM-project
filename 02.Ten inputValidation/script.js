// Select the form element
var form = document.querySelector("form");

// Select the heading element
var h1 = document.querySelector("h1");

// Select all input elements of type 'text'
var inputs = document.querySelectorAll('input[type="text"]');

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Initialize a flag to check if any input field is blank
    let isBlank = false;

    // Iterate over each input element
    inputs.forEach(function(input) {
        // Check if the input field is empty after trimming whitespace
        if (input.value.trim() === "") {
            isBlank = true;
        }
    });

    // If any input field is blank, display an error message
    if (isBlank) {
        h1.innerText = "All input must be filled";
        h1.style.color = 'red';
    } else {
        // Clear the error message if all fields are filled
        h1.innerText = "";
        h1.style.color = '';
    }
});

// Select the form element
var form = document.querySelector("form");

// Select the input elements by their IDs
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Check if either input field is empty after trimming whitespace
    if (input1.value.trim() === '' || input2.value.trim() === '') {
        // Display an alert if either field is empty
        alert("Error!! Both fields are required.");
    }
});

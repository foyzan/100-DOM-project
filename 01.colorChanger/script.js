// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button');

// Select the body element
const body = document.querySelector('body');

// Iterate over each button element
buttons.forEach(function(button) {
    // Add an event listener to each button for the 'click' event
    button.addEventListener('click', function(event) {
        // Optionally, you can change the background color directly
        // body.style.backgroundColor = event.target.id;

        // Get the ID of the clicked button
        let id = event.target.id;

        // Set the body's ID to the clicked button's ID
        body.setAttribute('id', id);
    });
});


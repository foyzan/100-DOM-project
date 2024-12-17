// Select the button element
var button = document.querySelector("button");

// Select the heading element by its tag name
var text = document.querySelector("h1");

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    // Change the button's inner text to 'clicked' when clicked
    button.innerText = 'clicked';
    
    // Change the heading's text content to 'Welcome to Reality' when the button is clicked
    text.textContent = 'Welcome to Reality';
});



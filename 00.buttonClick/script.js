// Select the button element
var button = document.querySelector("button");

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    // Change the button's inner text to 'hacked' when clicked
    button.innerText = 'hacked';
});

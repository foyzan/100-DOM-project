// Select the button element
const button = document.querySelector('button');

// Add event listener to the button
button.addEventListener('click', () => {
    // Toggle the overflow-hidden class on the body
    document.body.classList.toggle("overflow-hidden");
    // Toggle the red class on the button
    button.classList.toggle("red");
});
// Select the block and unblock buttons and the h2 element
const block = document.querySelector('.block');
const unblock = document.querySelector('.Unblock');
const h2 = document.querySelector('h2');

// Log the selected elements to the console
console.log(block, unblock, h2);

// Add event listener to the block button
block.addEventListener("click", function() {
    // Set 'block' item in localStorage to true
    localStorage.setItem('block', true);
    // Update the display text
    showFunction();
});

// Add event listener to the unblock button
unblock.addEventListener("click", function() {
    // Remove 'block' item from localStorage
    localStorage.removeItem('block');
    // Update the display text
    showFunction();
});

// Function to update the display text based on localStorage
function showFunction() {
    if (localStorage.getItem('block')) {
        h2.textContent = 'You are blocked';
    } else {
        h2.textContent = 'You are unblocked';
    }
}

// Initial call to update the display text on page load
showFunction();
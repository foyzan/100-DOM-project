// Select the block and unblock buttons and the h2 element
const block = document.querySelector('.block');
const unblock = document.querySelector('.Unblock');
const h2 = document.querySelector('h2');

// Function to update the display text based on localStorage
function showFunction() {
    h2.textContent = localStorage.getItem('block') ? 'You are blocked' : 'You are unblocked';
}

// Add event listener to the block button
block.addEventListener("click", () => {
    // Set 'block' item in localStorage to true and update the display text
    localStorage.setItem('block', true);
    showFunction();
});

// Add event listener to the unblock button
unblock.addEventListener("click", () => {
    // Remove 'block' item from localStorage and update the display text
    localStorage.removeItem('block');
    showFunction();
});

// Initial call to update the display text on page load
showFunction();
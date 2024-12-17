// Select the input element
var input = document.querySelector("input");

// Select the 'add' button element
var add = document.querySelector("#add");

// Select the 'remove' button element
var remove = document.querySelector("#remove");

// Select the unordered list element
var ul = document.querySelector("ul");

// Declare a variable to hold the list item element
var li;

// Add an event listener to the 'add' button for the 'click' event
add.addEventListener('click', function() {
    // Check if the input value is not empty
    if (!(input.value === "")) {
        // Create a new list item element
        li = document.createElement("li");
        // Set the text content of the list item to the input value
        li.textContent = input.value;
        // Append the list item to the unordered list
        ul.appendChild(li);
        // Clear the input value
        input.value = "";
    }
});

/* This is for only removing the last item from the list. 
I want to remove the last item from the list. I have to change */

/* 
remove.addEventListener('click', function() {
    if (ul.children.length > 0) {
        ul.removeChild(li);
    }
});
*/

// Add an event listener to the 'remove' button for the 'click' event
remove.addEventListener('click', function() {
    // Check if there are any children in the unordered list
    if (ul.children.length > 0) {
        // Remove the last child of the unordered list
        ul.removeChild(ul.children[ul.children.length - 1]);
    }
});

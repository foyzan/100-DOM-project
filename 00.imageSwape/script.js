// Select the button element
var button = document.querySelector("button");

// Select the first image element by its ID
var img1 = document.querySelector("#img1");

// Select the second image element by its ID
var img2 = document.querySelector("#img2");

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    // Store the src attributes of the images
    let src1 = img1.src;
    let src2 = img2.src;

    // Swap the src attributes of the images
    img1.src = src2;
    img2.src = src1;
});



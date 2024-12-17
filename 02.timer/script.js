// Select the start button element
var start = document.querySelector("#start");

// Select the stop button element
var stop = document.querySelector("#stop");

// Select the reset button element
var reset = document.querySelector("#startOver");

// Select the heading element
var h2 = document.querySelector("h2");

// Initialize the interval ID and other variables
var intervalId = null;
var interval = 1000; // 1 second
var time = 1;
var st = false;

// Function to start the timer
function startFun() {
    return setInterval(function () {
        h2.textContent = time;
        time++;
    }, interval);
}

// Add an event listener to the start button for the 'click' event
start.addEventListener('click', function () {
    if (!intervalId) {
        intervalId = startFun();
        st = true;
    }
});

// Add an event listener to the stop button for the 'click' event
stop.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
});

// Add an event listener to the reset button for the 'click' event
reset.addEventListener('click', function () {
    if (st) {
        clearInterval(intervalId);
        intervalId = null; // Reset the interval ID
        h2.textContent = 0;
        time = 1;

        if (!intervalId) {
            intervalId = startFun();
        }
    }
});

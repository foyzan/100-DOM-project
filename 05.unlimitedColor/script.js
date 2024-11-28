// const Start = document.querySelector('#start');
// const Stop = document.querySelector('#stop');

// const randomColor = function(){
//     const hex = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// let intervalId;
// const startColorChanger = function(){
//     if(!intervalId)
//     {
//         intervalId = setInterval(colorChanger, 1000);
//     }

//     function colorChanger(){
//         document.body.style.backgroundColor = randomColor();;
//     }
// }

// const stopColorChanger = function(){
//     clearInterval(intervalId);
//     intervalId = null;
// }

// Start.addEventListener("click", startColorChanger);
// Stop.addEventListener("click", stopColorChanger);

// Select the start and stop buttons
const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');

// Function to generate a random hex color
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

// Function to start changing the background color
const startColorChanger = function() {
    if (!intervalId) {
        intervalId = setInterval(colorChanger, 1000);
    }
}

// Function to change the background color
function colorChanger() {
    document.body.style.backgroundColor = randomColor();
}

// Function to stop changing the background color
const stopColorChanger = function() {
    clearInterval(intervalId);
    intervalId = null;
}

// Add event listeners to the start and stop buttons
Start.addEventListener("click", startColorChanger);
Stop.addEventListener("click", stopColorChanger);



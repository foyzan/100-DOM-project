// const clock = document.getElementById('clock');

// console.log(clock);

//     let date = new Date();

//     clock.innerHTML = date.toLocaleTimeString();

// setInterval(function(){
//     let date = new Date();

//     clock.innerHTML = date.toLocaleTimeString();
// }, 2000)


const clock = document.getElementById('clock');

console.log(clock);

function updateClock() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Initial call to display the time immediately
updateClock();

// Update the clock every 2 seconds
setInterval(updateClock, 2000);

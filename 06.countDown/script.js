// Set the date we're counting down to
const launchDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the launch date
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Launched!";
    }
}, 1000);

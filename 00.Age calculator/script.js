// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");

// function calculateAge() {
//     const birthdayValue = birthdayEl.value;
//     if (birthdayValue === "") {
//         alert("Please enter your birthday");
//     } else {
//         const age = getAge(birthdayValue);
//         resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//     }
// }

// function getAge(birthdayValue) {
//     const currentDate = new Date();
//     const birthdayDate = new Date(birthdayValue);
//     let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//     const month = currentDate.getMonth() - birthdayDate.getMonth();

//     if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
//         age--;
//     }

//     return age;
// }

// btnEl.addEventListener("click", calculateAge);

// Select the input element for the birthdate
var birthInput = document.getElementById("birthday");

// Select the button element
var btn = document.getElementById("btn");

// Select the element to display the result
var result = document.getElementById("result");

// Add an event listener to the button for the 'click' event
btn.addEventListener('click', function() {
    // Get the birthdate from the input field and create a Date object
    var birthdayDate = new Date(birthInput.value);
    
    // Get the current date
    var today = new Date();
    
    // Calculate the difference in years
    var yearDiff = today.getFullYear() - birthdayDate.getFullYear();
    
    // Calculate the difference in months
    var monthDiff = today.getMonth() - birthdayDate.getMonth();
    
    // Calculate the difference in days
    var dayDiff = today.getDate() - birthdayDate.getDate();

    // Adjust the year difference if the birth month and day haven't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearDiff--;        
    }

    // Display the result
    result.innerText = `You are ${yearDiff} years old.`;
});

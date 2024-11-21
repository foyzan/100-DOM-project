// const form = document.querySelector('form');

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     const weight = parseInt(document.querySelector('#weight').value);
//     const height =parseInt(document.querySelector('#height').value);
//     const result = document.querySelector('#results');

//     if(isNaN(weight) || weight < 0){
//         result.innerHTML = `Please give a valid weight`;
//     }
//     else if(isNaN(height) || height < 0){
//         result.innerHTML = `Please give a valid height`;
//     }
//     else{
//         const meterHeight = height * 0.3048;
//         const BMI = (weight / (meterHeight * meterHeight)).toFixed(2);
//         if(BMI < 18.6)
//         {
//             result.innerHTML = `<span>${BMI} Under weight</span>`;
//         }
//         else if(BMI < 24.9)
//         {
//             result.innerHTML = `<span>${BMI} Normal weight</span>`;
//         }
//         else if(BMI > 24.9)
//         {
//             result.innerHTML = `<span>${BMI} Over weight</span>`;
//         }
        
//     }
// })

// GPT optimized version

const form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const result = document.querySelector('#results');

    // Validate weight input
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please provide a valid weight.`;
        return;
    }

    // Validate height input
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please provide a valid height.`;
        return;
    }

    // Convert height from feet to meters
    const meterHeight = height * 0.3048;
    // Calculate BMI
    const BMI = (weight / (meterHeight * meterHeight)).toFixed(2);

    // Determine BMI category
    let category;
    if (BMI < 18.6) {
        category = 'Underweight';
    } else if (BMI < 24.9) {
        category = 'Normal weight';
    } else {
        category = 'Overweight';
    }

    // Display the result
    result.innerHTML = `<span>${BMI} - ${category}</span>`;
});

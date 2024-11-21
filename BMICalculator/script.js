const form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height =parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#results');

    if(isNaN(weight)){
        result.innerHTML = `Please give a valid weight`;
    }
    else if(isNaN(height)){
        result.innerHTML = `Please give a height`;
    }
    else{
        const meterHeight = height * 0.3048;
        const BMI = (weight / (meterHeight * meterHeight)).toFixed(2);
        if(BMI < 18.6)
        {
            result.innerHTML = `<span>${BMI} Under weight</span>`;
        }
        else if(BMI < 24.9)
        {
            result.innerHTML = `<span>${BMI} Normal weight</span>`;
        }
        else if(BMI > 24.9)
        {
            result.innerHTML = `<span>${BMI} Over weight</span>`;
        }
        
    }
})


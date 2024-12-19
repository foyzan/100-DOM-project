var bilInput = document.querySelector("#bill");
var tipInput = document.querySelector("#tip");
var button = document.querySelector("#calculate")
var total = document.querySelector("#total")

button.addEventListener("click", function(){
    var bil = parseFloat(bilInput.value);
    var tipPercentage = parseFloat(tipInput.value);
    var tip = (bil * tipPercentage) / 100;
    var totalValue = (bil + tip).toFixed(2);
    total.textContent = totalValue;
})
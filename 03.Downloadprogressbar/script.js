var progressBar = document.querySelector("#progressBarValue");
var count = 20;
var progressFunc = setInterval(function(){
    if(count == 100){
        clearInterval(progressFunc)
    }
    progressBar.style.width = count + "%";
    count++
},200)
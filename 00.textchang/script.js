var button = document.querySelector("button");
var text = document.querySelector("h1");
button.addEventListener('click', function(){
    button.innerText = 'clicked'
    text.textContent = 'Welcome to Reality'
})


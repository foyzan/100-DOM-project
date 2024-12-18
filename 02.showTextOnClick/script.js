var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");



var homeText = document.querySelector("#hometext");
var aboutText = document.querySelector("#abouttext");
var contactText = document.querySelector("#contacttext");

homeText.style.display = "block";

function hideAll(){
    document.querySelectorAll("p").forEach(function(p){
        p.style.display = "none";
    })
}

home.addEventListener('click', function(){
    hideAll();
    homeText.style.display = "block";
})

about.addEventListener('click', function(){
    hideAll();
    aboutText.style.display = "block";
})

contact.addEventListener('click', function(){
    hideAll()
    contactText.style.display = "block";
})



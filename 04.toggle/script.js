const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.body.classList.toggle("overflow-hidden");
    button.classList.toggle("red")
})
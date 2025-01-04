const block = document.querySelector('.block');
const unblock = document.querySelector('.Unblock');
const h2 = document.querySelector('h2');

console.log(block, unblock, h2);
block.addEventListener("click", function(){
    localStorage.setItem('block', true);
    showFunction();
})


unblock.addEventListener("click", function(){
    localStorage.removeItem('block');
    showFunction();
})


function showFunction(){
    if(localStorage.getItem('block')){
        h2.textContent = 'You are blocked';
    }else{
        h2.textContent = 'You are unblocked';
    }
}
showFunction();
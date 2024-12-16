var button = document.querySelector("button");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
button.addEventListener('click', function(){
   let src1 = img1.src;
   let src2 = img2.src;

   img1.src = src2;
   img2.src = src1;
})


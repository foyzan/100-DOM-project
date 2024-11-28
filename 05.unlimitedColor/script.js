const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startColorChanger = function(){
    if(!intervalId)
    {
        intervalId = setInterval(colorChanger, 1000);
    }

    function colorChanger(){
        document.body.style.backgroundColor = randomColor();;
    }
}

const stopColorChanger = function(){
    clearInterval(intervalId);
    intervalId = null;
}

Start.addEventListener("click", startColorChanger);
Stop.addEventListener("click", stopColorChanger);

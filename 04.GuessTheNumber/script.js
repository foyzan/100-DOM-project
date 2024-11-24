let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submitButton = document.querySelector("#subt");
const inputBox = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".GameOver");

const div = document.createElement("div");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const guess = parseInt(inputBox.value);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    //
    if (isNaN(guess) || guess <= 0 || guess > 100) {
        alert("Please Enter a valid number between 1 to 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            if (checkGuess(guess)) {
                return;
            } else {
                displayGuess(guess);
                const over = document.createElement("h2");
                over.classList.add("lowOrHi");
                over.innerHTML = `Game Over!!  ${randomNumber}`;
                endGame();
                document.querySelector(".button").appendChild(over);
            }
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        const win = document.createElement("h2");
        win.classList.add("lowOrHi");
        win.innerHTML = `You Won!! ${randomNumber}`;
        endGame();
        document.querySelector(".button").appendChild(win);
        return true;
    } else if (Math.abs(randomNumber - guess) < 3) {
        displayMessage(`You are Too close`);
    } else if (Math.abs(randomNumber - guess) < 5) {
        displayMessage(`You are close`);
    } else if (Math.abs(randomNumber - guess) < 10) {
        displayMessage(`You are within Range`);
    } else if (randomNumber - guess >= 20) {
        displayMessage(`Your guess is Too low`);
    } else if (randomNumber - guess < -20) {
        displayMessage(`Your guess is Too low`);
    }
}

function displayGuess(guess) {
    inputBox.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `${msg}`;
}

function endGame() {
    inputBox.value = "";
    inputBox.setAttribute("disabled", "");
    div.classList.add("button");
    div.innerHTML = `<button id = "startNew" type="button">Start Over</button>`; /* if I use <button><button>  it will reload the page
                                                    and Don't need to use NewGame function but I will use <button type="button">Start Over</button>. for this reason I have to use newGame function*/
    startOver.appendChild(div);
    startOver.style.display = "block";
    playGame = false;
    newGame()
}

function newGame() { 
    newGameButton = document.querySelector("#startNew")
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    inputBox.removeAttribute('disabled')
    startOver.removeChild(div)
    startOver.style.display = "none";
    playGame = true;
    })
}

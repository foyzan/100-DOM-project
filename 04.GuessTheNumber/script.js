const randomNumber = parseInt(Math.random() * 100 + 1);
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
            displayGuess(guess);
            displayMessage(`Game Over!!  ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        displayMessage(`You Won!! ${randomNumber}`);
        endGame();
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
    inputBox.setAttribute("disable", "");
    div.classList.add("button");
    div.innerHTML = `<button>Start Over</button>`; /* if I use <button><button>  it will reload the page
                                                    and Don't need to use NewGame function but I will use <button type="button">Start Over</button>. for this reason I have to use newGame function*/
    startOver.appendChild(div)
    startOver.style.display = 'block';
    playGame = false;
    
}

function newGame() {

}


    
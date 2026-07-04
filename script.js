
let ramdonNum = Math.ceil(Math.random() * 100);
let CheckGuessEl = document.getElementById("CheckGuess");
let noteEl = document.getElementById("note");
let counterEl = document.getElementById("counter");
let inputEl = document.getElementById("guessnum");
let counter = 5;

function checkNum() {
    let guessnumEl = Number(document.getElementById("guessnum").value);
    counter -= 1;
    if (counter > 0) {
        if (guessnumEl === ramdonNum) {
            noteEl.textContent = `1cr......${guessnumEl} is a Right answere. You have wonderfull Guess power, Once in life try Stka Matka`
            inputEl.disabled = true;

        }
        else if (guessnumEl > ramdonNum) {
            noteEl.textContent = `${guessnumEl} is a high Number`;
            counterEl.textContent = `You have left ${counter} Number of trial to guess a Right number`;
        
            inputEl.value = "";
        }
        else {
            noteEl.textContent = `${guessnumEl} is a Lower Numner`;
            counterEl.textContent = `You have left ${counter} Number of trial to guess a Right number`;
            
            inputEl.value = "";
        }
    }
    else {
        counterEl.textContent = `You lost to Guess a number, Right answer is ${ramdonNum}. Reset the game to Play Again`;
        
        inputEl.value = "";
    }
}
console.log(ramdonNum);

function reset() {
    window.location.reload();
}




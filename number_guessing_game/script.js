const genRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}
let randomNumber = genRandomNumber();
let lifeElement = document.querySelector('#life');
let life = 10
lifeElement.innerHTML = `You have ${life} lives left.`;
const verifyNumber = () => {
    const userInput = Number(document.getElementById("input-number").value);
    const result = document.getElementById("result");

    if (userInput < 0 || userInput > 100) {
        life--
        lifeElement.innerHTML = `You have ${life} lives left.`;
        result.innerHTML = "Please enter a number between 0 and 100.";
        document.getElementById("input-number").value = "";
    } else if (userInput < randomNumber) {
        life--
        lifeElement.innerHTML = `You have ${life} lives left.`;
        result.innerHTML = "Too low! Try again.";
        document.getElementById("input-number").value = "";
    } else if (userInput > randomNumber) {
        life--
        lifeElement.innerHTML = `You have ${life} lives left.`;
        result.innerHTML = "Too high! Try again.";
        document.getElementById("input-number").value = "";
    } else {
        result.innerHTML = "Congratulations! You guessed the number!";
        
    }
}

const resetGame = () => {
    randomNumber = genRandomNumber();
    document.getElementById("input-number").value = "";
    document.getElementById("result").innerHTML = "Try to guess the secret number between 1 and 100. After each guess, you'll get a hint if your guess is too high or too low. Good luck!";
}

let formBox = document.querySelector('.form-box');
formBox.addEventListener('submit', (e) => {
    e.preventDefault();
    if (life > 0) {
        verifyNumber();
        if (life === 0) {
            document.getElementById("result").innerHTML = "Game Over! The number was " + randomNumber + ".";
        }
    } else {
        document.getElementById("result").innerHTML = "Game Over! The number was " + randomNumber + ".";
    }
});
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener("click", () => {
    resetGame();
    life = 10;
    lifeElement.innerHTML = `You have ${life} lives left.`;
});

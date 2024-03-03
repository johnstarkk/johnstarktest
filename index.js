// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the game
function startGame() {
  let guess = 0;
  let attempts = 0;

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
    } else {
      attempts++;

      if (guess < randomNumber) {
        alert("Too low! Try again.");
      } else if (guess > randomNumber) {
        alert("Too high! Try again.");
      }
    }
  }

  alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
}

// Call the function to start the game
startGame();
function submitName(submitButton) {
  playerName = input.value(); // Get the player's name
  console.log("Player Name: " + playerName + ", Level: " + selectedLevel);

  // Check if the player entered a valid name (not empty)
  if (playerName.trim() !== "") {
    // Add bonus points if the player entered a name
    playerScore += 50; // You can adjust the bonus amount as needed
    console.log("Bonus points awarded! New score: " + playerScore);
  } else {
    // No bonus points if the player left the name empty
    console.log("No bonus points awarded. Player name is empty.");
  }

  input.hide(); // Hide input box after submission
  submitButton.hide(); // Hide submit button after submission

  // Add the player to the scoreboard with initial score
  scoreboard.push({ name: playerName, score: playerScore });
  saveData();

  // Go to the game options page
  page = 3; // Go to the GameOptions page
}


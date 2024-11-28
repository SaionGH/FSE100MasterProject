// Order Class
class Order {
  constructor(recipe, customer) {
    this.recipe = recipe;
    this.customer = customer;
    this.isCompleted = false;
    this.timer = customer.patience;
  }

  // Decreases the timer each frame
function updateTimer() {
  if (gameStarted && !gameOver) {
    timer -= deltaTime / 1000; // Decrease the timer based on elapsed time
    if (timer <= 0) {
      timer = 0; // Ensure it doesn't go negative
      gameOver = true; // End the game
      page = 5; // Transition to the timeout screen
    }
  }
}
  function displayTimer() {
  fill(255); // White text
  textSize(24); // Set text size
  textAlign(RIGHT, BOTTOM); // Align text to bottom right
  text(`Time: ${Math.ceil(timer)}s`, width - 20, height - 20); // Position near bottom-right corner
}

  // Checks if the player's dish matches the recipe
  checkCompletion(playerDish) {
    // TODO: Implement order completion check
  }

  // Draws the order on the screen
  drawOrder(x, y) {
    // TODO: Implement drawing logic
  }
}

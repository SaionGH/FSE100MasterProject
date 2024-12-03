// Order Class
 class Order {
  constructor(recipe, customer) {
    this.recipe = recipe;
    this.customer = customer;
    this.isCompleted = false;
    this.timer = customer.patience;
  }
  
  updateTimer(deltaTime, gameStarted, gameOver) {
    if (gameStarted && !gameOver) {
      this.timer -= deltaTime / 1000; // Decrease the timer based on elapsed time
      if (this.timer <= 0) {
        this.timer = 0; // Ensure it doesn't go below 0
        this.isCompleted = true; // Mark order as failed or expired
      }
    }
  }

  // Decreases the timer each frame
 displayTimer(x, y) {
    fill(0); // White text
    console.log("Two Players selected");
    textSize(16); // Set text size
    textAlign(LEFT, CENTER); // Align text to the left
    text(`Time: ${Math.ceil(this.timer)}s`, x, y); // Display the remaining time
  }
  
  

  drawOrder(x, y) {
    console.log(`Drawing order at (${x}, ${y}) for recipe: ${this.recipe}`);
    fill(0);
    text(`Order: ${this.recipe}`, x + 10, y + 25); // Draw order name
  }

}
window.Order = Order;
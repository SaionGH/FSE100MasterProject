// Order Class
class Order {
  constructor(recipe, customer) {
    this.recipe = recipe;
    this.customer = customer;
    this.isCompleted = false;
    this.timer = customer.patience;
  }

  // Decreases the timer each frame
  updateTimer() {
    // TODO: Implement timer logic
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

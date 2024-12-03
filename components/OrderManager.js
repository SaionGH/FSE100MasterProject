
// OrderManager Class
 class OrderManager {
  constructor() {
    this.orders = [];
  }

  // Adds a new order to the list
  addOrder(recipe, customer) {
    if (!recipe || !customer) {
      console.error("Invalid recipe or customer!");
      return;
    }
    let newOrder = new Order(recipe, customer); // Ensure Order class is defined
    this.orders.push(newOrder);
  }

  // Updates all orders
  updateOrders(deltaTime, gameStarted, gameOver) {
     if (!gameStarted || gameOver) return; // Only update if the game is running

    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].updateTimer(deltaTime, gameStarted, gameOver); // Update each order's timer
    }

    // Remove completed or expired orders
    this.orders = this.orders.filter((order) => !order.isCompleted);
  }

  // Draws all orders on the screen
  displayOrders() {
    if (!this.orders || this.orders.length === 0) {
      console.log("No orders to display.");
      return;
    }

    let x = 10;
    let y = 10;
    const spacing = 70;

    for (let i = 0; i < this.orders.length; i++) {
      const order = this.orders[i];
      console.log(`Displaying order at (${x}, ${y}):`, order.recipe);
      order.drawOrder(x, y);
      order.displayTimer(x + 160, y + 25);
      y += spacing;
    }
  }
  
  checkCompletion(playerDish) {
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].recipe === playerDish) {
                this.orders[i].isCompleted = true;
                this.orders.splice(i, 1); // Remove completed order
                console.log("Order completed!");
                
                return true;
            }
        }
        return false; 
}
}
window.OrderManager = OrderManager;
// OrderManager Class
class OrderManager {
  constructor(l,i) {
    this.orders = [];
    this.pointManager = l;
    this.level = i;
  }

  // Adds a new order to the list
  addOrder(recipe, customer) {
    if (!recipe || !customer) {
    console.error("Invalid recipe or customer!");
    return;
  }

  const recipeImage = recipeImages[recipe]; // Get the image for the recipe
  if (!recipeImage) {
    console.error(`No image found for recipe: ${recipe}`);
    return;
  }

  const newOrder = new Order(recipe, customer, recipeImage); // Pass the image to the order
  this.orders.push(newOrder);
  }
  
  addRandomOrder() {
    const { recipe, patience } = this.level.getRandomOrder();
    const customer = { patience }; // Create a customer object with patience
    this.orders.push(new Order(recipe, customer)); // Pass recipe and customer directly
    console.log(`Added Order: ${recipe}, Patience: ${patience}`);
  }

  // Updates all orders
  updateOrders(deltaTime, gameStarted, gameOver) {
     if (!gameStarted || gameOver) return; // Only update if the game is running

    this.orders.forEach(order => {
            order.updateTimer(deltaTime, gameStarted, gameOver);

            // Check if an order is completed
            if (order.status === "completed") {
                const points = order.calculatePoints();
                this.pointManager.addPoints(points); // Award points
                console.log(`Order completed! Awarded ${points} points.`);
            }
        });

        // Remove completed or expired orders
        this.orders = this.orders.filter(order => order.status === "active");
  }

  // Draws all orders on the screen
  displayOrders() {
    if (!this.orders || this.orders.length === 0) {
      console.log("No orders to display.");
      return;
    }

    const orderStartX = 10; // Starting X position
    const orderStartY = 20; // Starting Y position
    const orderWidth = 100; // Space between each order horizontally
    const timerOffsetY = 60; // Distance between the order image and the timer

    this.orders.forEach((order, index) => {
        const x = orderStartX + index * orderWidth; // Calculate X position for each order
        const y = orderStartY;

        // Draw the order image
        order.drawOrder(x, y);

        // Draw the timer directly below the order
        order.displayTimer(x, y + timerOffsetY);
    });
  }
  
  checkCompletion(foodItem) {
  for (let i = 0; i < this.orders.length; i++) {
      const order = this.orders[i];

      if (order.recipe === foodItem.food) {
        // Order matched
        console.log(`Order matched for: ${foodItem.food}`);
        const points = order.calculatePoints();
        this.orders.splice(i, 1); // Remove the order
        this.pointManager.addPoints(points); // Award points
        return true;
      }
    }

    console.log("No matching order found for:", foodItem.food);
    return false; // No order matched
  }
}
window.OrderManager = OrderManager;
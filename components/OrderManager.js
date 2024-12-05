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

  const recipeImage = recipeImages[recipe]; 
  if (!recipeImage) {
    console.error(`No image found for recipe: ${recipe}`);
    return;
  }

  const newOrder = new Order(recipe, customer, recipeImage); 
  this.orders.push(newOrder);
  }
  
  addRandomOrder() {
    const { recipe, patience } = this.level.getRandomOrder();
    const customer = { patience };
    this.orders.push(new Order(recipe, customer)); 
    console.log(`Added Order: ${recipe}, Patience: ${patience}`);
  }

  // Updates all orders
  updateOrders(deltaTime, gameStarted, gameOver) {
     if (!gameStarted || gameOver) return; 

    this.orders.forEach(order => {
            order.updateTimer(deltaTime, gameStarted, gameOver);
            // Check if an order is completed
            if (order.status === "completed") {
                const points = order.calculatePoints();
                this.pointManager.addPoints(points); 
                console.log(`Order completed! Awarded ${points} points.`);
            }
        });
        this.orders = this.orders.filter(order => order.status === "active");
  }

  // Draws all orders on the screen
  displayOrders() {
    if (!this.orders || this.orders.length === 0) {
      console.log("No orders to display.");
      return;
    }

    const orderStartX = 10; 
    const orderStartY = 20; 
    const orderWidth = 100; 
    const timerOffsetY = 60; 

    this.orders.forEach((order, index) => {
        const x = orderStartX + index * orderWidth; 
        const y = orderStartY;

        order.drawOrder(x, y);
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
        this.orders.splice(i, 1); 
        this.pointManager.addPoints(points); 
        return true;
      }
    }
    console.log("No matching order found for:", foodItem.food);
    return false;
  }
}
window.OrderManager = OrderManager;

// Order Class
 class Order {
  constructor(recipe, customer) {
    this.recipe = recipe;
    this.customer = customer;
    this.isCompleted = false;
    this.timer = customer.patience;
    this.status = "active";
  }
  
  updateTimer(deltaTime, gameStarted, gameOver) {
    if (gameStarted && !gameOver && this.status === "active") {
     this.timer -= deltaTime / 1000; 
     if (this.timer <= 0) {
              this.timer = 0; 
              this.status = "expired"; 
     }
    }
  }

   Completed() {
        this.isCompleted = true;
        this.status = "completed";
    }
   
   calculatePoints(maxPoints = 100) {
        return Math.ceil((this.timer / this.customer.patience) * maxPoints);
    }

    displayTimer(x, y) {
        fill(0); 
        textSize(16); 
        textAlign(LEFT, CENTER); 
        text(`Time: ${Math.ceil(this.timer)}s`, x, y); 
    }

    drawOrder(x, y) {
        const imageSize = 50; 
        const recipeImage = recipeImages[this.recipe];

        if (recipeImage) {
            image(recipeImage, x, y, imageSize, imageSize);
        } else {
            fill(0);
            textSize(16);
            textAlign(LEFT, CENTER);
            text(`Order: ${this.recipe}`, x, y + 25);
        }
    }

}


window.Order = Order;

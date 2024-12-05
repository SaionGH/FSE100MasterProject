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
          this.timer -= deltaTime / 1000; // Decrease timer based on elapsed time
          if (this.timer <= 0) {
              this.timer = 0; // Prevent negative timer
              this.status = "expired"; // Mark the order as expired
          }
    }
  }

  // Decreases the timer each frame
   Completed() {
        this.isCompleted = true;
        this.status = "completed";
    }
   
   calculatePoints(maxPoints = 100) {
        // Points decrease proportionally to the remaining timer
        return Math.ceil((this.timer / this.customer.patience) * maxPoints);
    }

    displayTimer(x, y) {
        fill(0); // Black text
        textSize(16); // Set text size
        textAlign(LEFT, CENTER); // Align text to the left
        text(`Time: ${Math.ceil(this.timer)}s`, x, y); // Display the remaining time
    }

    drawOrder(x, y) {
        const imageSize = 50; // Set the size of the image

        // Get the image associated with the recipe
        const recipeImage = recipeImages[this.recipe];

        if (recipeImage) {
            image(recipeImage, x, y, imageSize, imageSize);
        } else {
            fill(0); // Black text
            textSize(16);
            textAlign(LEFT, CENTER);
            text(`Order: ${this.recipe}`, x, y + 25);
        }
    }

}


window.Order = Order;
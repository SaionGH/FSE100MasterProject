// Level Class
class Level {
  constructor(mapData, p, orderManager, orderList, patienceList) {
    console.log("Level Constructor");
    this.rows = mapData.length;
    this.cols = mapData[0].length;
    this.tileWidth = width / this.rows;
    this.tileHeight = height / this.columns;
    this.grid = [];
    this.buttonX = width / 2 - 100;  // Button's X position (centered)
    this.buttonY = 20;              // Button's Y position (top of the screen)
    this.buttonWidth = 200;         // Button width
    this.buttonHeight = 50;  
    this.player = p
    this.orderManager = orderManager;
    this.orderList = orderList; 
    this.patienceList = patienceList; 
    this.createLevel(mapData);
  }
  
  getRandomOrder() {
    if (!this.orderList || this.orderList.length === 0) {
    console.error("Order list is empty or undefined.");
    return null;
  }
  if (!this.patienceList || this.patienceList.length === 0) {
    console.error("Patience list is empty or undefined.");
    return null;
  }

  const recipe = this.orderList[Math.floor(Math.random() * this.orderList.length)];
  const patience = this.patienceList[Math.floor(Math.random() * this.patienceList.length)];
  return { recipe, patience };
  }

  // Creates the level grid with tiles based on mapData
  createLevel(mapData) {
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.cols; j++) {
        let tileCode = mapData[j][i];
        switch (tileCode) {
          case "Floor":
            this.grid[i][j] = new FloorTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "Counter":
            this.grid[i][j] = new CounterTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "CuttingBoard":
            this.grid[i][j] = new StationTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              "cutting"
            );
            break;
          case "Grill":
            this.grid[i][j] = new StationTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              "cooking"
            );
            break;
          case "Drink":
            this.grid[i][j] = new DrinkMachineTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "Delivery":
            this.grid[i][j] = new DeliveryStationTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              this.orderManager
            );
            break;
          case "Cups":
            this.grid[i][j] = new CupDispensorTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "Plates":
            this.grid[i][j] = new PlateDispensorTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "Trash":
            this.grid[i][j] = new TrashTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
          case "Bun":
          case "Cheese":
          case "MeatPatty":
          case "Lettuce":
          case "Salmon":
          case "Seaweed":
          case "Rice":
          case "Cucumber":
          case "Tomato":
          case "Noodles":
          case "MeatBalls":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          // Add more cases as needed
          default:
            this.grid[i][j] = new FloorTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth
            );
            break;
        }
      }
    }
  }

  // Draws the level grid
  display() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j].draw();
      }
    }
    this.player.display();
    if (this.orderManager) {
      this.orderManager.displayOrders();
    }
  }

  update(deltaTime, gameStarted, gameOver) {
    // Update player movement
    if (this.player) {
      this.player.move(this);
    }else {
        console.error("Player is null in Level.update!");
    }

    // Update the order manager (timers, order states)
    if (this.orderManager) {
      this.orderManager.updateOrders(deltaTime, gameStarted, gameOver);
    }
  }
  
  displayTiming() {
  fill(0); // White text color
  textSize(32); // Set text size
  textAlign(RIGHT, BOTTOM); // Align text to the right and bottom
  text(`Time Left: ${Math.ceil(time)}s`, width - 10, height - 10); // Position at the bottom-right with a margin                                                              

  if (time <= 30 && !gameOver) { // Ensure clock is only shown during gameplay
    // Draw a circular clock to represent time left
    let clockRadius = 100; // Set the clock size
    let centerX = width / 2; // X position of the clock center
    let centerY = height / 2; // Y position of the clock center

    // Draw the circle representing the clock's outer boundary
    stroke(211);
    strokeWeight(4);
    noFill();
    ellipse(centerX, centerY, clockRadius * 2, clockRadius * 2);

    // Calculate the angle for the clock's hand based on remaining time
    let angle = map(time, 0, gameDuration, -HALF_PI, TWO_PI - HALF_PI); // Start at the top (-HALF_PI) and go clockwise

    // Draw the clock's hand (representing time left)
    let handLength = clockRadius - 10; // Length of the clock hand
    let handX = centerX + handLength * cos(angle); // X position of hand's end
    let handY = centerY + handLength * sin(angle); // Y position of hand's end

    stroke(255, 0, 0); // Red color for the clock hand
    line(centerX, centerY, handX, handY);
    
    stroke(0); // Reset stroke color
    strokeWeight(1); // Reset stroke weight
  }
  
  }
  
  drawDashboardButton() {
    fill("white");
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);  // Button rectangle
    fill("black");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Dashboard", this.buttonX + this.buttonWidth / 2, this.buttonY + this.buttonHeight / 2);  // Button text
  }

  // Check if the mouse is over the button, and trigger the dashboard change
  checkButtonClick() {
    if (mouseX >= this.buttonX && mouseX <= this.buttonX + this.buttonWidth &&
        mouseY >= this.buttonY && mouseY <= this.buttonY + this.buttonHeight) {
      page = "dashboard";  // Switch to the dashboard screen, update your page variable or state management
    }
  }
  getTileAt(x, y) {
    //console.log("getTileAt", x, y)
    const row = Math.floor(x / this.tileWidth);
    const col = Math.floor(y / this.tileWidth);
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      return this.grid[row][col];
    }
    return null; // Return null if the coordinates are out of bounds
  }
}
let map1 = [
  [
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Lettuce",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "MeatPatty",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Cheese",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Bun",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Plates",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Delivery",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Delivery",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
];
let map2 = [
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Trash",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "MeatPatty",
    "Lettuce",
    "Cheese",
    "Bun",
  ],
  [
    "Floor",
    "Floor",
    "Drink",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Counter",
    "Counter",
    "Plates",
    "Delivery",
    "Delivery",
    "Floor",
    "Floor",
  ],
];
let map3 = [
  [
    "Counter",
    "Lettuce",
    "Bun",
    "Counter",
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Cheese",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "MeatPatty",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Drink",
    "Floor",
    "Floor",
    "Salmon",
    "Seaweed",
    "Rice",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Counter",
    "Delivery",
    "Delivery",
    "Plates",
    "Floor",
    "Floor",
    "CuttingBoard",
    "Counter",
    "Counter",
  ],
];
let map4 = [
  [
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Delivery",
    "Delivery",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Counter",
    "Counter",
    "Counter",
    "Plates",
    "Floor",
    "Floor",
    "Plates",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Drink",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Lettuce",
    "Floor",
    "Floor",
    "Salmon",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "MeatPatty",
    "Floor",
    "Floor",
    "Seaweed",
    "Floor",
    "Floor",
    "Trash",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Cheese",
    "Floor",
    "Floor",
    "Rice",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Bun",
    "Floor",
    "Floor",
    "Cucumber",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
];
let map5 = [
  [
    "Counter",
    "Counter",
    "MeatPatty",
    "Lettuce",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Cheese",
    "Cucumber",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Bun",
    "Salmon",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Drink",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Plates",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Delivery",
  ],
  [
    "CuttingBoard",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Delivery",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Noodles",
    "Rice",
    "Floor",
    "Floor",
    "Floor",
    "Plates",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Tomato",
    "Seaweed",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Counter",
  ],
];
let map6 = [
  [
    "Counter",
    "Counter",
    "Noodles",
    "Tomato",
    "MeatBalls",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Cups",
    "Floor",
    "Floor",
    "Cheese",
    "Lettuce",
    "Seaweed",
    "Salmon",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Drink",
    "Floor",
    "Floor",
    "Bun",
    "MeatPatty",
    "Cucumber",
    "Rice",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Plates",
    "Delivery",
    "Delivery",
    "Plates",
    "Floor",
    "Floor",
    "Floor",
  ],
];

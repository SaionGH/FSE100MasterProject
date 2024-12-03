// Level Class
class Level {
   
  constructor(mapData, p, orderManager) {
    console.log("Level Constructor");
    this.rows = mapData.length;
    this.cols = mapData[0].length;
    this.tileWidth = width / this.rows;
    this.tileHeight = height / this.columns;
    this.grid = [];
    this.createLevel(mapData);
    this.player = p
    this.orderManager = orderManager;
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
              this.tileWidth
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
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Cheese":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "MeatPatty":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Lettuce":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Salmon":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Seaweed":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Rice":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Cucumber":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Tomato":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
          case "Noodles":
            this.grid[i][j] = new FoodTile(
              i * this.tileWidth,
              j * this.tileWidth,
              this.tileWidth,
              tileCode
            );
            break;
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
    // Draw the level grid
    fill(100); // Example level background
    rect(0, 0, width, height); // Background rectangle
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j].draw();
      }
    }
    if (this.player) {
      this.player.display();
    }

    // Draw the orders
    if (this.orderManager) {
      this.orderManager.displayOrders();
    }
  }

   update(deltaTime, gameStarted, gameOver) {
    // Update player movement
    if (this.player) {
      this.player.move();
    }

    // Update the order manager (timers, order states)
    if (this.orderManager) {
      this.orderManager.updateOrders(deltaTime, gameStarted, gameOver);
    }
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
let mapData = [
     ['C', 'F', 'C', 'C', 'C', 'C', 'C', 'C'],
     ['C', 'F', 'F', 'F', 'F', 'F', 'F', 'C'],
     ['C', 'F', 'S_C', 'F', 'F', 'S_K', 'F', 'C'],
     ['C', 'F', 'F', 'F', 'F', 'F', 'F', 'C'],
     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
   ];
  
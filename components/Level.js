// Level Class
class Level {
  constructor(mapData) {
    console.log("Level Constructor");
    this.rows = mapData.length;
    this.cols = mapData[0].length;
    this.tileWidth = width / this.rows;
    this.tileHeight = height / this.columns;
    this.grid = [];
    this.createLevel(mapData);
    this.player = new PlayerController(width / 2, height / 2);
    this.buttonX = width / 2 - 100;  // Button's X position (centered)
    this.buttonY = 20;              // Button's Y position (top of the screen)
    this.buttonWidth = 200;         // Button width
    this.buttonHeight = 50;  
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
  }

  update() {
    this.player.move(this);
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
    console.log("getTileAt", x, y)
    const row = Math.floor(x / this.tileWidth);
    const col = Math.floor(y / this.tileWidth);
    console.log(row, col)
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      return this.grid[row][col];
    }
    return null; // Return null if the coordinates are out of bounds
  }
}

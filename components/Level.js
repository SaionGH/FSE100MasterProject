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
  displayTiming() {
  // Display the global timer as text
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  text(`Time Left: ${Math.ceil(time)}s`, width / 2, 20);

  // Draw a circular clock to represent time left
  let clockRadius = 100; // Set the clock size
  let centerX = width / 2; // X position of the clock center
  let centerY = height / 2; // Y position of the clock center

  // Draw the circle representing the clock's outer boundary
  stroke(255);
  strokeWeight(4);
  fill(211, 211, 211); 
  ellipse(centerX, centerY, clockRadius * 2, clockRadius * 2);

  // Calculate the angle for the clock's hand based on remaining time
  let angle = map(time, 0, gameDuration, -HALF_PI, TWO_PI - HALF_PI); // Start at the top (-HALF_PI) and go clockwise

  // Draw the clock's hand (representing time left)
  let handLength = clockRadius - 10; // Length of the clock hand
  let handX = centerX + handLength * cos(angle); // X position of hand's end
  let handY = centerY + handLength * sin(angle); // Y position of hand's end

  stroke(255, 0, 0); // Red color for the clock hand
  line(centerX, centerY, handX, handY); 
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

// Level Class
class Level {
  constructor(mapData) {
    this.rows = mapData.length;
    this.cols = mapData[0].length;
    this.tileWidth = width/this.rows;
    this.tileHeight= height/this.columns;
    this.grid = [];
    this.createLevel(mapData);
  }

  // Creates the level grid with tiles based on mapData
  createLevel(mapData) {
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.cols; j++) {
        let tileCode = mapData[j][i];
        switch (tileCode) {
          case 'Floor':
            this.grid[i][j] = new FloorTile(i * this.tileWidth, j * this.tileWidth, this.tileWidth);
            break;
          case 'Counter':
            this.grid[i][j] = new CounterTile(i * this.tileWidth, j * this.tileWidth, this.tileWidth);
            break;
          case 'CuttingBoard':
            this.grid[i][j] = new StationTile(i * this.tileWidth, j * this.tileWidth, this.tileWidth, 'cutting');
            break;
          case 'Grill':
            this.grid[i][j] = new StationTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, 'cooking');
            break;
          case 'Drink':
            this.grid[i][j] = new DrinkMachineTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth);
            break;
          case 'Delivery':
            this.grid[i][j] = new DeliveryStationTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth);
            break;
          case 'Cups':
            this.grid[i][j] = new CupDispensorTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth);
            break;
          case 'Plates':
            this.grid[i][j] = new PlateDispensorTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth);
            break;
          case 'Trash':
            this.grid[i][j] = new TrashTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth);
            break;
          case 'Bun':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Cheese':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'MeatPatty':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Lettuce':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Salmon':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Seaweed':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Rice':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Cucumber':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Tomato':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'Noodles':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          case 'MeatBalls':
            this.grid[i][j] = new FoodTile(i * this.tileWidth, j *this.tileWidth, this.tileWidth, tileCode);
            break;
          // Add more cases as needed
          default:
            this.grid[i][j] = new FloorTile(i * this.tileWidth, j * this.tileWidth, this.tileWidth);
            break;
            
        }
        
      }
    }
  }

  // Draws the level grid
  drawLevel() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j].draw();
      }
    }
  }
}

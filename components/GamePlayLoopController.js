class GamePlayLoopController{
  constructor() {
    this.level = null;
    this.player = new PlayerController(width / 2, height / 2 -100, this.level);
    this.pointManager = new PointManager();
    this.orderManager = new OrderManager(this.pointManager, this.level);
    this.recipes = null;
    this.customers = null;
    this.gameScreen = 1;
    this.gameStarted = false;
    this.orderInterval = 0;
    this.buttons = [];
  }
  setup(){
    this.orderManager.level = this.level;
    this.orderManager.pointManager = this.pointManager;
  }
  gamePlay() {
   background(0); 
    this.orderManager.orderList = this.level.orderList;
    if (this.level) {
      this.level.display(); 
    }

  if (this.level) {
    this.level.update(deltaTime, this.gameStarted, this.gameOver); 
  }
    
  if (this.level.displayTiming()) {
    this.level.displayTiming();
  }
  }
  draw() {
    this.startGame();
    this.gamePlay();
    if (this.gameStarted) {
        fill(0); // White text
        textSize(20);
        textAlign(LEFT, BOTTOM);
        text(`Score: ${this.pointManager.currentPoints}`, 10, height - 10);
    }
  }
  checkGameOver() {
    this.stopGame();
  } 
  startGame() {
    if (!this.level) {
      this.level = new Level(map1, this.player, this.orderManager); 
    }
    this.gameStarted = true;
  }

  stopGame() {
    this.gameStarted = false;
    if (this.orderInterval) {
      clearInterval(this.orderInterval);
    }
  }  
}

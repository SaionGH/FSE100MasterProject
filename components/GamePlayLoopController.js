
// Main Sketch File
class GamePlayLoopController{
  constructor() {
    this.level = null;
    this.player = new PlayerController(width / 2, height / 2);
    this.orderManager = new OrderManager();
    this.pointManager = new PointManager();
    this.recipes = ["Pizza", "Burger", "Salad"];
    this.customers = [{ patience: 30 }, { patience: 45 }, { patience: 40 }];
    this.gameScreen = 1;
    this.gameStarted = false;
    this.orderInterval = 0;
    this.buttons = [];
    this.orders = this.orderManager.orders;
  }

//  preload() {
//   // Load images, sprites, and other assets if needed
//   // TODO: Load assets
// }

  setup() {
   createCanvas(600, 600); // Set the canvas size
   this.buttons.push(new Button(50, 50, 120, 50, "Button 1", () => { gameScreen = 1; }));
   this.buttons.push(new Button(50, 120, 120, 50, "Button 2", () => { gameScreen = 2; }));
   this.buttons.push(new Button(50, 190, 120, 50, "Button 3", () => { gameScreen = 3; }));
   this.buttons.push(new Button(50, 260, 120, 50, "Button 4", () => { gameScreen = 4; }));
   this.buttons.push(new Button(50, 330, 120, 50, "Button 5", () => { gameScreen = 5; }));
   this.buttons.push(new Button(50, 400, 120, 50, "Button 6", () => { gameScreen = 6; }));

   // Initialize the level
   // MVP 2: Build the Level class and initialize it here
   //gameStart();

//   // Initialize the game UI
//   // MVP 5: Build the GameUI class and initialize it here
//   //gameUI = new GameUI();
 }

  gamePlay() {
   background(0); // Clear the canvas
    if (this.level) {
    this.level.display(); // Call Level's display
  }

  if (this.level) {
    this.level.update(deltaTime, this.gameStarted, this.gameOver); // Call Level's update logic
  }
  


    
    
  // Check for level completion or game-over conditions
   
   if(timer <= 0){
    stopGame();
   }
    
  



//   //// Draw the game UI
//   //// MVP 5: Ensure GameUI's drawUI method works
//   //gameUI.drawUI();
 }

//  menuScreen() {
//   background(220);

//   // Draw all buttons
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].display();
//   }
// }


  draw() {
        this.startGame();
        this.gamePlay();
}
  checkGameOver() {
    this.stopGame();
  }
    addRandomOrder() {
    let randomRecipe = this.recipes[Math.floor(Math.random() * this.recipes.length)];
    let randomCustomer = this.customers[Math.floor(Math.random() * this.customers.length)];
    this.orderManager.addOrder(randomRecipe, randomCustomer);

    console.log("Order added:", randomRecipe, randomCustomer);
  }
  

   
    startGame() {
      if (!this.level) {
        this.level = new Level(map1, this.player, this.orderManager); // Example: Use map1 for the first level
      }
      this.gameStarted = true;
  }

   stopGame() {
    this.gameStarted = false;

    // Stop generating orders
    if (this.orderInterval) {
      clearInterval(this.orderInterval);
      console.log("Game stopped and order generation halted.");
    }
  }
}
window.GamePlayLoopController = GamePlayLoopController;

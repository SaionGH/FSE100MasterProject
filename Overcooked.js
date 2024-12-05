//////gameplayer Variables/////////
let playerScore = 0;
const gameDuration = 300;

const level1Orders = ["Lettuce","Bun","Cheese","MeatPatty"];
const level2Orders = ["Lettuce","Bun","Cheese","MeatPatty"];
const level3Orders = ["Seaweed", "Salmon", "Rice","Lettuce","Bun","Cheese","MeatPatty"];
const level4Orders = ["Seaweed", "Salmon", "Rice","Lettuce","Bun","Cheese","MeatPatty","Cucumber"];
const level5Orders = ["Seaweed", "Salmon", "Rice","Lettuce","Bun","Cheese","MeatPatty","Cucumber","Tomato"];
const level6Orders = ["Seaweed", "Salmon", "Rice","Lettuce","Bun","Cheese","MeatPatty","Cucumber","Tomato","Noodles"];

const level1Patience = [30, 30, 40];
const level2Patience = [20, 25, 30, 40];
const level3Patience = [20, 30, 35, 40];
const level4Patience = [20, 25, 35, 40];
const level5Patience = [20, 25, 30, 35];
const level6Patience = [20, 25, 30];

//////////////////////////////////
let gameplayCont;
let orderInterval = 100;
let gameStarted = false; // Variable to track if the game has started
let selectedLevel = 0; // Variable to track the selected level
let level = null;
let playerName = ""; // Variable to store the player's name
let input; // Input element for the player's name
let globalVolume = 0.3;
let submitButton; // Button element for submission
let showGameOptions = false; // Variable to track if game options should be shown
let page = 0; // Track which page is currently displayed
let showInstructions = false;
let gameOver = false; // Variable to track game over status
 // Initialize player score
let time; // Variable to track time remaining
 // Game duration in seconds
let scoreboard = []; // Array to store player names and scores

let img, img1, img2, img3;
let buns_image, cheese_image, meatpatty_image, lettuce_image, salmon_image;
let seaweed_image, rice_image, cucumber_image, tomato_image, noodles_image;
let meatballs_image, juice_machine, cup_image, cutting_board, trash_can;
let frying_pan, plates_image;

const recipeImages = {
    "Burger": img,
    "Grill": img1,
    "In-N-Out Burger": img2,
    "Pizza": img3,
    "Bun": buns_image,
    "Cheese": cheese_image,
    "MeatPatty": meatpatty_image,
    "Lettuce": lettuce_image,
    "Salmon": salmon_image,
    "Seaweed": seaweed_image,
    "Rice": rice_image,
    "Cucumber": cucumber_image,
    "Tomato": tomato_image,
    "Noodles": noodles_image,
    "Meatballs": meatballs_image,
    "Juice Machine": juice_machine,
    "Cup": cup_image,
    "Cutting Board": cutting_board,
    "Trash Can": trash_can,
    "Frying Pan": frying_pan,
    "Plates": plates_image
};


function saveData() {
  localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
  localStorage.setItem("playerName", playerName);
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("selectedLevel", selectedLevel);
}
function loadData() {
  // Load scoreboard
  const savedScoreboard = localStorage.getItem("scoreboard");
  if (savedScoreboard) {
    scoreboard = JSON.parse(savedScoreboard);
  }
  // Load player name and score
  playerName = localStorage.getItem("playerName") || "";
  playerScore = parseInt(localStorage.getItem("playerScore")) || 100;
  // Load selected level
  selectedLevel = parseInt(localStorage.getItem("selectedLevel")) || 0;
}

function clearData() {
  // Clear all data from localStorage
  localStorage.removeItem("scoreboard");
  localStorage.removeItem("playerName");
  localStorage.removeItem("playerScore");
  localStorage.removeItem("selectedLevel");
  // Reset game-related variables to their defaults
  playerName = "";
  playerScore = 0;
  selectedLevel = 0;
  scoreboard = [];
  // Optionally reset other variables if necessary (like the game state, timer, etc.)
  gameStarted = false;
  gameOver = false;
  time = gameDuration;
  page = 0; // Go back to the main menu after clearing data
  // Display a message to inform the user (optional)
  alert("Game data cleared successfully!");
}
function handleClearData() {
  const userConfirmed = confirm("Are you sure you want to clear all data?");
  if (userConfirmed) {
    clearData();
  } // Call the function to clear data
}
function handleViewScoreboard() {
  const confirmTransition = confirm("Are you sure you want to view the scoreboard?");
  if (confirmTransition) {
    page = 7; // Navigate to the scoreboard
  }
}

function setup() {
  createCanvas(600, 600);

  let clearDataButton = createButton("Clear Data");
  //clearDataButton.position(490, 10); // Adjust the position as needed

  clearDataButton.style("background-color", "red");
  clearDataButton.style("color", "white"); // Text color
  clearDataButton.style("border", "none"); // Remove border
  clearDataButton.style("padding", "10px"); // Add some padding
  clearDataButton.style("font-size", "16px"); // Font size
  clearDataButton.style("border-radius", "5px");
  clearDataButton.mousePressed(handleClearData);// Rounded corners
  // Add event handler for button press
  let viewScoreboardButton = createButton("View Scoreboard");
  viewScoreboardButton.position(100, 620); // Adjust position as needed
  viewScoreboardButton.style("background-color", "green");
  viewScoreboardButton.style("color", "white");
  viewScoreboardButton.style("font-size", "16px");
  viewScoreboardButton.style("padding", "10px");
  viewScoreboardButton.style("border-radius", "5px");
  viewScoreboardButton.mousePressed(handleViewScoreboard);

  // Store the button reference globally for toggling visibility later
  loadData();
  img = loadImage("images/clearburger.png");
  img1 = loadImage("images/grill.png");
  grillSound = loadSound("sounds/food-sizzling-76022.mp3");
  img2 = loadImage("images/in_and_out_burger.png");
  img3 = loadImage("images/pizza.png");
  buns_image = loadImage("images/bun.png");
  cheese_image = loadImage("images/cheese.png");
  meatpatty_image = loadImage("images/meatpatty.png");
  lettuce_image = loadImage("images/lettuce.png");
  salmon_image = loadImage("images/salmon.png");
  seaweed_image = loadImage("images/seaweed.png");
  rice_image = loadImage("images/rice.png");
  cucumber_image = loadImage("images/cucumber.png");
  tomato_image = loadImage("images/tomato.png");
  noodles_image = loadImage("images/noodles.png");
  meatballs_image = loadImage("images/meatball.png");
  juice_machine = loadImage("images/juicemachine.png");
  cup_image = loadImage("images/cup.png");
  cutting_board = loadImage("images/Cuttingboard.png");
  trash_can = loadImage("images/Trashcan.png");
  frying_pan = loadImage("images/fryingPan.png");
  plates_image = loadImage("images/plate.png");
  
  recipeImages["Burger"] = img;
  recipeImages["Grill"] = img1;
  recipeImages["In-N-Out Burger"] = img2;
  recipeImages["Pizza"] = img3;
  recipeImages["Bun"] = buns_image;
  recipeImages["Cheese"] = cheese_image;
  recipeImages["MeatPatty"] = meatpatty_image;
  recipeImages["Lettuce"] = lettuce_image;
  recipeImages["Salmon"] = salmon_image;
  recipeImages["Seaweed"] = seaweed_image;
  recipeImages["Rice"] = rice_image;
  recipeImages["Cucumber"] = cucumber_image;
  recipeImages["Tomato"] = tomato_image;
  recipeImages["Noodles"] = noodles_image;
  recipeImages["Meatballs"] = meatballs_image;
  recipeImages["Juice Machine"] = juice_machine;
  recipeImages["Cup"] = cup_image;
  recipeImages["Cutting Board"] = cutting_board;
  recipeImages["Trash Can"] = trash_can;
  recipeImages["Frying Pan"] = frying_pan;
  recipeImages["Plates"] = plates_image;
  
  grillSound.setVolume(globalVolume);

  // Create an input field for the player's name
  input = createInput("");
  input.position(200, 350); // Position the input field
  input.hide(); // Initially hide the input field
  // Create a submit button
  submitButton = createButton("Submit!");
  submitButton.position(200, 400);
  submitButton.style("background-color", "red"); // Red background
  submitButton.style("color", "white"); // White text
  submitButton.style("font-size", "20px");
  submitButton.style("padding", "10px");
  submitButton.style("font-weight", "bold");
  submitButton.hide(); // Initially hide the button
  submitButton.mousePressed(() => {
    submitName(submitButton);
  }); // Set up button action
  gameplayCont = new GamePlayLoopController();
}
function draw() {
  background(0);
  if (gameOver) {
    page = 5;
  }
  if (page === 0) {
    displayMainMenu();
  } else if (page === 1) {
    displayLevelSelection();
  } else if (page === 2) {
    displayNameEntry(submitButton);
  } else if (page === 3) {
    displayGameOptions();
  } else if (page === 4) {
    displayInstructions();
  } else if (page === 5) {
    displayGameOver();
  // Show the timeout screen
  } else if (page === 6) {
    displayDashboard(); // Show the dashboard
  } else if (page === 7) {
  displayScoreboard();
} else if (page === 8) {
    gameplayCont.draw();
  }
  // Count down the timer if the game is in progress
    if (gameStarted && page === 8) {
        time -= deltaTime / 1000; // Decrease timer by elapsed time in seconds
        if (time <= 0) {
            gameOver = true; // Set game over status when time runs out
        }
    }
}

function checkGameOver() {
  //if (playerScore <= 0) {
   // gameOver = true; // Set game over status
   // return; // Go to timeout screen
 // }
}

function mousePressed() {
  // Check if game over and on Game Over page (page 5)

  
  // Main menu buttons
  console.log({ page, mouseX, mouseY });
  if (
    page === 0 &&
    mouseX >= 30 &&
    mouseX <= 80 &&
    mouseY >= 350 &&
    mouseY <= 395
  ) {
    grillSound.play();
    page = 2; // Go to level selection page
  }
  if (
    page === 0 &&
    mouseX >= 30 &&
    mouseX <= 80 &&
    mouseY >= 450 &&
    mouseY <= 495
  ) {
    //grillSound.play();
    showInstructions = true;
    page = 4; // Show instructions when P2 is clicked
  }
  if (
    page === 1 &&
    mouseX >= 30 &&
    mouseX <= 80 &&
    mouseY >= 20 &&
    mouseY <= 65
  ) {
    //grillSound.play();
    page = 0; // Go to level selection page
  }
  if (
    showInstructions &&
    mouseX >= 30 &&
    mouseX <= 80 &&
    mouseY >= 20 &&
    mouseY <= 65
  ) {
    //grillSound.play();
    showInstructions = false;
    page = 0; // Go back to game options page
  }
  // Check for level selection
  if (page === 1) {
    for (let i = 1; i <= 6; i++) {
      let squareSize = 150; // Size of the square
      let spacing = 20; // Spacing between squares
      let startX = 150 + ((i - 1) % 2) * (squareSize + spacing); // X position
      let startY = 50 + Math.floor((i - 1) / 2) * (squareSize + spacing); // Y position
      // Check if the mouse is over the square
      if (
        mouseX >= startX &&
        mouseX <= startX + squareSize &&
        mouseY >= startY &&
        mouseY <= startY + squareSize
      ) { 
        if (i === 1) {
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map1, gameplayCont.player, orderManager,level1Orders, level1Patience);
          gameplayCont.player.level = gameplayCont.level;
          startGame(); 
        } else if (i === 2) {
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map2, gameplayCont.player, orderManager,level2Orders, level2Patience); 
          gameplayCont.player.level = gameplayCont.level;
          startGame(); 
        } else if (i === 3) {
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map3, gameplayCont.player, orderManager,level3Orders,level3Patience); 
          gameplayCont.player.level = gameplayCont.level;
          startGame();  
        } else if (i === 4) {
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map4, gameplayCont.player, orderManager,level4Orders,level4Patience); 
          gameplayCont.player.level = gameplayCont.level;
          startGame(); 
        } else if (i === 5) { 
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map5, gameplayCont.player, orderManager,level5Orders,level5Patience); 
          gameplayCont.player.level = gameplayCont.level;
          startGame(); 
        } else if (i === 6) {
          const orderManager = new OrderManager(); // Create a new OrderManager instance
          gameplayCont.orderManager = orderManager;
          gameplayCont.level = new Level(map6, gameplayCont.player, orderManager,level6Orders,level6Patience); 
          gameplayCont.player.level = gameplayCont.level;
          startGame(); 
        }
        //grillSound.play();
        selectedLevel = i;
        console.log("Level " + selectedLevel + " selected!");
        time = gameDuration; // Reset timer to the game duration
        gameStarted = true; 
        page = 8; // Go to name entry page
      }
    }
  }
  // Check for game option selection
  if (page === 3) {
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 450 && mouseY <= 500) {
      //grillSound.play();
      console.log("One Player selected");
      page = 1; // Go to dashboard page
    }
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 510 && mouseY <= 560) {
      //grillSound.play();
      console.log("Two Players selected");
      page = 1; // Go to dashboard page
    }
  }
  // Check if user wants to return to the main menu (scoreboard page)
  if (gameOver && page === 5) {
    const buttonX = width / 2 - 100; // Button position X
    const buttonY = height / 2 + 100; // Button position Y
    const buttonWidth = 200; // Button width
    const buttonHeight = 50; // Button height

    // Check if mouse is within the button bounds
    if (
      mouseX >= buttonX &&
      mouseX <= buttonX + buttonWidth &&
      mouseY >= buttonY &&
      mouseY <= buttonY + buttonHeight
    ) {
      if (playerName && playerScore >= 0) {
        scoreboard.push({ name: playerName, score: gameplayCont.pointManager.currentPoints });
        
        saveData();
      }
      resetGame();
      gameOver = false;
      page = 7; // Transition to page 6 (leaderboard)
      console.log("Transitioning to Leaderboard (page 6).");
      return;
    }
  }
  // Check for game over

// Check if "Click to View Scoreboard" was clicked on the game over or dashboard screens
    if (page === 7) {
        const buttonX = width / 2 - 75;
        const buttonY = height - 100;
        const buttonWidth = 150;
        const buttonHeight = 40;

        if (
            mouseX >= buttonX &&
            mouseX <= buttonX + buttonWidth &&
            mouseY >= buttonY &&
            mouseY <= buttonY + buttonHeight
        ) {
            page = 0; // Go back to the main menu
            console.log("Returning to main menu.");
        }
        return; 
    }
}

function startGame() {
    gameStarted = true;
    gameplayCont.setup();
    gameplayCont.draw();
    gameplayCont.orderManager.addRandomOrder();
    gameplayCont.orderManager.addRandomOrder();
    orderInterval = setInterval(() => {
    gameplayCont.orderManager.addRandomOrder(); 
  }, 7000);
    // Start generating orders
  }

  function stopGame() {
    gameStarted = false;
    gameOver = true;
    // Stop generating orders
    
  }

  function resetGame() {
    gameplayCont.player.x = gameplayCont.startingPlayerX || width / 2; // Use a starting position or center
    gameplayCont.player.y = gameplayCont.startingPlayerY || height / 2;

  // Clear held items
    gameplayCont.player.held = null;
    gameplayCont.player.secondaryHeld = null;
    gameplayCont.pointManager.resetPoints();
    if (orderInterval) {
        clearInterval(orderInterval);
        orderInterval = null; // Reset to null to prevent accidental reuse
    }
    gameplayCont.orderManager.orders = [];

    // Reset game-related variables
    gameOver = false;
    gameStarted = false;
    page = 0; // Return to the main menu
    time = gameDuration;

    // Reset scoreboard input
    playerName = "";
    input.value("");
    console.log("Game reset successfully.");
  }





function keyPressed() {
    // Check if the '1' key is pressed
    if (key === '1') {
        cheatCompleteOrder();
    }
    if (key === "2") {
      gameplayCont.player.logHeldItem(); // Assuming `player` is an instance of `PlayerController`
    }
    
  
}
function cheatCompleteOrder() {
    if (gameplayCont.orderManager.orders.length > 0) {
        // Get the first order in the list
        const firstOrder = gameplayCont.orderManager.orders[0];

        if (firstOrder.status === "active") {
            firstOrder.Completed(); // Mark the order as completed

            // Award points for the order
            const points = firstOrder.calculatePoints();
            gameplayCont.pointManager.addPoints(points);

            console.log(`Cheat: Completed the first order! Awarded ${points} points.`);
        } else {
            console.log("Cheat: First order is not active.");
        }
    } else {
        console.log("Cheat: No orders to complete.");
    }
}




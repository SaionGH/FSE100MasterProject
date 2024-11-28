let img;
let img1;
let gameStarted = false; // Variable to track if the game has started
let selectedLevel = 0; // Variable to track the selected level
let level = null;
let playerName = ""; // Variable to store the player's name
let input; // Input element for the player's name
let submitButton; // Button element for submission
let showGameOptions = false; // Variable to track if game options should be shown
let page = 0; // Track which page is currently displayed
let showInstructions = false;
let gameOver = false; // Variable to track game over status
let playerScore = 100; // Initialize player score
let time; // Variable to track time remaining
const gameDuration = 30; // Game duration in seconds
let scoreboard = []; // Array to store player names and scores

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
  playerScore = 100;
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
function setup() {
  createCanvas(600, 600);
  let clearDataButton = createButton("Clear Data");
  clearDataButton.position(490, 10); // Adjust the position as needed
  // Style the button to make it red
  clearDataButton.style("background-color", "red");
  clearDataButton.style("color", "white"); // Text color
  clearDataButton.style("border", "none"); // Remove border
  clearDataButton.style("padding", "10px"); // Add some padding
  clearDataButton.style("font-size", "16px"); // Font size
  clearDataButton.style("border-radius", "5px"); // Rounded corners
  // Add event handler for button press
  clearDataButton.mousePressed(handleClearData);
  loadData();
  img = loadImage("images/clearburger.png");
  img1 = loadImage("images/grill.png");
  grillSound = loadSound("sounds/food-sizzling-76022.mp3");
  img2 = loadImage("images/in_and_out_burger.png");
  img3 = loadImage("images/pizza.png");
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
}
function draw() {
  background(0);
  if (gameOver) {
    displayGameOver();
    page = 7; // Skip other rendering when game is over
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
    displayGameOver(); // Show the timeout screen
  } else if (page === 6) {
    displayDashboard(); // Show the dashboard
  } else if (page === 7) {
    displayScoreboard(); // Show the scoreboard
  } else if (page === 8) {
    level.update();
    level.display();
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
  if (playerScore <= 0) {
    gameOver = true; // Set game over status
    page = 5; // Go to timeout screen
  }
}

function mousePressed() {
  // Check for game over
  if (gameOver) {
    if (gameOver && page === 5 || page === 6) {
      // Both game over and timeout screens
      // Add the player's score to the scoreboard if game is over
      if (playerName && playerScore >= 0) {
        scoreboard.push({ name: playerName, score: playerScore });
      }
      saveData();
      page = 7; // Go to scoreboard page
      return; // Exit function after going to scoreboard
    }
    // Other reset actions
    gameOver = false;
    playerScore = 100;
    selectedLevel = 0;
    page = 0;
    time = gameDuration;
  }
  // Check if "Click to View Scoreboard" was clicked on the game over or dashboard screens
  if (gameOver && page === 5) {
    const screenWidth = width;
    const screenHeight = height;

    // Check if the mouse click is anywhere on the game over screen
    if (mouseX >= 0 && mouseX <= screenWidth && mouseY >= 0 && mouseY <= screenHeight) {
      grillSound.play(); // Optional: Play a sound when the user clicks on the game over screen
      page = 7; // Go to the leaderboard page (page 7)
    }
  }
  if (
    (page === 6) &&
    mouseX >= width / 2 - 150 &&
    mouseX <= width / 2 + 150 &&
    mouseY >= height / 2 + 50 &&
    mouseY <= height / 2 + 100
  ) {
    page = 7; // Go to the scoreboard page
  }
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
    grillSound.play();
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
    grillSound.play();
    page = 0; // Go to level selection page
  }
  if (
    showInstructions &&
    mouseX >= 30 &&
    mouseX <= 80 &&
    mouseY >= 20 &&
    mouseY <= 65
  ) {
    grillSound.play();
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
          level = new Level(map1);
        } else if (i === 2) {
          level = new Level(map2);
        } else if (i === 3) {
          level = new Level(map3);
        } else if (i === 4) {
          level = new Level(map4);
        } else if (i === 5) {
          level = new Level(map5);
        } else if (i === 6) {
          level = new Level(map6);
        }
        grillSound.play();
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
      grillSound.play();
      console.log("One Player selected");
      page = 1; // Go to dashboard page
    }
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 510 && mouseY <= 560) {
      grillSound.play();
      console.log("Two Players selected");
      page = 1; // Go to dashboard page
    }
  }
  // Check if user wants to return to the main menu (scoreboard page)
  if (page === 7) {
    let buttonX = width / 2;
    let buttonY = height - 75;
    let buttonWidth = 300;
    let buttonHeight = 50;
    // Check if the mouse is within the button bounds
    if (
      mouseX >= buttonX - buttonWidth / 2 &&
      mouseX <= buttonX + buttonWidth / 2 &&
      mouseY >= buttonY - buttonHeight / 2 &&
      mouseY <= buttonY + buttonHeight / 2
    ) {
      grillSound.play(); // Optional: Play a sound when returning to menu
      page = 0; // Return to main menu
    }
    if (
      page === 6 &&
      mouseX >= width / 2 - 150 &&
      mouseX <= width / 2 + 150 &&
      mouseY >= height / 2 + 120 &&
      mouseY <= height / 2 + 170
    ) {
      clearData();
      page = 0;
    }
  }
}

let img;
let img1;
let gameStarted = false; // Variable to track if the game has started
let selectedLevel = 0; // Variable to track the selected level
let playerName = ''; // Variable to store the player's name
let input; // Input element for the player's name
let submitButton; // Button element for submission
let showGameOptions = false; // Variable to track if game options should be shown
let page = 0; // Track which page is currently displayed
let showInstructions = false;
let gameOver = false; // Variable to track game over status
let playerScore = 100; // Initialize player score
let timer; // Variable to track time remaining
const gameDuration = 30; // Game duration in seconds
let scoreboard = []; // Array to store player names and scores

function setup() {
    createCanvas(600, 600);
    img = loadImage('clearburger.png');
    img1 = loadImage('grill.png');
    grillSound = loadSound('food-sizzling-76022.mp3');
    img2 = loadImage('amirali-mirhashemian-sc5sTPMrVfk-unsplash-removebg-preview.png');
    img3 = loadImage('julian-rojas-dattwyler-LppAkC7s6u4-unsplash__1_-removebg-preview.png');
    
    // Create an input field for the player's name
    input = createInput('');
    input.position(200, 350); // Position the input field
    input.hide(); // Initially hide the input field

    // Create a submit button
    submitButton = createButton('Submit!');
    submitButton.position(200, 400);
    submitButton.style('background-color', 'red'); // Red background
    submitButton.style('color', 'white'); // White text
    submitButton.style('font-size', '20px');
    submitButton.style('padding', '10px');
    submitButton.style('font-weight', 'bold');
    submitButton.hide(); // Initially hide the button
    submitButton.mousePressed(submitName); // Set up button action
}

function draw() {
    background(0);
    
    if (gameOver) {
        displayGameOver();
        return; // Skip other rendering when game is over
    }

    if (page === 0) {
        displayMainMenu();
    } else if (page === 1) {
        displayLevelSelection();
    } else if (page === 2) {
        displayNameEntry();
    } else if (page === 3) {
        displayGameOptions();
    } else if (page === 4) {
        displayInstructions();
    } else if (page === 5) {
        displayTimeoutScreen(); // Show the timeout screen
    } else if (page === 6) {
        displayDashboard(); // Show the dashboard
    } else if (page === 7) {
        displayScoreboard(); // Show the scoreboard
    }

    // Count down the timer if the game is in progress
    if (gameStarted) {
        timer -= deltaTime / 1000; // Decrease timer by elapsed time in seconds
        if (timer <= 0) {
            gameOver = true; // Set game over status when time runs out
        }
    }
}

function displayGameOver() {
    background(0);
    fill('white');
    textSize(50);
    textAlign(CENTER);
    text("Time out!", 100, 120, 400, 70);
    text("Game", 100, 160, 400, 70);
    text("Over!", 100, 210, 400, 70);
    textSize(30);
    text("Your Score: " + playerScore, width / 2, height / 2 + 40);
    text("Click to View Scoreboard", width / 2, height / 2 + 70);
     gameOver = true;
}

function displayTimeoutScreen() {
    background(0);
    fill('white');
    textSize(50);
    textAlign(CENTER);
    text("TIME OUT!", width / 2, height / 2 - 20);
    textSize(30);
    text("Game Over!", width / 2, height / 2 + 20);
    text("Click to View Scoreboard", width / 2, height / 2 + 70);
}

function displayDashboard() {
    background(0);
    fill('grey');
    textSize(40);
    textAlign(CENTER);
    text("Player Name: " + playerName, width / 2, height / 2 - 20);
    
    fill('green');
    textSize(50);
    text("Score: " + playerScore, width / 2, height / 2 + 20);
    
    fill('white');
    textSize(30);
    text("Click to View Scoreboard", width / 2, height / 2 + 70);
}

function displayScoreboard() {
      background(0);
    fill('white');
    textSize(40);
    textAlign(CENTER);
    text("Dashboard", width / 2, 50); // Title of the scoreboard
       let maxEntries = 4;
    let numEntries = scoreboard.length > 0 ? scoreboard.length : maxEntries;

    // Sort scoreboard by score in descending order
    scoreboard.sort((a, b) => b.score - a.score);

    // Display the top 4 scores or empty fields
    textSize(30);
    for (let i = 0; i < numEntries; i++) {
        let rank = i + 1;

        // Draw gray rectangle for the rank and name
        fill(rank % 2 === 0 ? '#333333' : '#4d4d4d'); // Alternating gray colors for rows
        rect(width / 2 - 180, 100 + i * 60, 260, 50); // Widened rectangle for name and rank

        // Draw green rectangle for the score
        fill('#3b6e3b'); // Green color for score background
        rect(width / 2 + 80, 100 + i * 60, 120, 50); // Widened rectangle for score

        // Display the rank and player name (empty if no name)
        fill('white');
        textAlign(LEFT, CENTER);
        let nameToDisplay = (scoreboard[i] && scoreboard[i].name) ? scoreboard[i].name : "_________";  // Use player's name or placeholder
        text(rank + ". " + nameToDisplay, width / 2 - 170, 125 + i * 60);

        // Display the score in white, centered in the green rectangle (empty if no score)
        fill('white');
        textAlign(CENTER, CENTER);
        let scoreToDisplay = (scoreboard[i] && scoreboard[i].score) ? scoreboard[i].score : "0";  // Use player's score or 0
        text(scoreToDisplay, width / 2 + 140, 125 + i * 60);
    }
    // Display two larger images at the bottom, with some space above
    // Set the size for both images
    let imageSize1 = 200; // Size for the first image (left)
    let imageSize2 = 200; // Larger size for the second image (right)

    // Display the first image (img2) on the left with a smaller size
    image(img2, 120, 330, imageSize1, imageSize1);

    // Display the second image (img3) on the right with a larger size
    image(img3, 200, 280, 350, imageSize2);
    // "Click to Return to Menu" text at the bottom
    fill('white');
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text("Click to Return to Menu", width / 2, height - 50);
}


function checkGameOver() {
    if (playerScore <= 0) {
        gameOver = true; // Set game over status
        page = 5; // Go to timeout screen
    }
}

function displayMainMenu() {
    fill('white');
    rect(30, 350, 50, 45); // P1 button
    textSize(45);
    fill('black');
    text("P1", 28, 350, 50, 45);
    textStyle(ITALIC);
    fill('white');
    text("START TO PLAY", 100, 350, 400, 45);
    
    textStyle(BOLD);
    image(img, 460, 360);
    img.resize(100, 100);
    image(img1, 0, 30);
    img1.resize(175, 220);
    
    fill('white');
    rect(30, 450, 50, 45); // P2 button
    fill('black');
    text("P2", 27, 450, 50, 45);
    textStyle(ITALIC);
    fill('white');
    text("INSTRUCTIONS", 100, 450, 400, 45);
    
    textStyle(NORMAL);
    textStyle(BOLD);
    textSize(70);
    fill('red');
    text("Fast-Food", 140, 50, 400, 70);
    fill('green');
    text("Cooking", 170, 120, 400, 70);
    fill('yellow');
    text("Challenge", 140, 190, 400, 70);
}

function displayInstructions() {
    background(0);
    fill('white');
    rect(10, 20, 100, 50);
    textSize(40);
    fill('black');
    text("Back", 10, 20, 10, 40);
    textSize(45);
    fill('white');
    text("INSTRUCTIONS:", 130, 20, 400, 45);
    
    fill('white');
    textSize(30);
    text("- Use WASD to move", 50, 80, 400, 45);
    text("- Press [button] to interact", 50, 120, 450, 100);
    text("- Complete food tasks in the given time", 50, 165, 550, 200);
    text("- Completing them faster will reward bonus points", 50, 245, 550, 200);
    text("- Complete the food tasks in order", 50, 330, 600, 200);
    text("- You will grab, cook, and serve the food", 50, 370, 500, 200);
    text("- Interact with the trashcan to throw away current food and restart", 50, 450, 550, 200);
    text("- You will combine items to make orders (each level gets harder)", 50, 530, 550, 200);
}

function displayLevelSelection() {
    for (let i = 1; i <= 6; i++) {
        drawLevelSquare(i);
    }
    fill('black');
    rect(10, 10, 60, 60);
    textSize(26);
    fill('white');
    text("Back", 10, 10, 60, 60);
}

function drawLevelSquare(level) {
    let squareSize = 150; // Size of the square
    let spacing = 20; // Spacing between squares
    let startX = 150 + ((level - 1) % 2) * (squareSize + spacing); // X position
    let startY = 50 + Math.floor((level - 1) / 2) * (squareSize + spacing); // Y position
    
    // Set background color based on level
    switch (level) {
        case 1: fill('red'); break;
        case 2: fill('green'); break;
        case 3: fill('yellow'); break;
        case 4: fill('orange'); break;
        case 5: fill('red'); break;
        case 6: fill('green'); break;
    }
    
    // Draw the square
    rect(startX, startY, squareSize, squareSize);
    
    // Set text color
    fill('white');
    if (level === 3) {
        fill('black');
    }
    
    // Display the level number in the square
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Level " + level, startX + squareSize / 2, startY + squareSize / 2);
}

function displayNameEntry() {
    fill(0, 0, 0); // Green background for input section
    rect(50, 250, 500, 200); // Background for input section
    fill('white');
    textSize(20);
    text("Enter your name:", 200, 280); // Prompt for name
    input.show(); // Show the input field
    submitButton.show(); // Show the submit button
}

function displayGameOptions() {
    fill(0); // Black background for options
    rect(50, 250, 500, 200); // Background for game options
    
    // Draw "One Player" button
    fill('yellow');
    rect(200, 450, 200, 50); // Position and size of "One Player" button
    fill('black');
    textSize(32);
    textAlign(CENTER, CENTER);
    text("One Player", 300, 475); // Centered text
    
    // Draw "Two Players" button
    fill('red');
    rect(200, 510, 200, 50); // Position and size of "Two Players" button
    fill('white');
    text("Two Players", 300, 535); // Centered text
}

function mousePressed() {
    // Check for game over
if (gameOver) {
    if (page === 5 || page === 6) { // Both game over and timeout screens
        // Add the player's score to the scoreboard if game is over
        if (playerName && playerScore >= 0) {
            scoreboard.push({ name: playerName, score: playerScore });
        }
        page = 7; // Go to scoreboard page
        return; // Exit function after going to scoreboard
    }
    // Other reset actions
    gameOver = false;
    playerScore = 100;
    selectedLevel = 0;
    page = 0;
    timer = gameDuration;
}

    // Check if "Click to View Scoreboard" was clicked on the game over or dashboard screens
    if ((page === 6 || page === 5) && mouseX >= width / 2 - 150 && mouseX <= width / 2 + 150 && mouseY >= height / 2 + 50 && mouseY <= height / 2 + 100) {
        page = 7; // Go to the scoreboard page
    }

    // Main menu buttons
    if (page === 0 && mouseX >= 30 && mouseX <= 80 && mouseY >= 350 && mouseY <= 395) {
        grillSound.play();
        page = 1; // Go to level selection page
    }
    if (page === 0 && mouseX >= 30 && mouseX <= 80 && mouseY >= 450 && mouseY <= 495) {
        grillSound.play();
        showInstructions = true;
        page = 4; // Show instructions when P2 is clicked
    }
    if (page === 1 && mouseX >= 30 && mouseX <= 80 && mouseY >= 20 && mouseY <= 65) {
        grillSound.play();
        page = 0; // Go to level selection page
    }
    if (showInstructions && mouseX >= 30 && mouseX <= 80 && mouseY >= 20 && mouseY <= 65) {
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
            if (mouseX >= startX && mouseX <= startX + squareSize && mouseY >= startY && mouseY <= startY + squareSize) {
                grillSound.play();
                selectedLevel = i;
                console.log("Level " + selectedLevel + " selected!");
                page = 2; // Go to name entry page
            }
        }
    }

    // Check for game option selection
    if (page === 3) {
        if (mouseX >= 200 && mouseX <= 400 && mouseY >= 450 && mouseY <= 500) {
            grillSound.play();
            console.log("One Player selected");
            gameStarted = true; // Start the game
            timer = gameDuration; // Set the timer
            page = 6; // Go to dashboard page
        }
        if (mouseX >= 200 && mouseX <= 400 && mouseY >= 510 && mouseY <= 560) {
            grillSound.play();
            console.log("Two Players selected");
            gameStarted = true; // Start the game
            timer = gameDuration; // Set the timer
            page = 6; // Go to dashboard page
        }
    }
}


function submitName() {
 playerName = input.value(); // Get the player's name
    console.log("Player Name: " + playerName + ", Level: " + selectedLevel);
    input.hide(); // Hide input box after submission
    submitButton.hide(); // Hide submit button after submission

    // Add the player to the scoreboard with initial score
    scoreboard.push({ name: playerName, score: playerScore });
    
    // Go to the game options page
    page = 3; // Go to the Game Options page
}


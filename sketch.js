
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
function setup() {
createCanvas(600, 600);
img = loadImage('clearburger.png');
img1 = loadImage('grill.png');
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
if (page === 0) {
// Main menu
displayMainMenu();
} else if (page === 1) {
// Level selection
displayLevelSelection();
} else if (page === 2) {
// Name entry page
displayNameEntry();
} else if (page === 3) {
// Game options page
displayGameOptions();
} else if (page === 4) {
// Instructions for game options
displayInstructions();
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
stroke(400);
textSize(30);
fill('white');
text("- Use WASD to move", 50, 80, 400, 45);
stroke(400);
textSize(30);
fill('white');
text("- Press [button] to interact", 50, 120, 450, 100);
stroke(400);
textSize(30);
fill('white');
text("- Complete food tasks in the given time", 50, 165, 550, 200);
stroke(400);
textSize(30);
fill('white');
text("- Completing them faster will reward bonus points", 50, 245, 550, 200);
stroke(400);
textSize(30);
fill('white');
text("- Complete the food tasks in order", 50, 330, 600, 200);
stroke(300);
textSize(30);
fill('white');
text("- You will grab, cook, and serve the food", 50, 370, 500, 200);
stroke(300);
textSize(30);
fill('white');
text("- Interact with the trashcan to throw away current food and restart", 50, 450, 550, 200);
stroke(300);
textSize(30);
fill('white');
text("- You will combine items to make orders (each level gets harder)", 50, 530, 550, 200);
stroke(300);
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
// Main menu buttons
if (page === 0 && mouseX >= 30 && mouseX <= 80 && mouseY >= 350 && mouseY <= 395) {
page = 1; // Go to level selection page
}
if (page === 0 && mouseX >= 30 && mouseX <= 80 && mouseY >= 450 && mouseY <= 495) {
showInstructions = true;
page = 4; // Show instructions when P2 is clicked
}
if (page === 1 && mouseX >= 30 && mouseX <= 80 && mouseY >= 20 && mouseY <= 65) {
page = 0; // Go to level selection page
}
if (showInstructions && mouseX >= 30 && mouseX <= 80 && mouseY >= 20 && mouseY <=
65) {
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
if (mouseX >= startX && mouseX <= startX + squareSize && mouseY >= startY && mouseY
<= startY + squareSize) {
selectedLevel = i;
console.log("Level " + selectedLevel + " selected!");
page = 2; // Go to name entry page
}
}
}
// Check for game option selection
if (page === 3) {
if (mouseX >= 200 && mouseX <= 400 && mouseY >= 450 && mouseY <= 500) {
console.log("One Player selected");
// Proceed to one player game
}
if (mouseX >= 200 && mouseX <= 400 && mouseY >= 510 && mouseY <= 560) {
console.log("Two Players selected");
// Proceed to two players game
}
}
}
function submitName() {
playerName = input.value(); // Get the player's name
console.log("Player Name: " + playerName + ", Level: " + selectedLevel);
// Hide the input and button after submission
input.hide();
submitButton.hide();
// Show game options
page = 3; // Go to game options page
}

function displayGameOver() {
  background(0);
  fill("white");
  textSize(45);
  textAlign(CENTER);
  text("Time out!", width / 2, height / 2 - 174);
  text("Game", width / 2, height / 2 - 124);
  text("Over!", width / 2, height / 2 - 74);
  textSize(30);
  text("Your Score: " + playerScore, width / 2, height / 2 + 20);
   // Draw "Click to View Dashboard" button
  let buttonX1 = width / 2 - 75;
  let buttonY1 = height / 2 + 50;
  let buttonWidth1 = 150;
  let buttonHeight1 = 50;

  fill(200, 50, 50); // Red color
  rect(buttonX1, buttonY1, buttonWidth1, buttonHeight1, 10); // Rounded corners

  fill(255);
  textSize(16);
  text("View Dashboard", width / 2, buttonY + buttonHeight / 2 + 5);
  gameOver = true; // Set gameOver flag
}

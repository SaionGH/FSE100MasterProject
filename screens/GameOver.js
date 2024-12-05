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
   // Button to view leaderboard
  const buttonX = width / 2 - 100; // Button position X
  const buttonY = height / 2 + 100; // Button position Y
  const buttonWidth = 200; // Button width
  const buttonHeight = 50; // Button height

  // Draw the button
  fill("blue");
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10); // Rounded rectangle
  fill("white");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("View Leaderboard", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
  gameOver = true;
}

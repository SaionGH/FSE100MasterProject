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
  text("Click to Return to Menu", width / 2, height / 2 + 70);// it should say return to menu
     gameOver = true; 
}

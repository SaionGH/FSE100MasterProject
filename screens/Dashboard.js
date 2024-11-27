function displayDashboard() {
  background(0);
  fill("white");
  textSize(30);
  textAlign(CENTER);
  text("Player Name: " + playerName, width / 2, height / 2 - 20);
  fill("white");
  textSize(30);
  text("Score: " + playerScore, width / 2, height / 2 + 20);
  fill("white");
  textSize(30);
  text("Click to View Scoreboard", width / 2, height / 2 + 70);
}

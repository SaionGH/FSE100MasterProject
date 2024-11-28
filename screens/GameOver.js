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
  text("Click to View Scoreboard", width / 2, height / 2 + 70);
}

  // Create and display the "Click to View the Dashboard" button
  if (!dashboardButton) {
    dashboardButton = createButton("Click to View the Dashboard");
    dashboardButton.position(width / 2 - 150, height / 2 + 120);
    dashboardButton.style("background-color", "black");
    dashboardButton.style("color", "white");
    dashboardButton.style("font-size", "20px");
    dashboardButton.style("padding", "10px");
    dashboardButton.style("border-radius", "5px");

    // Attach the action to navigate to the 7th page
    dashboardButton.mousePressed(() => {
      dashboard(); // Navigate to the 7th page (scoreboard/dashboard)
    });
  }

  // Ensure the button is visible
  dashboardButton.show();

  gameOver = true; // Set gameOver flag
}

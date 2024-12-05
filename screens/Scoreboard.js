function displayScoreboard() {
  background(0);
  fill("white");
  textSize(45);
  textAlign(CENTER);
  text("Dashboard", width / 2, 50); // Title of the scoreboard
  let maxEntries = 5;
  let numEntries = scoreboard.length > 0 ? scoreboard.length : maxEntries;
  // Sort scoreboard by score in descending order
  scoreboard.sort((a, b) => b.score - a.score);
  // Display the top 4 scores or empty fields
  textSize(30);
  for (let i = 0; i < numEntries; i++) {
    let rank = i + 1;
    // Draw gray rectangle for the rank and name
    fill(rank % 2 === 0 ? "#333333" : "#4d4d4d"); // Alternating gray colors for rows
    rect(width / 2 - 180, 100 + i * 60, 260, 50); // Widened rectangle for name and rank
    // Draw green rectangle for the score
    fill("green"); // Green color for score background
    rect(width / 2 + 80, 100 + i * 60, 120, 50); // Widened rectangle for score
    // Display the rank and player name (empty if no name)
    fill("white");
    textAlign(LEFT, CENTER);
    let nameToDisplay =
      scoreboard[i] && scoreboard[i].name ? scoreboard[i].name : "_________"; // Use player's name or placeholder
    text(rank + ". " + nameToDisplay, width / 2 - 170, 125 + i * 60);
    // Display the score in white, centered in the green rectangle (empty if no scor)
    fill("white");
    textAlign(CENTER, CENTER);
    let scoreToDisplay =
      scoreboard[i] && scoreboard[i].score ? scoreboard[i].score : "0"; //Use player's score or 0
    text(scoreToDisplay, width / 2 + 140, 125 + i * 60);
  }
  // Display two larger images at the bottom, with some space above
    const buttonX = width / 2 - 75;
    const buttonY = height - 100;
    const buttonWidth = 150;
    const buttonHeight = 40;
  
    fill(200); // Gray background for the button
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10); // Rounded rectangle
    fill(0); // Black text
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Back to Menu", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}


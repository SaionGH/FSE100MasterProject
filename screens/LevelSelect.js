function displayLevelSelection() {
  for (let i = 1; i <= 6; i++) {
    drawLevelSquare(i);
  }
  fill("black");
  rect(10, 10, 60, 60);
  textSize(26);
  fill("white");
  text("Back", 10, 10, 60, 60);
}
function drawLevelSquare(level) {
  let squareSize = 150; // Size of the square
  let spacing = 20; // Spacing between squares
  let startX = 150 + ((level - 1) % 2) * (squareSize + spacing); // X position
  let startY = 50 + Math.floor((level - 1) / 2) * (squareSize + spacing); // Y position
  // Set background color based on level
  switch (level) {
    case 1:
      fill("red");
      break;
    case 2:
      fill("green");
      break;
    case 3:
      fill("yellow");
      break;
    case 4:
      fill("orange");
      break;
    case 5:
      fill("red");
      break;
    case 6:
      fill("green");
      break;
  }
  // Draw the square
  rect(startX, startY, squareSize, squareSize);
  // Set text color
  fill("white");
  if (level === 3) {
    fill("black");
  }
  // Display the level number in the square
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Level " + level, startX + squareSize / 2, startY + squareSize / 2);
}

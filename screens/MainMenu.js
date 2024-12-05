function displayMainMenu() {
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  textSize(12);
  fill(255);

  // P1 Button
  fill("white");
  rect(30, 350, 50, 45); // P1 button
  textSize(45);
  fill("black");
  text("P1", 28, 350, 60, 45);
  textStyle(ITALIC);
  fill("white");
  text("START TO PLAY", 100, 350, 400, 45);

  // P2 Button
  textStyle(BOLD);
  fill("white");
  rect(30, 450, 50, 45); // P2 button
  fill("black");
  text("I", 48, 450, 200, 50);
  textStyle(ITALIC);
  fill("white");
  text("INSTRUCTIONS", 100, 450, 400, 45);

  textStyle(NORMAL);
  textSize(70);

  // Game Title
  fill("red");
  text("Fast-Food", 140, 50, 400, 70);
  fill("green");
  text("Cooking", 170, 120, 400, 70);
  fill("yellow");
  text("Challenge", 140, 190, 400, 70);

  image(img, 460, 360);
  img.resize(100, 100);
  image(img1, 0, 30);
  img1.resize(175, 220);
}
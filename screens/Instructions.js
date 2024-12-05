
function displayInstructions() {
  
  // Set the background
  background(0);

  // Draw the "Back" button
  fill("white");
  rect(10, 20, 100, 50, 10); // Add rounded corners for consistency
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Back", 60, 45); // Adjust position to center the text inside the button
  
  
  


  // Set styles for instructions title
  textSize(45);
  textAlign(LEFT, TOP);
  fill("white");
  text("INSTRUCTIONS:", 130, 20);

  // Set styles for instructions content
  textSize(30);
  text("-Use WASD to move", 10, 80);
  text("-Press SPACE to interact", 10, 120);
  text("-Complete food tasks in the given time", 10, 165);
  text("-Completing them faster will reward a bonus", 10, 205);
  text("-Try to complete the food tasks in order", 10, 245);
  text("-You must collect food while holding a plate", 10, 285);
  text(
    "-Interact with the trashcan to throw away current food and restart",
    10,
    325,
    550,
    100
  );
  text(
    "-Interact with the lightblue squares to               turn in an order",
    10,
    405,
    550,
    100
  );
}
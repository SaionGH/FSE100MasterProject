function displayNameEntry(submitButton) {
  fill(0); // Black background for the input section
  rect(50, 250, 500, 200); // Background for input section
  fill("white");
  textSize(25);
  text("Enter your name:", 200, 280); // Prompt for name
  input.show();
  submitButton.show();
  const imageSize = 200; 
  const padding = 200; 
  image(cup_image, 80, 50, imageSize, imageSize); // Adjust coordinates as needed
  image(cutting_board, 15, 320, imageSize, imageSize); // Adjust coordinates as needed
  image(frying_pan, 400, 320, imageSize, imageSize); // Adjust coordinates as needed
}

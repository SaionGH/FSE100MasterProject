// Button class
class Button {
  constructor(x, y, w, h, text, onClick) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.onClick = onClick;
  }

  // Display the button on the canvas
  display() {
    fill(200, 200, 255); // Button color
    rect(this.x, this.y, this.w, this.h, 10); // Draw button

    // Draw text on the button
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.w / 2, this.y + this.h / 2);
    
    // Check for click and trigger the onClick function
    if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.onClick(); // Call the button's specific onClick function
    }
  }
}

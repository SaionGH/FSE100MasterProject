// Pan Class (inherits from Cookware)
class Pan extends Cookware {
  constructor(x, y) {
    super(x, y);
  }

  // Processes the contents by frying them
  processContents() {
    this.fryContents();
  }

  // Fries the contents in the pan
  fryContents() {
    // TODO: Implement frying logic (e.g., change ingredient states to 'cooked')
  }

  // Draws the pan with its contents
  draw() {
    // TODO: Implement pan drawing
  }
}

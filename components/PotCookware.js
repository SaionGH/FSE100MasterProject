// Pot Class (inherits from Cookware)
class Pot extends Cookware {
  constructor(x, y) {
    super(x, y);
  }

  // Processes the contents by boiling them
  processContents() {
    this.boilContents();
  }

  // Boils the contents in the pot
  boilContents() {
    // TODO: Implement boiling logic (e.g., change ingredient states to 'cooked')
  }

  // Draws the pot with its contents
  draw() {
    // TODO: Implement pot drawing
  }
}

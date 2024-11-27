// Plate Class (inherits from Cookware)
class Plate extends Cookware {
  constructor(x, y) {
    super(x, y);
  }

  // Arranges the ingredients on the plate
  arrangeContents() {
    // TODO: Implement arrangement logic
  }

  // Overrides processContents to reflect arranging rather than cooking
  processContents() {
    // Possibly simply calls arrangeContents()
    this.arrangeContents();
  }

  // Draws the plate with its contents
  draw() {
    // TODO: Implement plate drawing, showing arranged ingredients
  }
}

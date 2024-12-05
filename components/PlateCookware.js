// Plate Class (inherits from Cookware)
class Plate extends Cookware {
  constructor(x, y) {
    super(x, y);
    this.ingredients = []; 
    this.maxIngredients = 1;
    this.image = plates_image;
    console.log("Plate created:", this);
  }
  
  addIngredient(ingredient) {
    if (this.ingredients.length < this.maxIngredients) {
      this.ingredients.push(ingredient);
      this.arrangeContents();
      console.log("Ingredient added to plate:", ingredient);
    } else {
      console.log("Plate is full! Cannot add more ingredients.");
    }
  }
  
  arrangeContents() {
        const radius = 15; // Distance from the center of the plate
        this.ingredients.forEach((ingredient, index) => {
            const angle = (TWO_PI / this.ingredients.length) * index;
            ingredient.drawX = this.x + cos(angle) * radius;
            ingredient.drawY = this.y + sin(angle) * radius;
        });
  }
  
  // Overrides processContents to reflect arranging rather than cooking
  processContents() {
    // Possibly simply calls arrangeContents()
    this.arrangeContents();
  }

  // Draws the plate with its contents
  draw() {
    push();
    // Draw the plate
    
    fill("#FFFFFF");
    ellipse(this.x, this.y, 40, 10); // Plate outline
    fill("#E0E0E0");
    ellipse(this.x, this.y, 30, 8); // Inner plate

    // Draw ingredients
    this.ingredients.forEach((ingredient) => {
    if (ingredient.image) {
        image(ingredient.image, ingredient.drawX, ingredient.drawY, 20, 20); // Adjust size
    } else {
        console.warn("Ingredient missing image:", ingredient);
        fill(ingredient.color || "#FF0000");
        ellipse(ingredient.drawX, ingredient.drawY, 10, 10);
    }
});

    pop();
  }
}

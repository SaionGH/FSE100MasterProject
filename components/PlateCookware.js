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
    } 
  }
  
  arrangeContents() {
        const radius = 15; 
        this.ingredients.forEach((ingredient, index) => {
            const angle = (TWO_PI / this.ingredients.length) * index;
            ingredient.drawX = this.x + cos(angle) * radius;
            ingredient.drawY = this.y + sin(angle) * radius;
        });
  } 
  
  processContents() {
    this.arrangeContents();
  }

  draw() {
    push();
    
    fill("#FFFFFF");
    ellipse(this.x, this.y, 40, 10); 
    fill("#E0E0E0");
    ellipse(this.x, this.y, 30, 8); 

    this.ingredients.forEach((ingredient) => {
    if (ingredient.image) {
        image(ingredient.image, ingredient.drawX, ingredient.drawY, 20, 20); 
    } else {
        console.log("Ingredient missing image:", ingredient);
        fill(ingredient.color || "#FF0000");
        ellipse(ingredient.drawX, ingredient.drawY, 10, 10);
    }
});
    pop();
  }
}

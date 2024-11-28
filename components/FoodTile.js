// FoodTile Class
class FoodTile {
  constructor(x, y, sz, foodType) {
    this.x = x;
    this.y = y;
    this.foodType = foodType; // e.g., 'buns', 'cheese','meat' , 'lettuce', 'salmon','seaweed', 'rice', 'cucumber', 'tomato', 'noodles', 'meatballs'
    this.isWalkable = false;
    this.isOccupied = false;
    this.sz = sz;
    this.tileColors = {
      Bun: '#e3c666',
      Cheese: '#ffdd42',
      MeatPatty: '#792b1c',
      Lettuce: '#42c742',
      Salmon: '#ff7f7f',
      Seaweed: '#364a32',
      Rice: '#DACDB0',
      Cucumber: '#80bf26',
      Tomato: '#FF574A',
      Noodles: '#c19650',
      MeatBalls: '#3D0F00'
    };
  }
  

  // Processes an item placed on the station
  interact(item) {
    // TODO: Implement item processing logic based on station type
    return({food: this.foodType, color: this.tileColors[this.foodType]})
  }

  // Draws the station tile
  draw() {
    // TODO: Implement station tile drawing
    push();
    if (this.foodType in this.tileColors){
      fill(this.tileColors[this.foodType])
    } else {
      fill("#FF0000")
    }
    rect(this.x, this.y, this.sz, this.sz);
    fill("black")
    stroke("white")
    text(this.foodType, this.x+(this.sz/2), this.y+(this.sz/2));
    pop();
  }
}

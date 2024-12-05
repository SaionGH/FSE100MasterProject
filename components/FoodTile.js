// FoodTile Class
class FoodTile {
  constructor(x, y, sz, foodType) {
    this.x = x;
    this.y = y;
    this.foodType = foodType; 
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
    this.tileImages = {
      Bun: buns_image,
      Cheese: cheese_image,
      MeatPatty: meatpatty_image,
      Lettuce: lettuce_image,
      Salmon: salmon_image,
      Seaweed: seaweed_image,
      Rice: rice_image,
      Cucumber: cucumber_image,
      Tomato: tomato_image,
      Noodles: noodles_image,
      MeatBalls: meatballs_image
    };
  }
  

  // Processes an item placed on the station
  interact(player) {
  if (player.held instanceof Plate && !player.secondaryHeld) {
    console.log("Adding ingredient to plate.");
    return {
      food: this.foodType,
      color: this.tileColors[this.foodType],
      image: this.tileImages[this.foodType],
    };
  }
  return null;
}

  // Draws the station tile
  draw() {
    // TODO: Implement station tile drawing
    push();
    if (this.foodType in this.tileColors){
      fill(this.tileColors[this.foodType])
      if(this.foodType in this.tileImages){
        
      }
    } else {
      fill("#FF0000")
    }
    rect(this.x, this.y, this.sz, this.sz);
    image(this.tileImages[this.foodType], this.x, this.y, this.sz, this.sz);
   
    pop();
  }
}

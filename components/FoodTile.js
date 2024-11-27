// FoodTile Class
class FoodTile {
  constructor(x, y, sz, foodType) {
    this.x = x;
    this.y = y;
    this.foodType = foodType; // e.g., 'buns', 'cheese','meat' , 'lettuce', 'salmon','seaweed', 'rice', 'cucumber', 'tomato', 'noodles', 'meatballs'
    this.isWalkable = false;
    this.isOccupied = false;
    this.sz = sz;
  }

  // Processes an item placed on the station
  processItem(item) {
    // TODO: Implement item processing logic based on station type
  }

  // Draws the station tile
  draw() {
    // TODO: Implement station tile drawing
    push();
   switch (this.foodType) {
          case 'Bun':
            fill('#e3c666');
            break;
          case 'Cheese':
            fill('#ffdd42');
            break;
          case 'MeatPatty':
            fill('#792b1c');
            break;
          case 'Lettuce':
            fill('#42c742');
            break;
          case 'Salmon':
            fill('#ff7f7f');
            break;
          case 'Seaweed':
            fill('#364a32');
            break;
          case 'Rice':
            fill('#DACDB0')
            break;
          case 'Cucumber':
            fill('#80bf26')
            break;
          case 'Tomato':
            fill('#FF574A')
            break;
          case 'Noodles':
            fill('#c19650')
            break;
          case 'MeatBalls':
            fill('#3D0F00')
            break;  
            
          // Add more cases as needed
          default:
            fill('#FF0000');
            break;
            
        }
    rect(this.x, this.y, this.sz, this.sz);
    pop();
  }
}

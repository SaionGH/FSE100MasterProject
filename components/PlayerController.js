// PlayerController Class
class PlayerController {
  constructor(x, y, l) {
    console.log("Player Constructor");
    this.x = x;
    this.y = y;
    this.sz = width / 12;
    this.speed = 10;
    this.direction = 0;
    this.held = null;
    this.Secondaryheld = null;
    this.level = l;
    this.keyHandled = false;
  }
  calculateTile(offsetX, offsetY, direction) {
    let translatedX = this.x + offsetX;
    let translatedY = this.y + offsetY;

    let rotatedX = (translatedX - this.x) * cos(direction) - (translatedY - this.y) * sin(direction) + this.x;
    let rotatedY = (translatedX - this.x) * sin(direction) + (translatedY - this.y) * cos(direction) + this.y;

    return this.level.getTileAt(rotatedX, rotatedY);
  }
  
  resetPosition(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.held = null;
    this.secondaryHeld = null;
    console.log("Player position and held items reset.");
  }

  move(level) {
    const halfSize = this.sz / 2; 
    const offset = this.speed; 


    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      if (this.calculateTile(halfSize+offset, 0, PI)?.isWalkable) {
        this.x -= this.speed;
      }
      this.direction = PI;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      if (this.calculateTile(halfSize+offset, 0, 0)?.isWalkable) {
        this.x += this.speed;
      }
      this.direction = 0;
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      if (this.calculateTile(halfSize+offset, 0, (3 * PI) / 2)?.isWalkable) {
        this.y -= this.speed;
      }
      this.direction = (3 * PI) / 2;
    } else if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) {
      if (this.calculateTile(halfSize + offset, 0, PI / 2)?.isWalkable) {
        this.y += this.speed;
      }
      this.direction = PI / 2;
    } else {
      // something?
    }

    if (keyIsDown(32) && !this.keyHandled) {
      console.log(this.held);
      this.interact();
      this.keyHandled = true; 
    }

    if (!keyIsDown(32)) {
      this.keyHandled = false; 
    }
  }

  // Interacts with nearby objects
  interact() {
  let localX = 30 + this.speed; 
  let localY = 0; 

  let rotatedX = localX * cos(this.direction) - localY * sin(this.direction);
  let rotatedY = localX * sin(this.direction) + localY * cos(this.direction);

  let screenX = rotatedX + this.x;
  let screenY = rotatedY + this.y;

  const tile = this.level.getTileAt(screenX, screenY);

  if (tile && typeof tile.interact === "function") {
    console.log("Tile found, interacting...");

    if (!this.held) {
      const item = tile.interact(this);
      if (item instanceof Plate) {
        this.held = item;
        console.log("Picked up a plate:", this.held);
      } else if (item) {
        this.held = item;
        console.log("Picked up an item:", this.held);
      } else {
        console.log("No item to pick up.");
      }
    } else if (this.held instanceof Plate && !this.secondaryHeld) {
      const ingredient = tile.interact(this);
      if (ingredient) {
        this.secondaryHeld = ingredient;
        console.log("Added ingredient to plate:", this.secondaryHeld);
      } else {
        console.log("No ingredient to add to the plate.");
      }
    } else {
      console.log("Player is already holding something.");
    }
    tile.interact(this);
  } 
  }
  
  dropItems() {
    console.log("Dropping held and secondary items.");
    this.held = null;
    this.secondaryHeld = null;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    ellipse(0, 0, this.sz, this.sz);
    ellipse(30+this.speed, 0, 20, 20);
    if (this.held) {
        if (this.held) {
        if (this.held.image) {
        image(this.held.image, 20 + this.speed, -10, 20, 20);
      }
      if (this.secondaryHeld && this.secondaryHeld.image) {
        image(this.secondaryHeld.image, 20 + this.speed, -10, 20, 20); 
      }
    }
    }
    pop();
  }
  
  logHeldItem() {
    console.log("Primary held item:", this.held);
    console.log("Secondary held item:", this.secondaryHeld);
  }
}

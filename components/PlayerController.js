// PlayerController Class
class PlayerController {
  constructor(x, y, l) {
    console.log("Player Constructor");
    this.x = x;
    this.y = y;
    // Other properties like speed, sprite, etc.
    this.sz = width / 12;
    this.speed = 10;
    this.direction = 0;
    this.held = null;
    this.Secondaryheld = null;
    this.level = l;
    this.keyHandled = false;
  }
  calculateTile(offsetX, offsetY, direction) {
    // Step 1: Translate (local to world position)
    let translatedX = this.x + offsetX;
    let translatedY = this.y + offsetY;

    // Step 2: Rotate (around player position)
    let rotatedX = (translatedX - this.x) * cos(direction) - (translatedY - this.y) * sin(direction) + this.x;
    let rotatedY = (translatedX - this.x) * sin(direction) + (translatedY - this.y) * cos(direction) + this.y;

    // Get the tile at the rotated coordinates
    return this.level.getTileAt(rotatedX, rotatedY);
  }
  
  resetPosition(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.held = null;
    this.secondaryHeld = null;
    console.log("Player position and held items reset.");
  }

  // Moves the player based on input
  move(level) {// Calculate the screen coordinates of the second ellipse
    const halfSize = this.sz / 2; // Half the player's size
    const offset = this.speed; // Speed is used as the offset for collision detection


    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      if (this.calculateTile(halfSize+offset, 0, PI)?.isWalkable) {
        // TODO: Implement player movement logic
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
      this.keyHandled = true; // Prevent repeated interactions while the key is held
    }

    if (!keyIsDown(32)) {
      this.keyHandled = false; // Reset key handling when the key is released
    }
  }

  // Interacts with nearby objects
  interact() {
  let localX = 30 + this.speed; // Local X position of the second ellipse
  let localY = 0; // Local Y position of the second ellipse

  // Apply rotation based on the player's current direction
  let rotatedX = localX * cos(this.direction) - localY * sin(this.direction);
  let rotatedY = localX * sin(this.direction) + localY * cos(this.direction);

  // Translate to screen coordinates
  let screenX = rotatedX + this.x;
  let screenY = rotatedY + this.y;

  // Get the tile at the calculated position
  const tile = this.level.getTileAt(screenX, screenY);

  if (tile && typeof tile.interact === "function") {
    console.log("Tile found, interacting...");

    if (!this.held) {
      // Pick up the first item (e.g., plate or other object)
      const item = tile.interact(this);
      if (item instanceof Plate) {
        this.held = item; // Assign plate to `held`
        console.log("Picked up a plate:", this.held);
      } else if (item) {
        this.held = item; // Assign any other item to `held`
        console.log("Picked up an item:", this.held);
      } else {
        console.log("No item to pick up.");
      }
    } else if (this.held instanceof Plate && !this.secondaryHeld) {
      // Add an ingredient to the plate
      const ingredient = tile.interact(this);
      if (ingredient) {
        this.secondaryHeld = ingredient; // Assign ingredient to `secondaryHeld`
        console.log("Added ingredient to plate:", this.secondaryHeld);
      } else {
        console.log("No ingredient to add to the plate.");
      }
    } else {
      console.log("Player is already holding something.");
    }
    tile.interact(this);
  } else {
    console.log("No interactable tile found.");
  }
  }
  
  dropItems() {
    console.log("Dropping held and secondary items.");
    this.held = null;
    this.secondaryHeld = null;
  }

  // Draws the player on the screen
  display() {
    // TODO: Implement drawing logic
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    ellipse(0, 0, this.sz, this.sz);
    ellipse(30+this.speed, 0, 20, 20);
    if (this.held) {
        //console.log("Player is holding:", this.held);
        if (this.held) {
        if (this.held.image) {
        image(this.held.image, 20 + this.speed, -10, 20, 20);
      }
      if (this.secondaryHeld && this.secondaryHeld.image) {
        image(this.secondaryHeld.image, 20 + this.speed, -10, 20, 20); // Draw secondary item over the plate
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

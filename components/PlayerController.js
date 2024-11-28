// PlayerController Class
class PlayerController {
  constructor(x, y) {
    console.log("Player Constructor");
    this.x = x;
    this.y = y;
    // Other properties like speed, sprite, etc.
    this.sz = width / 12;
    this.speed = 10;
    this.direction = 0;
    this.held = null;
  }
  calculateTile(offsetX, offsetY, direction) {
    // Step 1: Translate (local to world position)
    let translatedX = this.x + offsetX;
    let translatedY = this.y + offsetY;

    // Step 2: Rotate (around player position)
    let rotatedX = (translatedX - this.x) * cos(direction) - (translatedY - this.y) * sin(direction) + this.x;
    let rotatedY = (translatedX - this.x) * sin(direction) + (translatedY - this.y) * cos(direction) + this.y;

    // Get the tile at the rotated coordinates
    return level.getTileAt(rotatedX, rotatedY);
}


  // Moves the player based on input
  move(level) {// Calculate the screen coordinates of the second ellipse
    const halfSize = this.sz / 2; // Half the player's size
    const offset = this.speed; // Speed is used as the offset for collision detection


    if (keyIsDown(LEFT_ARROW)) {
      if (this.calculateTile(halfSize+offset, 0, PI)?.isWalkable) {
        // TODO: Implement player movement logic
        this.x -= this.speed;
       
      }
      this.direction = PI;

    } else if (keyIsDown(RIGHT_ARROW)) {
      if (this.calculateTile(halfSize+offset, 0, 0)?.isWalkable) {
        this.x += this.speed;
       
      }
      this.direction = 0;
    } else if (keyIsDown(UP_ARROW)) {
      if (this.calculateTile(halfSize+offset, 0, (3 * PI) / 2)?.isWalkable) {
        this.y -= this.speed;
  
      }
      this.direction = (3 * PI) / 2;
    } else if (keyIsDown(DOWN_ARROW)) {
      if (this.calculateTile(halfSize + offset, 0, PI / 2)?.isWalkable) {
        this.y += this.speed;
     
      }
      this.direction = PI / 2;
    } else {
      // something?
    }

    if (keyIsDown(32)) {
      // Calculate the screen coordinates of the second ellipse
      let localX = 30+this.speed; // Local X position of the second ellipse
      let localY = 0;  // Local Y position of the second ellipse

      // Apply rotation
      let rotatedX = localX * cos(this.direction) - localY * sin(this.direction);
      let rotatedY = localX * sin(this.direction) + localY * cos(this.direction);

      // Apply translation
      let screenX = rotatedX + this.x;
      let screenY = rotatedY + this.y;
      const tile = level.getTileAt(screenX, screenY)
      this.held = tile?.interact()
    }
  }

  // Interacts with nearby objects
  interact() {
    // TODO: Implement interaction logic
  }

  // Draws the player on the screen
  display() {
    // TODO: Implement drawing logic
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    ellipse(0, 0, this.sz, this.sz);
    if (this.held) {
      fill(this.held.color)
    }
    ellipse(30+this.speed, 0, 20, 20);
    pop();
  }
}

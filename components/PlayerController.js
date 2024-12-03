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
    this.s = 1;
  }

  // Moves the player based on input
  move() {
    // TODO: Implement player movement logic
    if (keyIsDown(LEFT_ARROW) && this.s != 0) {
      this.x -= this.speed;
      this.direction = PI;
      this.s = 0;
    } else if (keyIsDown(RIGHT_ARROW)&& this.s != 0) {
      this.x += this.speed;
      this.direction = 0;
      this.s = 0;
    } else if (keyIsDown(UP_ARROW)&& this.s != 0) {
      this.y -= this.speed;
      this.direction = (3 * PI) / 2;
      this.s = 0;
    } else if (keyIsDown(DOWN_ARROW)&& this.s != 0) {
      this.y += this.speed;
      this.direction = PI / 2;
    } else {
      this.s = 1;
    }
    
    if (keyIsDown(65)&& this.s != 0) {
      this.x -= this.speed;
      this.direction = PI;
      this.s = 0;
    } else if (keyIsDown(68)&& this.s != 0) {
      this.x += this.speed;
      this.direction = 0;
      this.s = 0;
    } else if (keyIsDown(87)&& this.s != 0) {
      this.y -= this.speed;
      this.direction = (3 * PI) / 2;
      this.s = 0;
    } else if (keyIsDown(83)&& this.s != 0) {
      this.y += this.speed;
      this.direction = PI / 2;
    } else {
      this.s = 1;
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
    ellipse(20, 0, 20, 20);
    pop();
  }
}

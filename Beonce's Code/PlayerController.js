// PlayerController Class
class PlayerController {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Other properties like speed, sprite, etc.
    this.sz = width/12;
    this.speed = 10;
    this.direction = 0;

  }

  // Moves the player based on input
  move() {
    // TODO: Implement player movement logic
     if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
      this.direction = PI;
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
      this.direction = 0;
    } 
    else if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
      this.direction = (3*PI)/2;
    } 
    else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
      this.direction = PI/2;
    } else {
     // something?
    }
  }

  // Interacts with nearby objects
  interact() {
    // TODO: Implement interaction logic
  }

  // Draws the player on the screen
  draw() {
    // TODO: Implement drawing logic
    push();
    translate(this.x, this.y);
    rotate(this.direction);
    ellipse(0, 0, this.sz ,this.sz);
    ellipse(20 ,0 , 20, 20);
    pop();
  }
}

// PlateDispensorTile Class
class PlateDispensorTile {
  constructor(x, y, sz) {
   this.x = x;
    this.y = y;
    this.isWalkable = false;
    this.sz = sz;
  }
  interact() {
    return null;
  }
  // Draws the counter tile
  draw() {
    // TODO: Implement counter tile drawing
    push();
    fill('#d2d6d5');
    rect( this.x , this.y , this.sz, this.sz);
    image(plates_image, this.x, this.y, this.sz, this.sz);

    pop();
  }
}
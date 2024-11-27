// CupDispensorTile Class
class CupDispensorTile {
  constructor(x, y, sz) {
   this.x = x;
    this.y = y;
    this.isWalkable = false;
    this.sz = sz;
  }

  // Draws the counter tile
  draw() {
    // TODO: Implement counter tile drawing
    push();
    fill('#008080');
    rect( this.x , this.y , this.sz, this.sz);
    pop();
  }
}

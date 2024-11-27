// FloorTile Class
class FloorTile {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.isWalkable = true;
    this.sz = sz;
  }

  // Draws the floor tile
  draw() {
    // TODO: Implement floor tile drawing
    push();
    fill('#ffffff');
    rect( this.x , this.y , this.sz, this.sz);
    pop();
  }
}

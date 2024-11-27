// Base Tile Class
class Tile {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.isWalkable = true; // Indicates if the tile can be walked over
  }

  // Draws the tile on the screen
  draw() {
    // TODO: Implement base drawing logic
    rect( this.x , this.y , this.sz, this.sz);
  }
}

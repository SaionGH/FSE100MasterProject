// DeliveryStationTile Class
class DeliveryStationTile {
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
    fill('#ADD8E6');
    rect( this.x , this.y , this.sz, this.sz);
    pop();
  }
}
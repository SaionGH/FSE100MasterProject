// TrashTile Class
class TrashTile {
  constructor(x, y, sz) {
   this.x = x;
    this.y = y;
    this.isWalkable = false;
    this.sz = sz;
  }
  interact(player) {
    if (!player) {
      console.error("Player object is undefined.");
      return;
    }

    // Check if the player is holding anything
    if (player.held) {
      if (player.secondaryHeld) {
        // Remove the secondary item first (ingredient on the plate)
        console.log("Discarding secondary held item:", player.secondaryHeld);
        player.secondaryHeld = null; // Clear secondaryHeld
      } else if (player.held instanceof Plate) {
        // If the player is holding a plate, discard it
        console.log("Discarding plate.");
        player.held = null; // Clear held plate
      } else {
        // If holding another object (not a plate), discard it
        console.log("Discarding held item:", player.held);
        player.held = null; // Clear held object
      }
    } else {
      console.log("Player is not holding anything to discard.");
    }
  }
  // Draws the counter tile
  draw() {
    // TODO: Implement counter tile drawing
    push();
    fill('#000000');
    rect( this.x , this.y , this.sz, this.sz);
    image(trash_can, this.x, this.y, this.sz, this.sz);

    pop();
  }
}
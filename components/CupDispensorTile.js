// CupDispensorTile Class
class CupDispensorTile {
  constructor(x, y, sz) {
   this.x = x;
    this.y = y;
    this.isWalkable = false;
    this.sz = sz;
  }
  interact(player) {
    if (!player) {
      console.error("Player object is undefined.");
      return null;
    }

    // Check if the player is holding a plate
    if (player.held instanceof Plate) {
      if (!player.secondaryHeld) {
        // Give the player a cup as the secondary item
        const cup = new Cup(player.x, player.y); // Create a new cup
        console.log("Cup added to the plate.");
        return cup;
      } else {
        console.log("Plate already has an item on it.");
        return null; // If the plate already has an item, no interaction
      }
    } else {
      console.log("Player must hold a plate to pick up a cup.");
      return null; // If the player is not holding a plate, no interaction
    }
  }
  // Draws the counter tile
  draw() {
    // TODO: Implement counter tile drawing
    push();
    fill('#008080');
    rect( this.x , this.y , this.sz, this.sz);
    image(cup_image, this.x, this.y, this.sz, this.sz);

    pop();
  }
}

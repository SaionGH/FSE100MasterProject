// DeliveryStationTile Class
class DeliveryStationTile {
  constructor(x, y, sz, l) {
   this.x = x;
    this.y = y;
    this.isWalkable = false;
    this.sz = sz;
    
    this.orderManager = l;
  }
  interact(player) {
  if (!player || !this.orderManager) {
      console.error("Player or OrderManager is undefined.");
      return null;
    }

    if (!player.held || !(player.held instanceof Plate)) {
      console.log("Player is not holding a plate.");
      return null;
    }

    const plate = player.held; // The plate being delivered
    const deliveredFood = player.secondaryHeld; // The ingredient on the plate

    if (!deliveredFood) {
      console.log("The plate is empty, cannot deliver.");
      return null;
    }

    // Check if the order matches
    const isOrderCompleted = this.orderManager.checkCompletion(deliveredFood);
    if (isOrderCompleted) {
      console.log("Order completed! Removing order and clearing plate.");
      player.held = null; // Clear the plate
      player.secondaryHeld = null; // Clear the ingredient
    } else {
      console.log("The delivered food does not match any order.");
    }
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
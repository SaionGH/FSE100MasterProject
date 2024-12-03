// StationTile Class
class StationTile {
  constructor(x, y, sz, stationType) {
    this.x = x;
    this.y = y;
    this.stationType = stationType; // e.g., 'chopping, or, 'cooking'
    this.isWalkable = false;
    this.isOccupied = false;
    this.sz = sz;
    
    this.tileColors = {
      cooking: '#545451',
      cutting: '#D2B48C'
    };
    this.tileImages = {
      cooking: frying_pan,
      cutting: cutting_board
    };
  }
  interact() {
    return null;
  }
  // Processes an item placed on the station
  processItem(item) {
    // TODO: Implement item processing logic based on station type
  }

  // Draws the station tile
  draw() {
    // TODO: Implement station tile drawing
        push();
    if(this.stationType === 'cooking' ){
        fill('#545451');
    }else if (this.stationType === 'cutting'){
      fill('#D2B48C');
    } else{
      fill('#FF0000');
    }
      
    rect( this.x , this.y , this.sz, this.sz);
    image(this.tileImages[this.stationType], this.x, this.y, this.sz, this.sz);

        pop();
  }
}

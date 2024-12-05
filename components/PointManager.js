class PointManager {
  
  constructor() {
    this.currentPoints = 0; 
    this.scoreboard = []; 
  }
  

  addPoints(points) {
    this.currentPoints += points;
    playerScore = this.currentPoints;
    console.log(`Points Added: ${points}. Total: ${this.currentPoints}`);
  }

  deductPoints(points) {
    this.currentPoints -= points;
    playerScore = this.currentPoints;
    if (this.currentPoints < 0) this.currentPoints = 0;
    console.log(`Points Deducted: ${points}. Total: ${this.currentPoints}`);
  }

  resetPoints() {
    this.currentPoints = 0;
  }
}
window.PointManager = PointManager;

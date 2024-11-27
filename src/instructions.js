//let img1;
function setup() {
  createCanvas(600, 600);
 // img = loadImage('clearburger.png');
 // img1 = loadImage('grill.png');
}

function draw() {
  background(0);
  fill('white');
  rect(10, 20, 90, 50);
  textSize(40);
  fill('black');
  text("Back", 10, 20, 10, 50);
  
  

  
  
  textSize(45);
  fill('white');
  text("INSTRUCTIONS:", 130, 20, 400, 45);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Use WASD to move", 50, 80, 400, 45);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Press [button] to interact", 50, 120, 450, 100);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Complete food tasks in the given time", 50, 165, 550, 200);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Completing them faster will reward bonus points", 50, 245, 550, 200);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Complete the food tasks in order", 50, 330, 600, 200);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- You will grab, cook, and serve the food", 50, 370, 500, 200);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- Interact with the trashcan to throw away current food and restart", 50, 450, 550, 200);
  stroke(400);
  
  textSize(32);
  fill('white');
  text("- You will combine items to make orders (each level gets harder)", 50, 530, 550, 200);
  stroke(400);

}
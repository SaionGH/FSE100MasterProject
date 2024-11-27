// Main Sketch File

// // Declare global variables
// let level = null;
// let player;
// //let orderManager;
// //let gameUI;
// let buttons = [];
// let gameScreen = 0;
let map1 = [
  [
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Lettuce",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "MeatPatty",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Cheese",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Bun",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Plates",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Delivery",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Delivery",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
];
let map2 = [
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Trash",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "MeatPatty",
    "Lettuce",
    "Cheese",
    "Bun",
  ],
  [
    "Floor",
    "Floor",
    "Drink",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Counter",
    "Counter",
    "Plates",
    "Delivery",
    "Delivery",
    "Floor",
    "Floor",
  ],
];
let map3 = [
  [
    "Counter",
    "Lettuce",
    "Bun",
    "Counter",
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Grill",
    "Grill",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Cheese",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "MeatPatty",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Drink",
    "Floor",
    "Floor",
    "Salmon",
    "Seaweed",
    "Rice",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
  ],
  [
    "Counter",
    "Counter",
    "Delivery",
    "Delivery",
    "Plates",
    "Floor",
    "Floor",
    "CuttingBoard",
    "Counter",
    "Counter",
  ],
];
let map4 = [
  [
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Delivery",
    "Delivery",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Counter",
    "Counter",
    "Counter",
    "Plates",
    "Floor",
    "Floor",
    "Plates",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Drink",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Lettuce",
    "Floor",
    "Floor",
    "Salmon",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "MeatPatty",
    "Floor",
    "Floor",
    "Seaweed",
    "Floor",
    "Floor",
    "Trash",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Cheese",
    "Floor",
    "Floor",
    "Rice",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Bun",
    "Floor",
    "Floor",
    "Cucumber",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "CuttingBoard",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
];
let map5 = [
  [
    "Counter",
    "Counter",
    "MeatPatty",
    "Lettuce",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Cheese",
    "Cucumber",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Bun",
    "Salmon",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Drink",
    "Cups",
    "Floor",
    "Floor",
    "Floor",
    "Plates",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Delivery",
  ],
  [
    "CuttingBoard",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Delivery",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Noodles",
    "Rice",
    "Floor",
    "Floor",
    "Floor",
    "Plates",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Tomato",
    "Seaweed",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Trash",
    "Counter",
    "Counter",
  ],
];
let map6 = [
  [
    "Counter",
    "Counter",
    "Noodles",
    "Tomato",
    "MeatBalls",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Cups",
    "Floor",
    "Floor",
    "Cheese",
    "Lettuce",
    "Seaweed",
    "Salmon",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Drink",
    "Floor",
    "Floor",
    "Bun",
    "MeatPatty",
    "Cucumber",
    "Rice",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Counter",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "CuttingBoard",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Grill",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Floor",
    "Counter",
  ],
  [
    "Floor",
    "Floor",
    "Floor",
    "Plates",
    "Delivery",
    "Delivery",
    "Plates",
    "Floor",
    "Floor",
    "Floor",
  ],
];

// function preload() {
//   // Load images, sprites, and other assets if needed
//   // TODO: Load assets
// }

// function setup() {
//   createCanvas(600, 600); // Set the canvas size
//   buttons.push(new Button(50, 50, 120, 50, "Button 1", () => { gameScreen = 1; }));
//   buttons.push(new Button(50, 120, 120, 50, "Button 2", () => { gameScreen = 2; }));
//   buttons.push(new Button(50, 190, 120, 50, "Button 3", () => { gameScreen = 3; }));
//   buttons.push(new Button(50, 260, 120, 50, "Button 4", () => { gameScreen = 4; }));
//   buttons.push(new Button(50, 330, 120, 50, "Button 5", () => { gameScreen = 5; }));
//   buttons.push(new Button(50, 400, 120, 50, "Button 6", () => { gameScreen = 6; }));
//   // Initialize the level
//   // MVP 2: Build the Level class and initialize it here
//   let mapData = [
//     ['C', 'F', 'C', 'C', 'C', 'C', 'C', 'C'],
//     ['C', 'F', 'F', 'F', 'F', 'F', 'F', 'C'],
//     ['C', 'F', 'S_C', 'F', 'F', 'S_K', 'F', 'C'],
//     ['C', 'F', 'F', 'F', 'F', 'F', 'F', 'C'],
//     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
//     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
//     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
//     ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
//   ];

//   // Initialize the player
//   // MVP 1: Build the PlayerController class and initialize it here
//   player = new PlayerController(width / 2, height / 2);

//   // Initialize the order manager
//   // MVP 4: Build the OrderManager class and initialize it here
//   //orderManager = new OrderManager();

//   // Initialize the game UI
//   // MVP 5: Build the GameUI class and initialize it here
//   //gameUI = new GameUI();
// }

// function gamePlay() {
//   background(200); // Clear the background

//   // Draw the level
//   // MVP 2: Ensure Level's drawLevel method works
//   level.drawLevel();

//   // Update and draw the player
//   // MVP 1: Ensure PlayerController's move and draw methods work
//   player.move();
//   player.draw();

//   //// Update and draw orders
//   //// MVP 4: Ensure OrderManager's updateOrders and drawOrders methods work
//   //orderManager.updateOrders();
//   //orderManager.drawOrders();

//   //// Draw the game UI
//   //// MVP 5: Ensure GameUI's drawUI method works
//   //gameUI.drawUI();
// }

// function menuScreen() {
//   background(220);

//   // Draw all buttons
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].display();
//   }
// }

// function draw() {
//   switch (gameScreen) {
//     case 0:
//       level = null;
//       menuScreen()
//       break;
//     case 1:
//       if (level === null) {

//         level = new Level(map1);
//       } else {
//         gamePlay()
//       }
//       break;
//     case 2:
//       if (level === null) {

//         level = new Level(map2);
//       } else {
//         gamePlay()
//       }
//       break;
//     case 3:
//       if (level === null) {

//         level = new Level(map3);
//       } else {
//         gamePlay()
//       }
//       break;
//     case 4:
//         if (level === null) {

//           level = new Level(map4);
//         } else {
//           gamePlay()
//         }
//         break;
//     case 5:
//           if (level === null) {

//             level = new Level(map5);
//           } else {
//             gamePlay()
//           }
//           break;
//       case 6:
//             if (level === null) {

//               level = new Level(map6);
//             } else {
//               gamePlay()
//             }
//             break;
//     default:
//       menuScreen()
//       break;

//   }
// }

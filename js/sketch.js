
const GRID_SIZE = 20;

let snake;
function setup() {
    createCanvas(700,700);
    snake = new Snake();
    food = new Food();
    frameRate(10); // Number of frames to draw per second
}

function draw() {
    background(155, 204, 153); // updates background
    //creates grid
    for(let x = 0; x< innerWidth; x+= width/GRID_SIZE) {
        for (let y = 0; y< innerHeight; y+= height / GRID_SIZE ) {
            stroke(255);
            strokeWeight(1);
            line(x,0,x,height);
            line(0,y,width,y);
        }
    }
    snake.update();

    if (snake.hasEatenFood()) {   // add this code
        food.spawn();
        snake.grow();
    }
    stroke(155, 204, 153);
    snake.draw();
    food.draw();
}


function keyPressed() {
    if (keyCode === 39 && snake.dir !== 3) {
      snake.dir = 1;
    } else if (keyCode === 40 && snake.dir !== 4) {
      snake.dir = 2;
    } else if (keyCode === 37 && snake.dir !== 1) {
      snake.dir = 3;
    } else if (keyCode === 38 && snake.dir !== 2) {
      snake.dir = 4;
    } 
  }

   
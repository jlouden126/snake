
const GRID_SIZE = 20;

let snake;
let gameStarted = false;

function setup() {
    createCanvas(700, 700).parent('game'); // Attach the canvas to the game div
    noLoop(); // Stop the draw loop until the game starts


    // Set up the play button click event
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', startGame);

    const playAgainButton = document.getElementById('play-again-button');
    playAgainButton.addEventListener('click', startGame);

    const mainMenuButton = document.getElementById('main-menu');
    mainMenuButton.addEventListener('click', mainMenu);

    const rulesButton = document.getElementById('rules-button');
    rulesButton.addEventListener('click', rules);
}

function rules() {
    document.getElementById('rules').style.display = 'block';
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.remove('active');
    document.getElementById('main-menu').style.display = 'block';
}

function mainMenu() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('menu').classList.add('active');
    document.getElementById('game').classList.remove('active');
    document.getElementById('rules').classList.remove('active');

}

function startGame() {
    // Hide the menu and show the game
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');

    document.getElementById('game-over').style.display = 'none';
    document.getElementById('play-again-button').style.display = 'none';
    document.getElementById('main-menu').style.display = 'none';

    document.getElementById('scoreboard').innerHTML = `Score: ${0}`;

    // Initialize the snake and start the game
    snake = new Snake();
    frameRate(10);
    food = new Food();
    gameStarted = true;
    loop(); // Start the draw loop
}

function draw() {
    if (!gameStarted) return;

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

    if (snake.hasEatenFood()) {
           // add this code
        food.spawn();
        snake.updateScore();
        snake.grow();
    }
    stroke(155, 204, 153);
    snake.draw();
    food.draw();

    if (!snake.hasGameEnded()) {
        endGame(); // Call endGame function if the game is over
    }
}

function endGame() {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('play-again-button').style.display = 'block';
    document.getElementById('main-menu').style.display = 'block';

    // Reset game state
    gameStarted = false;
    noLoop(); // Stop the draw loop
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



   
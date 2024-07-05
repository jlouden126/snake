class Snake {
    constructor() {
        this.spawn();
    }

    spawn() {
      this.body = []; // Holds segments of snake
      this.body.push({x: width/2, y: height/2}); // the head of the snake
      this.dir = 1; // 1 = right, 2 = down, 3 = left, 4 = right
      this.lastX = width/2;
      this.lastY = height/2;
      this.score = 0; // Initialize score
      this.scoreElement = document.getElementById('scoreboard'); // Get the scoreboard element
      this.alive = true;
    }
  
    draw() {
      fill(0);
      for (let b of this.body) {
        rect(b.x, b.y, width / GRID_SIZE, height / GRID_SIZE)
      }
    }
  
    update() {
        this.hitDetection();
        this.hitWall();

        this.lastX = this.body[this.body.length-1].x;     // track the last X and Y  
        this.lastY = this.body[this.body.length-1].y;     // so we can put the new body there
        for (let i = this.body.length-1; i >= 1; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
      if (this.dir == 1) {
        this.body[0].x += width / GRID_SIZE;  
      } else if (this.dir == 2) {
        this.body[0].y += height / GRID_SIZE;
      } else if (this.dir == 3) {
        this.body[0].x -= width / GRID_SIZE;
      } else if (this.dir == 4) {
        this.body[0].y -= height / GRID_SIZE;
      }
    }

    //Determines if snake runs into itself
    hitDetection() {
        for (let i = 1; i < this.body.length; i++) {
          if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
            console.log("H",this.body[0].x,this.body[0].y);

            this.alive = false;
          }
        }
      }

    hitWall() {
        if (this.body[0].x < 0 || this.body[0].y < 0 || this.body[0].x == width || this.body[0].y == height) {
          this.alive = false;
        }
    }

    updateScore() {
        this.score += 1; // Increase score by 10 (or any other logic for scoring)
        this.scoreElement.innerHTML = `Score: ${this.score}`; // Update the scoreboard
    }

    //Grows the snake
    grow() {
        this.body.push({x: this.lastX, y: this.lastY});
      }

    //Determines if snake has eaten the spawned food
    hasEatenFood() {
        if (this.body[0].x == food.x && this.body[0].y == food.y) {
          return true;     
        }
      }

    hasGameEnded() {
      return this.alive;
    }
  }
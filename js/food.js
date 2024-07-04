class Food {
    constructor() {
      this.spawn();
    }
  
    spawn() {
        //Spawn random food by grid size
      let randX = random(width);
      let randY = random(height);
      this.x = randX - randX % (width / GRID_SIZE);
      this.y = randY - randY % (height / GRID_SIZE);
    }
  
    draw() {
      fill(255, 100, 100);
      rect(this.x, this.y, width / GRID_SIZE, height / GRID_SIZE);
    }
  }
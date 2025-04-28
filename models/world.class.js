class World {
  character = new Character();
  enemies = [
    new PufferFish(),
    new JellyFish(),
    new Endboss()
  ];
  sunlights = [
    new Sunlight()
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    this.enemies.forEach(enemy => {
      this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
    });

    this.sunlights.forEach(sunlight => {
      this.ctx.drawImage(sunlight.img, sunlight.x, sunlight.y, sunlight.width, sunlight.height);
    });

    // draw() is called again and again, FPS ( requestAnimationFrame(() => this.draw());)
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
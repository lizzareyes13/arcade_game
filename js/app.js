// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png'

  }
  render () {
    if (this.speed < 0){
      ctx.save();
      ctx.translate(this.x + 50,0);
      ctx.scale(-1,1);
      ctx.translate(-this.x - 50, 0);
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      ctx.restore();



      }
      else{
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
      }

  }

  update (dt) {
    this.x += this.speed *dt;
    if (this.x < 0){
      this.x = 500;
    }
    if (this.x > 500){
      this.x = 0;
    }
  }

}
class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
  }
  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  }
  update () {
    if (this.x < 0){
      this.x = 0;
    }
    if (this.x >= 400){
      this.x = 400;
    }
    if (this.y < 50){
      this.x = 100;
      this.y = 300;
    }
    if (this.y > 400){
      this.y = 400;
    }
    if (this.checkCollisions(allEnemies[0])){
      this.x = 200;
      this.y = 400;

    }
  }

  handleInput (dir) {

    if (dir === "left"){
      this.x = this.x - 100;
    }
    if (dir === "right"){
      this.x = this.x + 100;
    }
    if (dir === "up"){
      this.y = this.y - 50;
    }
    if (dir === "down"){
      this.y = this.y + 50;
    }

  }
  checkCollisions (enemy) {
    var a = this.x;
    var b = this.y;
    var c = this.x + 101;
    var d = this.y;
    var e = this.x;
    var f = this.y + 171;
    var g = this.x + 101;
    var h = this.y + 171;
    var a0 = enemy.x;
    var b0 = enemy.y;
    var a1 = enemy.x + 101;
    var b2 = enemy.y + 171;

    if (a>a0 && a<a1 && b>b0 && b<b2)
      return true;
    else if (c>a0 && c<a1 && d>b0 && d<b2)
      return true;
    else if (g>a0 && g<a1 && h>b0 && h<b2)
      return true;
    else if (e>a0 && e<a && f>b0 && f<b2)
      return true;


    return false;
  }
}

// Now instantiate your objects.
var player = new Player(0,0);
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
  new Enemy (0,50,150),
  new Enemy (400,50,-150),
  new Enemy (5,140,100),
  new Enemy (400,140,-100),
  new Enemy (0,240,150),
  new Enemy (400,240,-150)

];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };


    player.handleInput(allowedKeys[e.keyCode]);
});

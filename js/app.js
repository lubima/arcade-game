// Enemies our player must avoid
class Enemy {
    constructor(x,y,speed){
        this.x = x;
        this.y = y + 55;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
        this.step = 101;
        this.boundary = this.step * 5;
        this.resetPos = -this.step;
    }
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
       
    // If Enemy is not passed boundary
        if(this.x < this.boundary){
            // Move forward
            // Increment x by speed * dt
            this.x += this.speed * dt;
        }
        else
            // Reset position to start
            this.x = this.resetPos;
    }

// Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player class
class Player {
    //     Constructor
            // Properties
                // x position
                // y position
                // Sprite Image    
    constructor(){
        this.sprite = 'images/char-horn-girl.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
        }
    // Methods
    // Render
    render() {
        // Draw player sprite on current x and y coord position
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Handle keyboard input
    handleInput(input) {
        // Update player's x and y property according to input
        switch(input){
            case 'left':
                if(this.x > 0){
                    this.x -= this.step;
                }
                break;
            case 'up':
                if(this.y > this.jump){
                    this.y -= this.jump;
                }
                break;
            case 'right':
                if(this.x < this.step * 4){
                    this.x += this.step;
                }
                break;
            case 'down':
                if(this.y < this.jump * 4){
                    this.y += this.jump;
                }
                break;
        }
    }
    // Update position
    update() {
        // Check collision here
        for(let enemy of allEnemies) {
            //Did player x and y collide with enemy?
            if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
                this.reset();
            }
        }
        // Check win here?
            // Did player x and y reach final tile?
            if(this.y === 55) {
               this.victory = true; 
            }
        }
    // Reset Player
    reset() {
        // Set x and y to starting x and y 
        this.y = this.startY;
        this.x = this.startX;
    }
}

// New Player object
// Place the player object in a variable called player
// Now instantiate your objects.
const player = new Player();
const bug1 = new Enemy(-101,0,200);
const bug2 = new Enemy(-101,83,300);
const bug3 = new Enemy((-101*2.5),83,300);
// Init allEnemies array
// For each enemy create and push new Enemy object into above array
const allEnemies = [];
// Place all enemy objects in an array called allEnemies
allEnemies.push(bug1,bug2,bug3);


// This listens for key presses and sends the keys to your
// --Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

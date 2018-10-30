// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(){
        this.sprite = 'images/enemy-bug.png';
    }
    // x position
    // y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If Enemy is not passed boundary
        // Move forward
        // Increment x by speed * dt
    // else
        // Reset position to start
    }

// Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Player class
//     Constructor
//         Properties
//             x position
//             y position
//             Sprite Image    
class Player {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/char-horn-girl.png';
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

//         Methods
                // Update position
                    // Check collision here
                        //Did player x and y collide with enemy?
                    // Check win here?
                        // Did player x and y reach final tile?
                // Render
                    // Draw player sprite on current x and y coord position
                    
                // Handle keyboard input
                    // Update player's x and y property according to input
                // Reset Player
                    // Set x and y to starting x and y 

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// New Player object
const player = new Player();
// Init allEnemies array
// let allEnemies = [];
// For wach enemy create and push new Enemy object into above array


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var managers;
(function (managers) {
    // Keyboard Class
    var Keyboard = /** @class */ (function () {
        // CONSTRUCTOR 
        function Keyboard(player) {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            this.player = player;
        }
        // PUBLIC METHODS
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = true;
                    break;
                case config.Key.LEFT_ARROW:
                    this.moveLeft = true;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = true;
                    break;
                case config.Key.RIGHT_ARROW:
                    this.moveRight = true;
                    break;
                case 81:/* pause */ 
                    this.paused = (this.paused) ? false : true;
                    break;
                case config.Key.A:
                    this.turnLeft = true;
                    break;
                case config.Key.D:
                    this.turnRight = true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = false;
                    break;
                case config.Key.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = false;
                    break;
                case config.Key.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
                case config.Key.A:
                    this.turnLeft = false;
                    break;
                case config.Key.D:
                    this.turnRight = false;
                    break;
            }
        };
        Keyboard.prototype.MovePlayer = function () {
            // correct direction
            var direction = (this.player.rotation - 90) * -1;
            if (this.moveRight) {
                this.player.x += 5;
            }
            if (this.moveLeft) {
                this.player.x -= 5;
            }
            if (this.moveForward) {
                this.player.y -= 5;
            }
            if (this.moveBackward) {
                this.player.y += 5;
            }
            if (this.turnLeft) {
                this.player.rotation -= 5;
            }
            if (this.turnRight) {
                this.player.rotation += 5;
            }
        };
        Keyboard.prototype.Update = function () {
            this.MovePlayer();
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map
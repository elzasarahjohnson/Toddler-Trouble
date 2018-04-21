var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Baby = /** @class */ (function (_super) {
        __extends(Baby, _super);
        // CONSTRUCTORS
        function Baby(target) {
            var _this = _super.call(this, "baby") || this;
            _this.range = 25;
            _this.screenWidth = 640;
            _this.screenHeight = 480;
            _this.Start();
            _this.health = 1;
            _this.target = target;
            return _this;
        }
        // PRIVATE METHODS
        Baby.prototype._checkBounds = function () {
            if (this.x >= config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        Baby.prototype.Reset = function () {
            this.health = 1;
            var borderRandNum = Math.random();
            var spawnPoint = new objects.vec2(0, 0);
            if (borderRandNum > 0.75) {
                //top
                spawnPoint.x = Math.random() * this.screenWidth;
                spawnPoint.y = -0.1 * this.screenHeight;
            }
            else if (borderRandNum > 0.50) {
                //left
                spawnPoint.x = -0.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            }
            else if (borderRandNum > 0.25) {
                //right
                spawnPoint.x = 1.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            }
            else {
                //bottom
                spawnPoint.x = Math.random() * this.screenWidth;
                spawnPoint.y = 1.1 * this.screenHeight;
            }
            this.x = spawnPoint.x;
            this.y = spawnPoint.y;
        };
        Baby.prototype.GetHit = function () {
            this.health--;
            if (this.health <= 0) {
                this.Sleep();
            }
        };
        // PUBLIC METHODS
        Baby.prototype.Start = function () {
            this.Reset();
            //this.bubbles = new createjs.Point(this.y - 35, this.x);
        };
        Baby.prototype.Update = function () {
            //this.bubbles.x = this.x;
            //this.bubbles.y = this.y - 35;
            this._checkBounds();
            this.ChaseTarget();
        };
        Baby.prototype.ChaseTarget = function () {
        };
        Baby.prototype.OnCollisionEnter = function () {
            this.health--;
            if (this.health <= 0) {
                this.Reset();
            }
        };
        return Baby;
    }(objects.GameObject));
    objects.Baby = Baby;
})(objects || (objects = {}));
//# sourceMappingURL=baby.js.map
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
    var Character = /** @class */ (function (_super) {
        __extends(Character, _super);
        // CONSTRUCTORS
        function Character() {
            var _this = _super.call(this, "character") || this;
            _this.Start();
            _this.health = 10;
            return _this;
        }
        // PRIVATE METHODS
        Character.prototype._checkBounds = function () {
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
        Character.prototype.OnCollisionEnter = function () {
            this.health--;
            if (this.health <= 0) {
                this.Destroy();
            }
        };
        // PUBLIC METHODS
        Character.prototype.Start = function () {
            this.x = 320;
            this.y = 430;
            this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
        };
        Character.prototype.Update = function () {
            this.bulletSpawn.x = this.x;
            this.bulletSpawn.y = this.y - 35;
            this._checkBounds();
            // this.health-= 0.1;
        };
        Character.prototype.Fire = function () {
            var bubble = new objects.Bubble(this.bulletSpawn);
            this.parent.addChild(bubble);
        };
        return Character;
    }(objects.GameObject));
    objects.Character = Character;
})(objects || (objects = {}));
//# sourceMappingURL=character.js.map
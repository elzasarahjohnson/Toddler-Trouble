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
        };
        Baby.prototype.GetHit = function () {
            this.health--;
            if (this.health <= 0) {
                this.Destroy();
            }
        };
        // PUBLIC METHODS
        Baby.prototype.Start = function () {
            this.Reset();
            this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
        };
        Baby.prototype.Update = function () {
            this.bulletSpawn.x = this.x;
            this.bulletSpawn.y = this.y - 35;
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
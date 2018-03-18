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
    var Bubble = /** @class */ (function (_super) {
        __extends(Bubble, _super);
        function Bubble(position) {
            var _this = _super.call(this, "bubbles") || this;
            _this.position = position;
            _this.Start();
            _this.x = position.x;
            _this.y = position.y;
            return _this;
        }
        Bubble.prototype._reset = function () {
            this.y = -1000;
            this.x = -1000;
        };
        Bubble.prototype._checkBounds = function () {
            if (this.y <= 0 + this.height || this.y >= 0 + this.height) {
                this._reset();
            }
        };
        Bubble.prototype.Start = function () {
            this._speed = 10;
            this._reset();
        };
        Bubble.prototype.Update = function () {
            this._checkBounds();
            if (this._speed > 0) {
            }
        };
        return Bubble;
    }(objects.GameObject));
    objects.Bubble = Bubble;
})(objects || (objects = {}));
//# sourceMappingURL=bubble.js.map
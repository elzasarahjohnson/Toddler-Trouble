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
    var Nursery = /** @class */ (function (_super) {
        __extends(Nursery, _super);
        // CONSTRUCTORS 
        function Nursery(assetManager) {
            var _this = _super.call(this, assetManager.getResult("Nursery")) || this;
            _this.Start();
            return _this;
        }
        Nursery.prototype._reset = function () {
            this.y = 0;
        };
        Nursery.prototype._checkBounds = function () {
            if (this.y > 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        Nursery.prototype.Start = function () {
            this._reset();
            //this._dy = 5; // 5px per frame down
        };
        Nursery.prototype.Update = function () {
            //this.y += this._dy;
            this._checkBounds();
        };
        return Nursery;
    }(createjs.Shape));
    objects.Nursery = Nursery;
})(objects || (objects = {}));
//# sourceMappingURL=nursery.js.map
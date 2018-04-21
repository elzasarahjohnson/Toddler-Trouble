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
    //vec2 - inherit Point class
    var vec2 = /** @class */ (function (_super) {
        __extends(vec2, _super);
        function vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        /**
         * returns the length of this vec2
         *
         * @returns {number}
         * @memberof vec2
         */
        vec2.ToPoint = function (point) {
            return new vec2(point.x, point.y);
        };
        /**
         * returns the length of this vec2
         *
         * @returns {number}
         * @memberof vec2
         */
        vec2.prototype.Magnitude = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        /**
         * returns a vec2 with the same direction and a length of 1
         *
         * @memberof vec2
         */
        vec2.prototype.Normalize = function () {
            return this.Multiply(1 / this.Magnitude());
        };
        /**
         * returns the sum of this vec2 and another vec2
         *
         * @param {vec2} other the other vec2, to be added to this one
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.Add = function (other) {
            return new vec2(this.x + other.x, this.y + other.y);
        };
        /**
         * returns the product of this vec2 and a number
         *
         * @param {number} other the number to multiply this vec2 by
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.prototype.Multiply = function (other) {
            return new vec2(this.x * other, this.y * other);
        };
        /**
         * calculates and returns the distance between two vec2s
         *
         * @static
         * @param {vec2} a first vec2
         * @param {vec2} b the other vec2
         * @returns {number}
         * @memberof vec2
         */
        vec2.Distance = function (a, b) {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
        };
        /**
         * This method rotates a vector based on a rotation in degrees
         * @param {vec2} rotation
         * @returns {number}
         * @memberof vec2
         */
        vec2.prototype.Rotate = function (rotation) {
            var radRotation;
            radRotation = rotation * Math.PI / 180;
            return new vec2(this.x * Math.cos(radRotation) - this.y * Math.sin(radRotation), this.x * Math.sin(radRotation) + this.y * Math.cos(radRotation));
        };
        /**
         * It defines the current angle of the vector in the world.
         */
        vec2.prototype.Rotation = function () {
            return Math.atan2(this.y, this.x) * 180 / Math.PI;
        };
        /**
         * calculates and returns a vec2 representing a rotation's forward direction
         *
         * @static
         * @param {number} rot rotation, in degrees
         * @returns {vec2}
         * @memberof vec2
         */
        vec2.DegreeToVector = function (rot) {
            return new vec2(Math.cos(rot * Math.PI / 180), Math.sin(rot * Math.PI / 180));
        };
        /**
        * calculates and returns a rotation from currentVector to targetVector
        *
        * @static
        * @param {vec2} currentVector current position, @param {vec2} targetVector
        * @returns {number} rotation
        * @memberof number
        */
        vec2.RotateTowardPosition = function (currentVector, targetVector) {
            return Math.atan2(targetVector.y - currentVector.y, targetVector.x - currentVector.x) * (180 / Math.PI);
        };
        /**
         * calculates and returns the next postion according to the provided vectors and speed
         * Ed: may not need, use Forward() instead
         * @static
         * @param {vec2} currentVector current position, @param {vec2} targetVector  degrees @param {number} speed
         * @returns {vec2} rotation
         * @memberof number
         */
        vec2.movePosition = function (currentVector, targetVector, speed) {
            var distanceVector = new vec2(currentVector.x - targetVector.x, currentVector.y - targetVector.y);
            //you call this to get a normal of 1 in the desired direction 
            var returnDistanceVector = new vec2();
            returnDistanceVector.x = (distanceVector.x / (distanceVector.x + distanceVector.y));
            returnDistanceVector.y = (distanceVector.y / (distanceVector.x + distanceVector.y));
            return returnDistanceVector;
        };
        vec2.UP = new vec2(1, 0);
        vec2.RIGHT = new vec2(0, 1);
        return vec2;
    }(createjs.Point));
    objects.vec2 = vec2;
})(objects || (objects = {}));
//# sourceMappingURL=vec2.js.map
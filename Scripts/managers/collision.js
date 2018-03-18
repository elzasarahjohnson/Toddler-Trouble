var managers;
(function (managers) {
    //Collision Class - the class to provide collisions
    var Collision = /** @class */ (function () {
        function Collision() {
            this.Start();
        }
        Collision.prototype.Start = function () {
        };
        Collision.prototype.Update = function () {
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
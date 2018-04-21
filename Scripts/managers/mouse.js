var managers;
(function (managers) {
    // Mouse Class
    var Mouse = /** @class */ (function () {
        // CONSTRUCTOR 
        function Mouse(player, area) {
            this.listeners = [];
            this.player = player;
            this.area = area;
        }
        // PUBLIC METHODS
        Mouse.prototype.PlayerFollowMouse = function () {
            //this._dx = objects.Game.stage.mouseX - this.player.x;
            // this._dy = objects.Game.stage.mouseY - this.player.y;
            // find the angle of rotation
            this.direction = Math.atan2(this._dy, this._dx) * (180 / Math.PI) + 90;
            this.player.rotation = this.direction;
        };
        Mouse.prototype.Update = function () {
            this.PlayerFollowMouse();
        };
        Mouse.prototype.AddClickListener = function (listener) {
            this.area.addEventListener("click", listener);
            this.listeners.push(listener);
        };
        Mouse.prototype.RemoveAllListeners = function () {
            var _this = this;
            this.listeners.forEach(function (listener) { _this.area.removeEventListener("click", listener); });
        };
        return Mouse;
    }());
    managers.Mouse = Mouse;
})(managers || (managers = {}));
//# sourceMappingURL=mouse.js.map
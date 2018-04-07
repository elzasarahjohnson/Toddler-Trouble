//Abubakir Myrzaly - 300931945
//Sushmita Nandalan - 300923159
//ashley tjon-hing - 300744476
//elza sarah johnson - 300911775
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
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Constructor
        function OverScene() {
            var _this = _super.call(this) || this;
            _this._backButtonClick = _this._backButtonClick.bind(_this);
            _this.Start();
            return _this;
        }
        // Private Mathods
        OverScene.prototype._backButtonClick = function () {
            managers.Game.currentScene = config.Scene.PLAY;
            this._endScreenMusic.stop();
            this.removeAllChildren();
        };
        // Initialize Game Variables and objects
        OverScene.prototype.Start = function () {
            this._someScore = 10;
            this._endScreenMusic = createjs.Sound.play("endSceneMusic");
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
            //Need to add "PlayAgainButton"
            //this._replayButton = new objects.Button("playAgainButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 40, true);
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.Main = function () {
            // add the welcome,backButton,score,replay label to the scene
            this.addChild(this._overLabel);
            this.addChild(this._backButton);
            this.addChild(this._replayButton);
            this.addChild(this._scoreLabel);
            // event listeners
            this._backButton.on("click", this._backButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map
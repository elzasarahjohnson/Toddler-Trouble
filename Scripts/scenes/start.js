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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            //this._currentScene = currentScene;
            _this._startButton = _this._startButtonClick.bind(_this);
            _this.Start();
            return _this;
        }
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            //console.log("Start Scene");
            this._startScreenMusic = createjs.Sound.play("startMusic");
            this._startScreenMusic.loop = -1; // play forever
            this._startScreenMusic.volume = 0.3;
            this._background = new createjs.Bitmap("./Assets/images/Backgrounds/Nursery.png");
            this._welcomeLabel = new createjs.Bitmap("./Assets/images/TodTroLogo.png");
            this._startButton = new objects.Button(this.assetManager, "startButton", 500, 400);
            this.Main();
            console.log("Loaded Start Scene");
        };
        // Private Methods
        StartScene.prototype._startButtonClick = function (event) {
            managers.Game.currentScene = config.Scene.PLAY;
            this._startScreenMusic.stop();
            this.removeAllChildren();
        };
        StartScene.prototype.Update = function () {
            //return this._currentScene;
            //return objects.Game.currentScene;
        };
        // This is where the fun happens
        StartScene.prototype.Main = function () {
            // add the welcome,startButton,background label to the scene
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map
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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Public Properties
        // Constructor
        function PlayScene(currentScene, assetManager) {
            var _this = _super.call(this, assetManager) || this;
            objects.Game.currentScene = currentScene;
            _this.setBounds(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
            _this.Start();
            return _this;
        }
        // Private Mathods
        /*private _nextButtonClick():void {
          objects.Game.currentScene = config.Scene.END;
        }*/
        PlayScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        // Initialize Game Variables and objects
        PlayScene.prototype.Start = function () {
            this.healthBar = new objects.Label("Tank Game", "60px", "Dock51", "#228B22", 150, 40, true);
            this._playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            //this._nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this._backButton = new objects.Button(this.assetManager, "backButton", 140, 340);
            this._playerHealth = new objects.Label("Play Scene", "20px", "Consolas", "#ff0000", config.Screen.WIDTH * 0.1, config.Screen.WIDTH * 0.1, true);
            this._character = new objects.Character();
            this._baby = new objects.Baby(this._character);
            this._keyboard = new managers.Keyboard(this._character);
            this._collision = new managers.Collision();
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this._character.Update();
            this._baby.Update();
            //this._mouse.Update();
            this._keyboard.Update();
            this._playerHealth.text = "Health: " + this._character.health;
            if (this._character.health <= 0) {
                objects.Game.currentScene = config.Scene.OVER;
                //this._mouse.RemoveAllListeners();
            }
            this._collision.CheckCollision(this._character, this._baby);
            return objects.Game.currentScene;
            // if lives fall below zero switch scenes to the game over scene
            if (this.ScoreBoard.Lives <= 0) {
                managers.Game.currentScene = config.Scene.OVER;
            }
            //Switch to Level 2 if Score reaches 500
            if (this._scoreBoard.Score >= 500) {
                managers.Game.currentScene = config.Scene.LEVEL2;
            }
        };
        // This is where the fun happens
        PlayScene.prototype.Main = function () {
            // add the welcome label to the scene
            this.addChild(this._playLabel);
            // add the nextButton to the scene
            this.addChild(this._nextButton);
            // add the backButton to the scene
            this.addChild(this._backButton);
            this.addChild(this._character);
            this.addChild(this._baby);
            this.addChild(this._playerHealth);
            this.addChild(this._nursery);
            // event listeners
            //this._nextButton.on("click", this._nextButtonClick);
            this._backButton.on("click", this._backButtonClick);
            //this._mouse.AddClickListener((event)=>{this._character.Fire();)}
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
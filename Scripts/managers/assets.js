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
var managers;
(function (managers) {
    var assetManifest = [
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "startBackground", src: "./Assets/images/tank_background.jpg" },
        { id: "endBackground", src: "./Assets/images/tank_end_screen_background.jpg" },
        { id: "startScreenButton", src: "./Assets/images/startScreenButton.png" },
        { id: "playAgainButton", src: "./Assets/images/playAgainButton.png" },
        { id: "restartButton", src: "./Assets/images/restartButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "tank", src: "./Assets/images/greenTank.png" },
        { id: "enemy", src: "./Assets/images/redTank.png" },
        { id: "startSceneMusic", src: "./Assets/audio/Game-Menu.mp3" },
        { id: "playSceneMusic", src: "./Assets/audio/Game_Playing_Theme.mp3" },
        { id: "endSceneMusic", src: "./Assets/audio/Retro_No_Hope.mp3" },
        { id: "floor", src: "./Assets/images/metalFloor.png" },
    ];
    var AssetManager = /** @class */ (function (_super) {
        __extends(AssetManager, _super);
        function AssetManager() {
            var _this = _super.call(this) || this;
            _this.manifest = new Array();
            _this.manifest = assetManifest;
            _this.installPlugin(createjs.Sound);
            _this.loadManifest(_this.manifest);
            return _this;
        }
        AssetManager.prototype.addItem = function (id, src) {
            this.manifest.push({ id: id, src: src });
            this.loadManifest(this.manifest);
        };
        return AssetManager;
    }(createjs.LoadQueue));
    managers.AssetManager = AssetManager;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map
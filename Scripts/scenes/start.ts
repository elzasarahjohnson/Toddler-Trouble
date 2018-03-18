//Abubakir Myrzaly - 300931945
//Sushmita Nandalan - 300923159
//ashley tjon-hing - 300744476
//elza sarah johnson - 300911775

module scenes {

  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _background: createjs.Bitmap;
    private _startScreenMusic: createjs.AbstractSoundInstance;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      //this._currentScene = currentScene;
      this._startButton = this._startButtonClick.bind(this);
      this.Start();
    }

    // Private Mathods
    private _startButtonClick(event: createjs.MouseEvent):void {
      objects.Game.currentScene = config.Scene.PLAY;
      this._startScreenMusic.stop();
      this.removeAllChildren();
    }

    // Initialize Game Variables and objects
    public Start(): void {
      console.log("Start Scene");
      this._startScreenMusic = createjs.Sound.play("startSceneMusic");
      //this._background = new createjs.Bitmap(objects.Game.assetManager.getResult("startBackground"));
      this._welcomeLabel = new objects.Label("Welcome", "60px", "Consolas", "#000000", 320, 240, true);
      this._startButton = new objects.Button(this.assetManager, "startButton", 320, 340);
      this.Main();
    }

    public Update() {
      //return this._currentScene;
      return objects.Game.currentScene;
    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome,startButton,background label to the scene
      this.addChild(this._welcomeLabel);
      this.addChild(this._startButton);
      this.addChild(this._background);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}

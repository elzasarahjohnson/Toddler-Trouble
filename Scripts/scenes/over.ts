//Abubakir Myrzaly - 300931945
//Sushmita Nandalan - 300923159
//ashley tjon-hing - 300744476
//elza sarah johnson - 300911775

module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _scoreLabel: objects.Label;
    private _overLabel: objects.Label;
    private _replayButton: objects.Button;
    private _backButton: objects.Button
    private _endScreenMusic: createjs.AbstractSoundInstance;
    private _someScore: number;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this._backButtonClick = this._backButtonClick.bind(this);
      this.Start();
    }

    // Private Mathods
    private _backButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
      this._backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome,backButton,score,replay label to the scene
      this.addChild(this._overLabel);
      this.addChild(this._backButton);
      this.addChild(this._replayButton)

      // event listeners
      this._backButton.on("click", this._backButtonClick);
    }
  }
}

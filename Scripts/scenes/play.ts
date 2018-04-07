module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _playLabel: objects.Label;
    private _nextButton: objects.Button;
    private _backButton: objects.Button;
    private _character: objects.Character;
    private _baby: objects.Baby;
    private _keyboard:managers.Keyboard;
    private _collision:managers.Collision;
    private _playerHealth:objects.Label;
    private _scoreBoard:managers.ScoreBoard;
    private healthBar:objects.Label;

    public _nursery:objects.Nursery;


    // Public Properties

    // Constructor
    constructor() {
      super();

     // objects.Game.currentScene = currentScene;
      this.setBounds(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
      this.Start();
    }

    // Private Mathods
    /*private _nextButtonClick():void {
      objects.Game.currentScene = config.Scene.END;
    }*/

    private _backButtonClick():void {
      managers.Game.currentScene = config.Scene.START;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {

      this.healthBar = new objects.Label("Tank Game", "60px", "Dock51", "#228B22", 150, 40, true);
      this._playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
      //this._nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
      this._backButton = new objects.Button(this.assetManager, "backButton", 140, 340);

      this._playerHealth = new objects.Label("Play Scene", "20px", "Consolas","#ff0000" , config.Screen.WIDTH*0.1, config.Screen.WIDTH*0.1, true);

      this._character = new objects.Character();
     // this._baby = new objects.Baby(this._character);

      this._keyboard = new managers.Keyboard(this._character);

      this._scoreBoard = new managers.ScoreBoard();

      this._collision = new managers.Collision();
      this.Main();
    }

    public Update(): void {
      this._character.Update();
     // this._baby.Update();
      //this._mouse.Update();
      this._keyboard.Update();
      this._playerHealth.text = "Health: " + this._character.health;

      if (this._character.health <= 0){
        managers.Game.currentScene = config.Scene.OVER;
        //this._mouse.RemoveAllListeners();
      }

     // this._collision.CheckCollision(this._character, this._baby);
     // return objects.Game.currentScene;

      // if lives fall below zero switch scenes to the game over scene
      if(this._scoreBoard.Lives <= 0) {
        managers.Game.currentScene = config.Scene.OVER;
      }

      //Switch to Level 2 if Score reaches 500
      if(this._scoreBoard.Score >= 500) {
        managers.Game.currentScene = config.Scene.LEVEL2;
      }


    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._playLabel);

      // add the nextButton to the scene
      this.addChild(this._nextButton);

      // add the backButton to the scene
      this.addChild(this._backButton);

      this.addChild(this._character);
     // this.addChild(this._baby);
      this.addChild(this._playerHealth);
      this.addChild(this._nursery);

      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.ScoreLabel);

      // event listeners
      //this._nextButton.on("click", this._nextButtonClick);

      this._backButton.on("click", this._backButtonClick);
      //this._mouse.AddClickListener((event)=>{this._character.Fire();)}
      
    }
  }
}
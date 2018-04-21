module objects {

  export abstract class GameObject extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES
    public halfHeight:number;
    public halfWidth:number;
    public height:number;
    public horizontalSpeed:number;
    public isColliding:boolean;
    public position:createjs.Point;
    public verticalSpeed:number;
    public width:number;
    isTrigger:boolean = false;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(imageString: string) {
      super(managers.Game.assetManager.getResult(imageString));
      this.name = imageString;

      this._initialize();
    }
    // PROTECTED METHODS

    private _initialize(): void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.position = new createjs.Point(this.x, this.y);
      this.isColliding = false;
    }


    public Sleep(): void {
      this.parent.removeChild(this);
    }
    // PUBLIC METHODS
    public abstract Start(): void;

    public abstract Update():void;

    public OnCollisionEnter(): void {
      this.isColliding = true;
    }
  }
}
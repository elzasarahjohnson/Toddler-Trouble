module objects {

export class Baby extends objects.GameObject {
    // PRIVATE INSTANCE VARIABLES
    bulletSpawn: createjs.Point;
    target: objects.Character;
    range: number = 25;
    screenWidth: number = 640;
    screenHeight: number = 480;

    // PUBLIC PROPERTIES
    public health: number;
    // CONSTRUCTORS
    constructor(target: objects.Character) {
      super("baby");
      this.Start();
      this.health = 1;
      this.target = target;
    }
    // PRIVATE METHODS
    private _checkBounds() {
      if (this.x >= config.Screen.WIDTH - this.halfWidth) {
        this.x = config.Screen.WIDTH - this.halfWidth;
      }
      if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }

      if (this.y >= config.Screen.HEIGHT - this.halfHeight) {
        this.y = config.Screen.HEIGHT - this.halfHeight;
      }

      if (this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }
    }

    public Reset(): void {
      this.health = 1;
      
    }

    public GetHit(): void {
      this.health--;
      if (this.health <= 0) {
        this.Destroy();
      }
    }

    // PUBLIC METHODS
    public Start(): void {
      this.Reset();
      this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
    }

    public Update(): void {
      this.bulletSpawn.x = this.x;
      this.bulletSpawn.y = this.y - 35;
      this._checkBounds();
      this.ChaseTarget();
    }


    public ChaseTarget() {

    }

    public OnCollisionEnter() {
      this.health --;
      if (this.health <= 0) {
        this.Reset();
      }
    }
  }
}

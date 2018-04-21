module objects {

  export class Baby extends objects.GameObject {
      // PRIVATE INSTANCE VARIABLES
      bubbles: createjs.Point;
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
        let borderRandNum = Math.random();
        let spawnPoint = new vec2(0, 0);
        if (borderRandNum > 0.75) {
            //top
            spawnPoint.x = Math.random() * this.screenWidth;
            spawnPoint.y = -0.1 * this.screenHeight;
        } else if (borderRandNum > 0.50) {
            //left
            spawnPoint.x = -0.1 * this.screenWidth;
            spawnPoint.y = Math.random() * this.screenHeight;
        } else if (borderRandNum > 0.25) {
            //right
            spawnPoint.x = 1.1 * this.screenWidth;
            spawnPoint.y = Math.random() * this.screenHeight;
        } else {
            //bottom
            spawnPoint.x = Math.random() * this.screenWidth;
            spawnPoint.y = 1.1 * this.screenHeight;
        }
        this.x = spawnPoint.x;
        this.y = spawnPoint.y;
      }
  
      public GetHit(): void {
        this.health--;
        if (this.health <= 0) {
          this.Sleep();
        }
      }
  
      // PUBLIC METHODS
      public Start(): void {
        this.Reset();
        //this.bubbles = new createjs.Point(this.y - 35, this.x);
      }
  
      public Update(): void {
        //this.bubbles.x = this.x;
        //this.bubbles.y = this.y - 35;
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
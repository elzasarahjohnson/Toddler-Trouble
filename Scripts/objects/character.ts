module objects {

    export class Character extends objects.GameObject{
      // PRIVATE INSTANCE VARIABLES
      bulletSpawn:createjs.Point;
  
  
      // PUBLIC PROPERTIES
      public health : number;
      // CONSTRUCTORS
      constructor() {
        super("character");
        this.Start();
        this.health = 10;
      }
      // PRIVATE METHODS
      private _checkBounds() {
        if(this.x >= config.Screen.WIDTH - this.halfWidth) {
          this.x = config.Screen.WIDTH - this.halfWidth;
        }
        if(this.x <= this.halfWidth) {
          this.x = this.halfWidth;
        }
  
        if(this.y >= config.Screen.HEIGHT - this.halfHeight) {
          this.y = config.Screen.HEIGHT - this.halfHeight;
        }
  
        if(this.y <= this.halfHeight) {
          this.y = this.halfHeight;
        }
      }
  
      public OnCollisionEnter():void{
        this.health--;
        if (this.health <= 0){
          this.Destroy();      
        }
      }
  
      // PUBLIC METHODS
      public Start():void {
        this.x = 320;
        this.y = 430;
        this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
      }
  
      public Update():void {
        this.bulletSpawn.x = this.x;
        this.bulletSpawn.y = this.y - 35;
        this._checkBounds();
        // this.health-= 0.1;
      }
      
      public Fire():void{
        let bubble = new objects.Bubble(this.bulletSpawn);
        this.parent.addChild(bubble);
      }
    }
  }
  
module managers {
    // Mouse Class
    export class Mouse {
      // PRIVATE INSTANCE VARIABLES
      private _dx:number;
      private _dy:number;
  
  
      // PUBLIC INSTANCE VARIABLES
      public direction:number;
      public player:objects.GameObject;
      private listeners = [];
      public area:HTMLElement;
  
  
      // CONSTRUCTOR 
      constructor(player:objects.GameObject, area:HTMLElement) {
        this.player = player;
        this.area = area;
      }
  
      // PUBLIC METHODS
       public PlayerFollowMouse():void {
        this._dx = objects.GameObject.stage.mouseX - this.player.x;
        this._dy = objects.GameObject.stage.mouseY - this.player.y;
        // find the angle of rotation
        this.direction = Math.atan2(this._dy, this._dx) * (180 / Math.PI) + 90;
         this.player.rotation = this.direction;
      }
  
  
      public Update():void {
        this.PlayerFollowMouse();
      }
      
      public AddClickListener(listener: { (event:any): void }): void {
        this.area.addEventListener("click", listener);
        this.listeners.push(listener);
      }
  
      public RemoveAllListeners(){
        this.listeners.forEach((listener)=>{this.area.removeEventListener("click", listener)});
      }
    }
  }
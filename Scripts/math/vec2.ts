module math {
  export class vec2 extends createjs.Point {
    //private instance variables

    //public properties

    // constructors
    constructor(x:number = 0, y:number = 0) {
      super(x, y);
    }

    // private methods

    // public methods

    // calculates the distance between two Vec2 objects
    public static Distance(P1:vec2, P2:vec2):number {
      return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
    }
  }
}
module objects {
    
  //vec2 - inherit Point class
  export class vec2 extends createjs.Point {
      constructor(x: number = 0, y: number = 0) {
          super(x, y);
      }

      /**
       * returns the length of this vec2
       * 
       * @returns {number} 
       * @memberof vec2
       */
      public static ToPoint(point: createjs.Point): vec2 {
          return new vec2(point.x, point.y);
      }

      /**
       * returns the length of this vec2
       * 
       * @returns {number} 
       * @memberof vec2
       */
      public Magnitude(): number {
          return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
      }

      /**
       * returns a vec2 with the same direction and a length of 1
       * 
       * @memberof vec2
       */
      public Normalize(): vec2 {
          return this.Multiply(1 / this.Magnitude());
      }

      /**
       * returns the sum of this vec2 and another vec2
       * 
       * @param {vec2} other the other vec2, to be added to this one
       * @returns {vec2} 
       * @memberof vec2
       */
      public Add(other: vec2): vec2 {
          return new vec2(this.x + other.x, this.y + other.y);
      }

      /**
       * returns the product of this vec2 and a number
       * 
       * @param {number} other the number to multiply this vec2 by
       * @returns {vec2} 
       * @memberof vec2
       */
      public Multiply(other: number): vec2 {
          return new vec2(this.x * other, this.y * other);
      }


      /**
       * calculates and returns the distance between two vec2s
       * 
       * @static
       * @param {vec2} a first vec2
       * @param {vec2} b the other vec2
       * @returns {number} 
       * @memberof vec2
       */
      public static Distance(a: vec2, b: vec2): number {
          return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
      }
      /**
       * This method rotates a vector based on a rotation in degrees
       * @param {vec2} rotation 
       * @returns {number}
       * @memberof vec2
       */
      public Rotate(rotation: number):vec2{
          let radRotation:number;
          radRotation =  rotation * Math.PI / 180;

          return new vec2( this.x * Math.cos(radRotation) - this.y * Math.sin(radRotation),
                              this.x * Math.sin(radRotation) + this.y * Math.cos(radRotation)
                              );
      }

      /**
       * It defines the current angle of the vector in the world.
       */
      public Rotation():number {
          return Math.atan2(this.y, this.x) * 180/Math.PI;
      }

      /**
       * calculates and returns a vec2 representing a rotation's forward direction
       * 
       * @static
       * @param {number} rot rotation, in degrees
       * @returns {vec2} 
       * @memberof vec2
       */
      public static DegreeToVector(rot: number): vec2 {
          return new vec2(Math.cos(rot * Math.PI / 180), Math.sin(rot * Math.PI / 180));
      }

       /**
       * calculates and returns a rotation from currentVector to targetVector
       * 
       * @static
       * @param {vec2} currentVector current position, @param {vec2} targetVector  
       * @returns {number} rotation
       * @memberof number
       */
      public static RotateTowardPosition(currentVector: vec2, targetVector: vec2): number{
          return Math.atan2(targetVector.y - currentVector.y, targetVector.x - currentVector.x) * (180/Math.PI);
      }
      /**
       * calculates and returns the next postion according to the provided vectors and speed
       * Ed: may not need, use Forward() instead
       * @static
       * @param {vec2} currentVector current position, @param {vec2} targetVector  degrees @param {number} speed 
       * @returns {vec2} rotation
       * @memberof number
       */
      public static movePosition(currentVector: vec2, targetVector: vec2, speed){
          let distanceVector = new vec2(currentVector.x-targetVector.x, currentVector.y-targetVector.y);
          //you call this to get a normal of 1 in the desired direction 
          let returnDistanceVector = new vec2();
          returnDistanceVector.x = (distanceVector.x /( distanceVector.x + distanceVector.y));
          returnDistanceVector.y = (distanceVector.y /( distanceVector.x + distanceVector.y));
          return returnDistanceVector;
      }


      public static UP = new vec2(1, 0);
      public static RIGHT = new vec2(0, 1);
  }
}
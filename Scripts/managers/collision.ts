module managers {
  export class Collision {


    public CheckCollision(object1:objects.GameObject, object2:objects.GameObject):void {
      // define points for both object1 and object2
      let P1 = new objects.vec2(object1.x, object1.y);
      let P2 = new objects.vec2(object2.x, object2.y);

      // check if there is a collision
      if(objects.vec2.Distance(P1, P2 ) <  (object1.halfHeight + object2.halfHeight) ) {
          if(!object2.isColliding) {
            object2.isColliding = true;
            switch(object2.name) {
              case "cupcake":
                //createjs.Sound.play("yay");
                managers.Game.scoreBoard.Lives += 1;
              break;
              case "baby":
                //createjs.Sound.play("thunder");
                managers.Game.scoreBoard.Lives -= 1;
              break;
            }

          }
      }
      else {
        object2.isColliding = false;
      }
    }
  }
}
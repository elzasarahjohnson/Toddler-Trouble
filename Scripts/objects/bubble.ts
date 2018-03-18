module objects {

    export class Bubble extends objects.GameObject {

        private _speed:number;

        constructor(position: createjs.Point){
            super("bubbles");
            this.position = position;
            this.Start();

            this.x = position.x;
            this.y = position.y;
        }

        private _reset():void {
            this.y = -1000;
            this.x = -1000;
        }

        private _checkBounds():void{
            if (this.y <= 0 + this.height || this.y >= 0 + this.height) {
                this._reset();
            }
        }

        public Start():void {
            this._speed = 10;
            this._reset();
        }

        public Update():void {
            this._checkBounds();
            if (this._speed > 0) {
            }
        }
    }
}
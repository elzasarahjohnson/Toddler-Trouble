module objects {

    export class Nursery extends createjs.Shape {
        // PRIVATE INSTANCE VARIABLES 
        private _dy: number;

        // CONSTRUCTORS 
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("Nursery"));
            this.Start();
        }

        private _reset(): void {
            this.y = 0;
        }

        private _checkBounds(): void {
            if (this.y > 0) {
                this._reset();
            }
        }

        // PUBLIC METHODS
        public Start(): void {
            this._reset();
            //this._dy = 5; // 5px per frame down
        }

        public Update(): void {
            //this.y += this._dy;
            this._checkBounds();
        }
    }
}
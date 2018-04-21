module managers {
    export interface AssetItem {
        id: string;
        src: string;
    }

    let assetManifest = [
        {id: "backButton", src: "./Assets/images/backButton.png"},
        {id: "nextButton", src: "./Assets/images/nextButton.png"},
        {id: "startBackground", src: "./Assets/images/tank_background.jpg"},
        {id: "endBackground", src: "./Assets/images/tank_end_screen_background.jpg"},
        {id: "startScreenButton", src: "./Assets/images/startScreenButton.png"},
        {id: "playAgainButton", src: "./Assets/images/playAgainButton.png"},
        {id: "restartButton", src: "./Assets/images/restartButton.png"},
        {id: "startButton", src: "./Assets/images/startButton.png"},
        {id: "tank", src: "./Assets/images/greenTank.png"},
        {id: "enemy", src: "./Assets/images/redTank.png"},
        {id: "startSceneMusic", src:"./Assets/audio/Game-Menu.mp3"},
        {id: "playSceneMusic", src:"./Assets/audio/Game_Playing_Theme.mp3"},
        {id: "endSceneMusic", src:"./Assets/audio/Retro_No_Hope.mp3"},
        {id: "floor", src:"./Assets/images/metalFloor.png"},
    ];

    export class AssetManager extends createjs.LoadQueue {
        public manifest: AssetItem[] = new Array<AssetItem>();

        constructor() {
            super();
            this.manifest = assetManifest;
            this.installPlugin(createjs.Sound);
            this.loadManifest(this.manifest);
        }

        public addItem(id: string, src: string): void {
            this.manifest.push({id, src});
            this.loadManifest(this.manifest);
        }
    }
}
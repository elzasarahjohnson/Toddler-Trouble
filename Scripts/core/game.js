//Abubakir Myrzaly - 300931945
//Sushmita Nandalan - 300923159
//ashley tjon-hing - 300744476
//elza sarah johnson - 300911775
/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var debugCanvas;
    var gameCanvas;
    assetManifest = [
        { id: "clickMeButton", src: "./Assets/images/TodTroLogo.png" },
        { id: "startButton", src: "./Assets/images/Buttons/Play1.png" },
        { id: "nextButton", src: "./Assets/images/startButton.png" },
        { id: "backButton", src: "./Assets/images/Buttons/back1.png" }
    ];
    //assetManifest = [
    //    { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" },
    //    { id: "startButton", src: "./Assets/images/startButton.png" },
    //    { id: "nextButton", src: "./Assets/images/nextButton.png" },
    //    { id: "backButton", src: "./Assets/images/backButton.png" }
    //];
    // preloads assets
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene(assetManager);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene(assetManager);
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
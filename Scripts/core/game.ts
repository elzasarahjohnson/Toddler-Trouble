//Abubakir Myrzaly - 300931945
//Sushmita Nandalan - 300923159
//ashley tjon-hing - 300744476
//elza sarah johnson - 300911775


/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];
  let currentScene: objects.Scene;
  let currentState: number;
  let debugCanvas: HTMLElement;
  let gameCanvas: HTMLElement;

  assetManifest = [
    { id: "clickMeButton", src: "./Assets/images/TodTroLogo.png" },
    { id: "startButton", src: "./Assets/images/Buttons/Play1.png" },
    { id: "nextButton", src: "./Assets/images/Buttons/Select1.png" },
    { id: "backButton", src: "./Assets/images/Buttons/back1.png" },
    { id: "character", src: "./Assets/images/Characters/MiraTop.png"},
    { id: "baby", src: "./Assets/images/Characters/AniBaby1.png"},
    { id: "startMusic", src:"./Assets/audio/startMusic.mp3"}
    
];

//assetManifest = [
//    { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" },
//    { id: "startButton", src: "./Assets/images/startButton.png" },
//    { id: "nextButton", src: "./Assets/images/nextButton.png" },
//    { id: "backButton", src: "./Assets/images/backButton.png" }
//];


  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    assetManager = new createjs.LoadQueue(); // creates the assetManager object
   
    assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);

  }

  function Start():void {
    console.log("Starting Application...")
    managers.Game.assetManager = assetManager; // passes a reference to the assetManager
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);

    managers.Game.currentScene = config.Scene.START;
    currentState = config.Scene.START;
    Main();
  }

  function Update():void {
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if(currentState!= managers.Game.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main():void {
    stage.removeAllChildren();

    switch(managers.Game.currentScene) {
      case config.Scene.START:
        currentScene = new scenes.StartScene();
      break;
      case config.Scene.PLAY:
        currentScene = new scenes.PlayScene();
      break;
      case config.Scene.OVER:
        currentScene = new scenes.OverScene();
      break;
    }

    currentState = managers.Game.currentScene;
    managers.Game.currentScene = currentState;
    managers.Game.currentSceneObject = currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();

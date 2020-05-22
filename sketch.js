var gameState = 0, playerCount = 0, form, player, game;
var database, position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){}



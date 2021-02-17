var database,position;

var gamestate = 0;
var playercount;
var form = new Form();
var player, game;

var allPlayers;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database();
    game = new Game();
    
    game.getState();
    game.start();
}


function showError() {
    
}

function draw(){
    background("white");

    if (playercount === 4) {
        game.updateState(1);
    }
    if (gamestate === 1) {
        clear();
        game.play();
    }
}

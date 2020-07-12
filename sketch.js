var ball;
var position,database;
var game,form,player,gameState=0,playerCount=0;
var allplayers;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
   game=new Game();
   game.getstate();
   game.start();
}

function draw(){
    background("white");
if(playerCount===4){

    game.update(1);
}
if(gameState===1){
game.play();
}   
}


class Game{
    constructor(){}
    getstate(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
gameState=data.val()
        })
    }
    update(state){
database.ref('/').update({
    gameState:state
})
    }
    start(){
    if(gamState===0){
player=new Player();
player.getCount();
form = new FormData();
form.display();
    }
    }
    play(){
        form.hide();
        text('gameStart',120,100)
        Player.getplayerinfo();
        if(allplayers!==undefined){
        var displayposition=130;
        for(var plr in allplayers){
if(plr==='player'+player.index){
 fill("red");
}
        else {fill("black");}
        displayposition+=20;
        text(allplayers[plr].name+':'+allplayers[plr].distance,120,displayposition)
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update();
    }
}
}
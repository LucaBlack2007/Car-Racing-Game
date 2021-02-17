class Game {
    constructor() {}

    getState() {
        var refered = database.ref('gamestate');
        refered.on("value", function(data) {
            gamestate = data.val();
        });
    }

    play() {
        form.hide();
        textSize(20);
        text("Game Start", 200, 200);
        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            var displayPosition = 120;
        
            for (var plr in allPlayers) {
                
                if (plr === "player"+player.index) {
                    fill("red");
                } else {
                    fill("black"); 
                }

                displayPosition+=20;
                textSize(20);
                text(allPlayers[plr].name + ": " + allPlayers[plr].index, 200, displayPosition);
            }       
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance+=10;
            player.update();
        }
    }

    updateState(state) {
        database.ref('/').update({
            gamestate: state
        });
    }

    async start() {
        if (gamestate===0) {
            player = new Player();
            var playerCountRef = await database.ref('playercount').once("value");
            if (playerCountRef.exists()) {
                playercount=playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
    }
}
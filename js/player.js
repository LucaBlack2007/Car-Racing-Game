class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    /*

    players:
        player1:
            name: 'name'
            distance: 10

    */


    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        });
    }

    getCount() {
        var index = database.ref('playercount');
        index.on("value", function(data) {
           playercount = data.val(); 
        });
    }

    updateCount(count) {
        database.ref('/').update({
            playercount: count
        });
    }
}
class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("join");
        this.greeting = createElement("h3");
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElement('h1');
        title.html("My Car Racing Game");
        title.position(650, 200); 
        
        this.input.position(650, 300);
        this.button.position(800, 300);
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            
            playercount++;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);
        
            this.greeting.html("hello, welcome to the game :)", player.name);
            this.greeting.position(670, 250);
        }); 
    }

}
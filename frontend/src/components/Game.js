class Game {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    renderGame(){
        const gameLi = document.createElement("li");
        const gameList = document.getElementsByClassName("game-list")[0];
        gameLi.innerText = `${this.name}`;
        gameList.append(gameLi)
    }
}

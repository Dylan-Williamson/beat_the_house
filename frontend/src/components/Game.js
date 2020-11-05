class Game {
    constructor(id, name, img) {
        this.id = id;
        this.name = name;
        this.img = img;
    }

    render(){
        const gameLi = document.createElement("li");
        gameLi.classList.add("game-card")
        const gameList = document.getElementsByClassName("game-list")[0];
        gameLi.innerHTML = `
        <div class="card">
            <img src=${this.img} alt="IMAGE" class="image">
            <div class="overlay">
                <div class="text">${this.name}</div>
            </div>
        </div>
        `;
        gameList.append(gameLi)
    }
}

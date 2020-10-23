class Game {
    constructor(id, name, img) {
        this.id = id;
        this.name = name;
        this.img = img;
    }

    renderGame(){
        const gameLi = document.createElement("li");
        gameLi.classList.add("game-card")
        const gameList = document.getElementsByClassName("game-list")[0];
        gameLi.innerHTML = `
        <div class="card">
  		    <img src=${this.img} alt="Image" style="width:100%">
  	    <div class="container">
            <h4><b>${this.name}</b></h4>
  	    </div>
	    </div>
        `;
        gameList.append(gameLi)
    }
}

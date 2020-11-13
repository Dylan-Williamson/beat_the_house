class Strategy {
    constructor(id, name, min_balance, starting_bet, description, user_id, game_id) {
        this.id = id;
        this.name = name;
        this.minBalance = min_balance;
        this.startingBet = starting_bet;
        this.description = description;
        this.userId = user_id;
        this.gameId = game_id
    }

    render(){
        const strategyLi = document.createElement("li");
        const strategyList = document.getElementsByClassName("game-list")[0];
        strategyLi.classList.add("game-card");
        const btn = document.createElement("button");
        btn.type = "button";
        // debugger
        strategyLi.innerHTML = `
        <div class="card">
            <img src="https://cdn9.dissolve.com/p/D1869_9_038/D1869_9_038_0004_600.jpg" alt="IMAGE" class="image">
            <div>${this.name}</div>
            <div class="overlay" data-id="${this.id}">
                <div class="strategy-text">${this.description}</div>
            </div>
        </div>
        `
        strategyList.append(strategyLi)
        
        if (parseInt(this.userId) === state.user.id) {
            const strategyCards = document.getElementsByClassName("overlay");
            const strategyCard = strategyCards[strategyCards.length - 1];
            strategyCard.append(btn);
            btn.innerText = `DELETE`
            btn.dataset.id = this.id
            btn.addEventListener("click", function() {
                api.deleteStrategy(state.user.id, btn.dataset.id);
                console.log("hi")
            });
        }
    }
}

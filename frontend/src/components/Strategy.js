class Strategy {
    constructor(id, name, minBalance, startingBet, description, userId, gameId) {
        this.id = id;
        this.name = name;
        this.min_balance = minBalance;
        this.starting_bet = startingBet;
        this.description = description;
        this.user_id = userId;
        this.game_id = gameId
    }

    render(){
        const strategyList = document.getElementsByClassName("game-list")[0];
        const strategyLink = document.createElement("li");
        strategyLink.innerHTML = `
        <a class="strategy-link" data-id="${this.id}" href="#">${this.name}</a><br>
        `
        strategyList.append(strategyLink)
    }
}

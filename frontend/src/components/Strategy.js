class Strategy {
    constructor(id, name, minBalance, startingBet, description) {
        this.id = id;
        this.name = name;
        this.min_balance = minBalance;
        this.starting_bet = startingBet;
        this.description = description
    }

    render(){
        const strategyList = document.getElementsByClassName("game-list")[0];
        const strategyLink = document.createElement("li");
        strategyLink.innerHTML = `
        <a class="strategy-link" href="#">${this.name}</a><br>
        `
        strategyList.append(strategyLink)
    }
}

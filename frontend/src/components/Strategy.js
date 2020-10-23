class Strategy {
    constructor(id, name, minBalance, startingBet, description) {
        this.id = id;
        this.name = name;
        this.min_balance = minBalance;
        this.starting_bet = startingBet;
        this.description = description
    }

    renderStrategy(){
        const strategyLi = document.createElement("li");
        strategyLi.classList.add("strategy-card")
        const strategyList = document.getElementsByClassName("strategy-list")[0];
        strategyLi.innerHTML = `
        <a href="#">${this.name}</a>
        `;
        strategyList.append(gameLi)
    }
}

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
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
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
            strategyCard.append(editBtn, deleteBtn);
            editBtn.innerText = `EDIT`
            editBtn.dataset.id = this.id
            const strategy = this
            const form = document.createElement("form");
            // debugger
            editBtn.addEventListener("click", function() {
                const modal = document.getElementById("myModal");
                const modalContent = document.querySelector(".modal-content");
                form.innerHTML = `
                <label for="name">Name:</label><br>
                <input type="text" value="${strategy.name}" required name="name"><br><br>
                <label for="minBalance">Minimum Balance:</label><br>
                <input type="number" value="${strategy.minBalance}" required name="minBalance" min="0" step=".01"><br><br>
                <label for="startingBet">Starting Wager:</label><br>
                <input type="number" value="${strategy.startingBet}" required name="startingBet" min="0" step=".01"><br><br>
                <label for="description">Instructions:</label><br>
                <textarea name="description">${strategy.description}</textarea><br><br>
                <label for="gameId">Game Id:</label><br>
                <input type="number" value="${strategy.gameId}" required name="gameId" min="1" max="4" step="1"><br><br>
                <input type="submit" value="Update Strategy"><br>
                `
                modalContent.appendChild(form);
                modal.style.display = "block";
            });
            deleteBtn.innerText = `DELETE`
            deleteBtn.dataset.id = this.id
            deleteBtn.addEventListener("click", function() {
                api.deleteStrategy(state.user.id, deleteBtn.dataset.id);
            });

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const data = {
                    name: e.target.name.value,
                    min_balance: e.target.minBalance.value,
                    starting_bet: e.target.startingBet.value,
                    description: e.target.description.value,
                    game_id: e.target.gameId.value
                }
                api.patchStrategy(data, state.user.id, strategy.id)
            });
        }
    }
}
// const modalContent = document.querySelector(".modal-content");
// const balanceString = document.getElementsByClassName("balance-nav")[0].innerText.slice(1)
// const balanceFloat = parseFloat(balanceString)
// balanceForm.innerHTML = `
// <label for="balance">Balance:</label>
// <input type="number" required name="balance" min="0" value=${balanceFloat} step=".01">
// <input type="submit" value="Update Balance">
// `
// modalContent.appendChild(form)
// modal.style.display = "block";
// debugger

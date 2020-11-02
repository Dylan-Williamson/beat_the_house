class UserStrategyContainer {
    constructor(){
        api.getUserStrategies(state.user.id).then(this.render)
    }


    render(strategies) {
        
        
        strategies.data.forEach(strategy => {
            const strategyList = document.getElementsByClassName("game-list")[0];
            const strategyLink = document.createElement("li");
            strategyLink.innerHTML = `
            <a href="#">${strategy.attributes.name}</a>
            `
            strategyList.append(strategyLink)
        })

    }
  }

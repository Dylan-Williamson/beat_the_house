class StrategyContainer {
    constructor(){
        api.getStrategies().then(this.render)
    }


    render(strategies) {
        strategies.data.forEach(strategy => {
            let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.min_balance, strategy.attributes.starting_bet, strategy.attributes.description);
            s.render()
        })
    }
  }

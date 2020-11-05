class StrategyContainer {
    constructor(){
        api.getStrategies().then(this.render)
    }


    render(strategies) {
        strategies.data.forEach(strategy => {
            let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.img);
            s.render()
        })
    }
  }

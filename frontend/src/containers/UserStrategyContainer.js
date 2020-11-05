class UserStrategyContainer {
    constructor(){
        api.getUserStrategies(state.user.id).then(this.render)
    }


    render(strategies) {
        strategies.data.forEach(strategy => {
            let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.img);
            s.render()
        })
    }
  }

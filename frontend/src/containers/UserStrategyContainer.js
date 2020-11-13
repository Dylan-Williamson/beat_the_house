class UserStrategyContainer {
    constructor(){
        // debugger
        api.getUserStrategies(state.user.id).then(this.render)
    }


    render(strategies) {
        strategies.data.forEach(strategy => {
            let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.min_balance, strategy.attributes.starting_bet, strategy.attributes.description, strategy.attributes.user_id, strategy.attributes.game_id);
            s.render();
        })
    }
  }

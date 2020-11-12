class UserStrategyContainer {
    constructor(){
        // debugger
        api.getUserStrategies(state.user.id).then(this.render)
    }


    render(strategies) {
        const modalContent = document.getElementsByClassName("modal-content")[0];
        strategies.data.forEach(strategy => {
            let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.img);
            s.render()
        })


    }
  }

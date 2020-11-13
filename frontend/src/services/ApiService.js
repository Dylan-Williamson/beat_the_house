class ApiService {

    constructor(root){
      this.root = root
    }

    // Strategy FETCH's
    getStrategy = (id) => fetch(this.root+"/strategies/" + id).then(res => res.json())

    getStrategies = () => fetch(this.root+"/strategies").then(res => res.json())

    getUserStrategies = (id) => fetch(this.root+"/users/"+id+"/strategies/").then(res => res.json())

    // Game FETCH's
    getGame = (id) => fetch(this.root+"/games/" + id).then(res => res.json())
    
    getGames = () => fetch(this.root+"/games").then(res => res.json())

    // User FETCH's
    postUser = (username, balance) => {
      return fetch(this.root + "/users", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username}, {balance: balance}),
        }
      )
      .then(res => res.json())
    }

    updateUserBalance = (id, balance) => {
      return fetch(this.root + "/users/" + id, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({balance: balance}),
      })
      .then(res => res.json())
    } 

    deleteStrategy = (userId, id) => {
      return fetch(this.root + "/users/" + userId + "/strategies/" + id, {
        method: 'DELETE',
      })
    }


    patchStrategy = (data, userId, id) => {
      return fetch(this.root + "/users/" + userId + "/strategies/" + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
    }

    postStrategy = (name, minBalance, startingBet, description, userId, gameId) => {
      // debugger
      return fetch(this.root + "/users/" + userId + "/strategies/", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          min_balance: minBalance,
          starting_bet: startingBet,
          description: description,
          user_id: userId,
          game_id: gameId
        }),
        }
      )
      .then(res => res.json())
      .then(strategy => {
        // debugger
        let s = new Strategy(strategy.id, strategy.name, strategy.min_balance, strategy.starting_bet, strategy.description, strategy.user_id, strategy.game_id);
        s.render()
    })
    }
  
  
  }
  
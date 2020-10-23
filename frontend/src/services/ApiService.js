class ApiService {

    constructor(root){
      this.root = root
    }
  
    getStrategies = () => fetch(this.root+"/strategies").then(res => res.json())

    getStrategy = (id) => fetch(this.root+"/strategies/" + id).then(res => res.json())

    getUserStrategies = (id) => fetch(this.root+"/users/"+id+"/strategies/").then(res => res.json())
    
    getGames = () => fetch(this.root+"/games").then(res => res.json())

    getGame = (id) => fetch(this.root+"/games/" + id).then(res => res.json())

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
  
  
  }
  
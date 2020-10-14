class ApiService {

    constructor(root){
      this.root = root
    }
  
    getStrategies = () => fetch(this.root+"/strategies").then(res => res.json())
  
    getStrategy = (id) => fetch(this.root+"/strategies/" + id).then(res => res.json())
  
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
  
    // postGraffiti = (messageId, content, userId) => {
    //   return fetch(`${this.root}/messages/${messageId}/graffitis`, {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       content: content,
    //       user_id: userId
    //     }),
    //     }
    //   )
    //   .then(res => res.json())
    // }
  
  }
  
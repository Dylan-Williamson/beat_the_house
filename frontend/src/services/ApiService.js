class ApiService {

    constructor(root){
      this.root = root
    }
  
    // getFacilities = () => fetch(this.root+"/facilities").then(res => res.json())
  
    // getFacility = (id) => fetch(this.root+"/facilities/" + id).then(res => res.json())
  
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
  
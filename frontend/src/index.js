const api = new ApiService("http://localhost:3000")
const baseUrl = "http://localhost:3000"

// test
let state = {
  user: {id: 1, username: "dyl"}
}

// const state = {
//   user: { }
// }
// new Login()

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM IS LOADED");
  fetchStrategies()
})

function fetchStrategies() {
    fetch(`${baseUrl}/strategies`)
    .then(resp => resp.json())
    .then(strategies => {
      for (const strategy of strategies.data){
        console.log("rails obj", strategy);
        // debugger
        let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.min_balance, strategy.attributes.starting_bet);
        console.log("js obj", s)
      }
    })
}
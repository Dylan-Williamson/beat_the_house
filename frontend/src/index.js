const api = new ApiService("http://localhost:3000")
const baseUrl = "http://localhost:3000"

// test
// let state = {
//   user: {id: 1, username: "dyl"}
// }

const state = {
  user: { }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

new Login()


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM IS LOADED");
  // fetchStrategies()
})


// Fetch 1 [READ]
// document.addEventListener("click", )

function fetchStrategies() {
    fetch(`${baseUrl}/strategies`)
    .then(resp => resp.json())
    .then(strategies => {
      for (const strategy of strategies.data){
        // console.log("rails obj", strategy);
        // // debugger
        let s = new Strategy(strategy.id, strategy.attributes.name, strategy.attributes.min_balance, strategy.attributes.starting_bet);
        // console.log("js obj", s)
        s.renderStrategy();
      }
    })
}

// Fetch 2 [CREATE]






// Fetch 3 [DELETE]
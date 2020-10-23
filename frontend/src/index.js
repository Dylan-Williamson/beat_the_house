const api = new ApiService("http://localhost:3000")
const baseUrl = "http://localhost:3000"
const state = {
  user: { }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

new Login()


// Fetch 1 [READ]
// document.addEventListener("click", )

// function getGames() {
//     fetch(`${this.root}/games`)
//     .then(resp => resp.json())
//     .then(games => {
//       for (const game of games.data){
//         let g = new Game(game.id, game.attributes.name);
//         g.renderGame();
//       }
//     })
// }

// Fetch 2 [CREATE]






// Fetch 3 [DELETE]
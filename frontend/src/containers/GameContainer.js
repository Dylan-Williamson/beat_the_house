class GameContainer {
    constructor(){
        api.getGames().then(this.render)
    }


    render(games) {

      // Assigns DOM elements to variables
        const body = document.body;
        let welcome = document.querySelector("h1");
        let form = document.querySelector("form");
        const nav = `
        <header class="nav">
            <ul>
                <li><a href="#">Games</a></li>
                <li><a href="#">Strategies</a></li>
                <li><a href="#">Simulators</a></li>
            </ul>
            <a href="#" class="logo">BEAT THE HOUSE</a>
            <ul>
                <li><a href="#">$${state.user.balance}</a></li>
                <li><a href="#">${state.user.username}</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </header>
        <section class="banner"></section>
      `;
      const header = document.getElementsByClassName("nav");
      const gamesHeader = document.createElement("div");
      const gamesContainer = document.createElement("div");
      const gameList = document.createElement("ul");
        
        
      // Removes login elements from DOM
      welcome.parentNode.removeChild(welcome);
      form.parentNode.removeChild(form);
      
      
      // Assignment
      window.addEventListener("scroll", function(){
        header[0].classList.toggle("sticky", window.scrollY > 0)
      });
      gamesHeader.classList.add("games-header");
      gamesContainer.classList.add("game-container");
      gameList.classList.add("game-list")
      gamesHeader.innerHTML = `
      <h3>All Games</h3>
      `;
      
      
      // Appends elements to DOM
      body.innerHTML += nav;
      gamesContainer.append(gameList);
      body.append(gamesHeader, gamesContainer);


      // Renders game cards
      games.data.forEach(game => {
        let g = new Game(game.id, game.attributes.name);
        g.renderGame();
      })
    }
  }
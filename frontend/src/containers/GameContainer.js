class GameContainer {
    constructor(){
        api.getGames().then(this.render)
    }
    
    
    render(games) {
      
      // Assigns DOM elements to variables
        const body = document.body;
        const nav = `
        <header class="nav">
            <ul>
                <li><a href="#" class="games-nav">Games</a></li>
                <li><a href="#" class="strategies-nav">Strategies</a></li>
                <li><a href="#" class="simulators-nav">Simulators</a></li>
            </ul>
            <a href="#" class="logo">BEAT THE HOUSE</a>
            <ul>
                <li><a href="#" class="balance-nav">$${state.user.balance}</a></li>
                <li><a href="#" class="username-nav">${state.user.username}</a></li>
                <li><a href="#" class="about-nav">About</a></li>
            </ul>
        </header>
        <section class="banner"></section>
      `;
      const header = document.getElementsByClassName("nav");
      const gamesHeader = document.createElement("div");
      const gamesContainer = document.createElement("div");
      const gameList = document.createElement("ul");
      const strategiesNav = document.getElementsByClassName("strategies-nav")
      const gamesNav = document.getElementsByClassName("games-nav")
      const balanceNav = document.getElementsByClassName("balance-nav")
      const usernameNav = document.getElementsByClassName("username-nav")
      const logoNav = document.getElementsByClassName("logo")
    
      
      window.addEventListener("scroll", function(){
        header[0].classList.toggle("sticky", window.scrollY > 0)
      });
      
      // Assignment
      gamesHeader.classList.add("games-header");
      gamesContainer.classList.add("game-container");
      gameList.classList.add("game-list")
      gamesHeader.innerHTML = `
      <h3>All Games</h3><br>
      `;
      
      
      // Appends elements to DOM
      body.innerHTML = ""
      body.innerHTML += nav;
      gamesContainer.append(gameList);
      body.append(gamesHeader, gamesContainer);

      
      // Renders game cards
      games.data.forEach(game => {
        let g = new Game(game.id, game.attributes.name, game.attributes.img);
        g.renderGame();
      })

      usernameNav[0].addEventListener("click", function() {
        gamesHeader.childNodes[1].innerHTML = "Your Strategies";
        gameList.innerHTML = "";
        new StrategyContainer();
      });

      logoNav[0].addEventListener("click", function() {
        new GameContainer();
      });

    }
  }
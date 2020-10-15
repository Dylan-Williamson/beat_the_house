class Login {
    constructor(){
        this.render()
    }
    render(){
        document.body.innerHTML = ""
        const h1 = document.createElement("h1")
        h1.innerText = "Enter your alias"
        const form = document.createElement("form")
        const input = document.createElement("input")
        input.name = "username"
        form.appendChild(input)
        form.addEventListener("submit", this.submit)
        document.body.append(h1, form)
  }

  submit = (e) => {
    e.preventDefault()
    api.postUser(e.target.username.value).then(user => {
      state.user = user
      document.body.innerHTML = `
      <header>
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
      `
      window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
      })
    })
  }
}
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
      <nav class="btn-group" style="width:100%">
        <button id="logo-btn" type="button" style="width:33.3%">Games</button>
        <button id="balance-btn" type="button" style="width:33.4%">$${state.user.balance}</button>
        <button type="button" style="width:33.3%">${state.user.username}</button>
      </nav>
      `
    })
  }
}
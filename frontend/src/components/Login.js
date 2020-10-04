class Login {
    constructor(){
        this.render()
    }
    render(){
        document.body.innerHTML = ""
        const h1 = document.createElement("h1")
        h1.innerText = "Select an alias."
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
    })
  }
}
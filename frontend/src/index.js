const api = new ApiService("http://localhost:3000")
const baseUrl = "http://localhost:3000"
const state = {
  user: { }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

new Login()
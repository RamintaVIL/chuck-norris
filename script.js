const btnDOM = document.querySelector("button");
const pDOm = document.querySelector("p");
const url = "https://api.chucknorris.io/jokes/random";

btnDOM.addEventListener("click", getJoke)
function getJoke() {
    fetch(url)
        .then(res => res.json())
        .then(data => pDOm.innerHTML = data.value)
}
function getApi() {
    fetch("www.thecocktaildb.com/api/json/v1/1/search")
        .then(res => res.json())
        .then(data => pDOm.innerHTML = data.value)
}
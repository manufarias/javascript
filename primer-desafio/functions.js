let personCount = document.querySelector("h1")
let count = 0

function increment() {
  count = count + 1
  personCount.innerText = count
}

function decrement() {
  count = count - 1
    personCount.innerText = count
}
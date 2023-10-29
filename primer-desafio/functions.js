let saveCount = document.getElementById("save-el")
let personCount = document.querySelector("h1")
let count = 0

function increment() {
  count += 1
  personCount.textContent = count
}

function decrement() {
  if (count > 0) {
    count -= 1
    personCount.textContent = count
  }
}

function save() {
  let actualValue = count
  saveCount.textContent = actualValue
  count = 0
  personCount.textContent = 0
}
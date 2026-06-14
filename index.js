let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

let name = "Fazi"
let greeting = "Welcome back "
let greetingMessage = greeting + name + "!"

let count = 0 

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    let countNew = count + " - "
    saveEl.textContent += countNew
    countEl.textContent = 0
    count = 0
}

welcomeEl.innerText = greetingMessage
welcomeEl.innerText += ""






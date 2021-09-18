const value = document.querySelector("#value");

let counterValue = 0;

function increment () {
    value.textContent = counterValue += 1;
}

function decrement () {
    value.textContent = counterValue -= 1;
}

const incBtn = document.querySelector('[data-action="increment"]');
incBtn.addEventListener("click", increment);

const decBtn = document.querySelector('[data-action="decrement"]');
decBtn.addEventListener("click", decrement)
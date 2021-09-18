const input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");


input.addEventListener("input", onInputChange)

function onInputChange(evt) {
    console.log(evt.currentTarget.value)
    
    evt.currentTarget.value !== "" ?
        span.textContent = evt.currentTarget.value
        : span.textContent = "незнакомец";
}

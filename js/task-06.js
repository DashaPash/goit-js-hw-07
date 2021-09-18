const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(ev) {
    const lengthVal = this.dataset.length;
    if (ev.currentTarget.value.length === Number(lengthVal)) {
        input.classList = "valid";
    } else {
        input.classList = "invalid";
    }
}
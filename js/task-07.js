const input = document.querySelector('#font-size-control');
const spanTxt = document.querySelector('#text')

input.addEventListener('input', changeFontSize);

function changeFontSize() {
    spanTxt.style.fontSize = input.value + 'px'
}
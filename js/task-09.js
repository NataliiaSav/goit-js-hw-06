function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const spanTextColor = document.querySelector(".color");
const bodyEl = document.body;
function handlerButtonCliсk(event) {
  bodyEl.style.backgroundColor = spanTextColor.textContent =
    getRandomHexColor();
}
btnChangeColor.addEventListener("click", handlerButtonCliсk);

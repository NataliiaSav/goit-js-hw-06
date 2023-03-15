function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
buttonCreate.addEventListener("click", createBoxes);
function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 30 + i * 10 + "px";
    newBox.style.height = 30 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(newBox);
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
}

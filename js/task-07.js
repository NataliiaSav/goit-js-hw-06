const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
fontSizeControl.addEventListener("input", handlerInputControl);
function handlerInputControl(event) {
  textElement.style.fontSize = event.currentTarget.value + "px";
}

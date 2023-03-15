const inputElement = document.querySelector("#name-input");
const textElement = document.querySelector("#name-output");
inputElement.addEventListener("input", typingInput);
function typingInput(event) {
  textElement.textContent = event.currentTarget.value;
  if (inputElement.value === "") {
    textElement.textContent = "Anonymous";
  }
}

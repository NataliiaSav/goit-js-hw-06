// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const inputElement = document.querySelector("#name-input");
const textElement = document.querySelector("#name-output");
inputElement.addEventListener("input", typingInput);
function typingInput(event) {
  textElement.textContent = event.currentTarget.value;
}

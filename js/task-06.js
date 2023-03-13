const inputFormEl = document.querySelector("#validation-input");
const inputLength = Number(inputFormEl.getAttribute("data-length"));
inputFormEl.addEventListener("blur", checkInput);
function checkInput(event) {
  if (event.target.value.length === inputLength) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    inputFormEl.classList.add("invalid");
    inputFormEl.classList.remove("valid");
  }
}

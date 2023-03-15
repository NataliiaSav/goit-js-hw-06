let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
const decrementClick = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const incrementClick = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);

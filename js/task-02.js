const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementsEl = ingredients.map((option) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = option;

  return ingredientsItemEl;
});
const ingredientsListEl = document.querySelector("#ingredients");
console.log(ingredientsListEl);
ingredientsListEl.append(...elementsEl);

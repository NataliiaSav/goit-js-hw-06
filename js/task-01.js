const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`);
categoriesItemEl.forEach((item) => {
  const itemTitleEl = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitleEl}`);
  const itemsListEl = item.querySelectorAll("li");
  console.log(`Elements: ${itemsListEl.length}`);
});

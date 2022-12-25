const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

// const ingredientsEl = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = `${ingredient}`;
//   itemEl.classList.add("item");
//   return itemEl;
// });

// listEl.append(...itemEl);

const ingredientsEl = ingredients.forEach((ingredient) => {
  const arrItemEl = [];
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");

  arrItemEl.push(itemEl);
  listEl.append(...arrItemEl);
});

console.log(listEl);

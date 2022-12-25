const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ingredientsEl = [];

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");

  ingredientsEl.push(itemEl);
});

listEl.append(...ingredientsEl);

console.log(listEl);

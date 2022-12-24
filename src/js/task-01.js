const itemsEl = document.querySelectorAll(".item");
// console.log(itemsEl);

const numberOfCategoriesEl = `Number of categories: ${itemsEl.length}`;
console.log(numberOfCategoriesEl);

const infoItemEl = itemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

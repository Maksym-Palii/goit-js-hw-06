function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const controlsEl = document.querySelector("div>input");

const mainBoxEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyEl);

function createBoxes() {
  const amount = Number(controlsEl.value);
  let size = 30;
  const arrBoxEl = [];

  for (let i = 0; i < amount; i += 1) {
    let boxEl = document.createElement("div");

    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    size += 10;
    arrBoxEl.push(boxEl);
  }

  mainBoxEl.append(...arrBoxEl);
}

function destroyEl() {
  controlsEl.value = "";
  mainBoxEl.innerHTML = "";
}

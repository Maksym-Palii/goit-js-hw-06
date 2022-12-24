function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const controlsEl = document.querySelector("div>input");

const mainBoxEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyEl);

const amount = Number(controlsEl.value);

function createBoxes() {
  let boxEl = document.createElement("div");
  let size = 30;
  boxEl.style.width = `${size}px`;
  boxEl.style.height = `${size}px`;
  boxEl.style.backgroundColor = getRandomHexColor();

  // for (let i = 0; i <= amount; i += 1) {
  //   boxEl += i;
  //   size += 10;
  // }

  mainBoxEl.append(boxEl);
}

function destroyEl() {
  controlsEl.value = "";
  mainBoxEl.innerHTML = "";
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let caunterValue = 0;

const caunterDecrement = () => {
  caunterValue -= 1;
  return (valueEl.textContent = caunterValue);
};

const caunterIncrement = () => {
  caunterValue += 1;
  return (valueEl.textContent = caunterValue);
};

decrementBtn.addEventListener("click", caunterDecrement);

incrementBtn.addEventListener("click", caunterIncrement);

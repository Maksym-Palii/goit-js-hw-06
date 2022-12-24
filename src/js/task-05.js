const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

const changeTextEl = (event) => {
  if (event.currentTarget.value === "") {
    return (textEl.textContent = "Anonymous");
  } else {
    textEl.textContent = event.currentTarget.value;
  }
};

inputEl.addEventListener("input", changeTextEl);

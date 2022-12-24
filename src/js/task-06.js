const inputEl = document.getElementById("validation-input");

const correctValue = (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", correctValue);

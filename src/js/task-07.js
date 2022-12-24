const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", fontSizeTextValue);

function fontSizeTextValue() {
  textEl.style.fontSize = inputEl.value + "px";
}

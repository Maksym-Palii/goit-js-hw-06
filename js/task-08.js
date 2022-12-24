const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formElEntereddValues = {};
  (formElEntereddValues.email = email.value),
    (formElEntereddValues.password = password.value);
  console.log(formElEntereddValues);
  event.currentTarget.reset();
}

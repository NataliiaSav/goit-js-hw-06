const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Поле має бути заповнене");
  }
  console.log(`E-mail: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

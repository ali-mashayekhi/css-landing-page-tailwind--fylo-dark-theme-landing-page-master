const formCtaEl = document.querySelector(".cta-form");
const inputCtaEl = document.querySelector(".cta-input");
const errorMessageEl = document.querySelector(".error-message");

// const errorMessage = document.createElement("p");
// const errorContent = document.createTextNode(
//   "Please enter a valid email address"
// );
// errorMessage.appendChild(errorContent);
// errorMessage.classList.add("text-[0.625rem]", "text-red-custom", "px-7");

let isTouched = false;

formCtaEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = e.target[0].value;
  isTouched = true;

  if (!validateEmail(emailInput)) {
    errorMessageEl.classList.remove("error-invisible");
    console.log(errorMessageEl);
    return;
  }

  e.target[0].value = "";
  console.log(`${emailInput} is saved.`);
  isTouched = false;
});

inputCtaEl.addEventListener("input", (e) => {
  const emailInput = e.target.value;

  if (validateEmail(emailInput) && isTouched) {
    errorMessageEl.classList.add("error-invisible");
    return;
  }

  if (isTouched && !validateEmail(emailInput)) {
    errorMessageEl.classList.remove("error-invisible");

    return;
  }
});

inputCtaEl.addEventListener("focusout", (e) => {
  const emailInput = e.target.value;
  isTouched = true;
  if (!validateEmail(emailInput)) {
    errorMessageEl.classList.remove("error-invisible");
    return;
  }
});

function validateEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) return true;
  else return false;
}

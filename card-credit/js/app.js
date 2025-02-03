const form = document.getElementById("form");
const inputName = document.getElementById("cardholder-name");
const inputCVC = document.getElementById("input-cvc");
const inputMoth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const inputNumber = document.getElementById("card-number");

inputName.addEventListener("input", () => {
  const MAX_lENGTH = 20;
  const nameExample = document.getElementById("nameExample");
  if (inputName.value.length > MAX_lENGTH) {
    inputName.value = inputName.value.slice(0, MAX_lENGTH);
  } else {
    nameExample.textContent =
      inputName.value === "" ? "NAME EXAMPLE" : inputName.value;
    validateCardName(inputName);
  }
});

inputCVC.addEventListener("input", () => {
  const MAX_lENGTH = 3;
  const cvcExample = document.getElementById("cvcExample");
  if (inputCVC.value.length > MAX_lENGTH) {
    inputCVC.value = inputCVC.value.slice(0, MAX_lENGTH);
  } else {
    cvcExample.textContent = inputCVC.value === "" ? "919" : inputCVC.value;
    validateCvc(inputCVC);
  }
});

inputMoth.addEventListener("input", () => {
  const MAX_lENGTH = 2;
  const monthExample = document.getElementById("monthExample");
  if (inputMoth.value.length > MAX_lENGTH) {
    inputMoth.value = inputMoth.value.slice(0, MAX_lENGTH);
  } else {
    monthExample.textContent = inputMoth.value === "" ? "07" : inputMoth.value;
    validateDate(inputMoth);
  }
});

inputYear.addEventListener("input", () => {
  const MAX_lENGTH = 2;
  const yearExample = document.getElementById("yearExample");
  if (inputYear.value.length > MAX_lENGTH) {
    inputYear.value = inputYear.value.slice(0, MAX_lENGTH);
  } else {
    yearExample.textContent = inputYear.value === "" ? "22" : inputYear.value;
    validateDate(inputYear);
  }
});

inputNumber.addEventListener("input", () => {
  const MAX_lENGTH = 16;
  const cartDigits = Array.from(document.getElementsByClassName("card__digit"));
  if (inputNumber.value.length > MAX_lENGTH) {
    inputNumber.value = inputNumber.value.slice(0, MAX_lENGTH);
  } else {
    if (inputNumber.value === "") {
      cartDigits.forEach((digitl) => (digitl.textContent = "0000"));
    } else {
      const parts = inputNumber.value.match(/.{1,4}/g);
      cartDigits.forEach(
        (digitl, position) => (digitl.textContent = parts[position])
      );
      validateCardNumber(inputNumber);
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValidName = validateCardName(inputName);
  const isValidNumber = validateCardNumber(inputNumber);
  const isValidMonth = validateDate(inputMoth);
  const isValidYear = validateDate(inputYear);
  const isValidCVC = validateCvc(inputCVC);
  const formValid =
    isValidName && isValidNumber && isValidMonth && isValidYear && isValidCVC;
  if (formValid) {
    completeForm();
  }
});

function validateCardName(inputName) {
  const errorCardName = document.getElementById("errorCardName");
  if (inputName.value === "") {
    errorCardName.textContent = "El nombre es requerido";
    errorCardName.classList.add("messageError-visible");
    inputName.classList.add("form__input--invalid");
    return false;
  } else {
    errorCardName.classList.remove("messageError-visible");
    return true;
  }
}

function validateCardNumber(inputNumber) {
  let isValid = true;
  const numberValid = /^\d{16}$/;
  const errorCardNumber = document.getElementById("errorCardNumber");
  if (inputNumber.value === "") {
    errorCardNumber.textContent = "El numero es requerido";
    isValid = false;
  } else if (!numberValid.test(inputNumber.value)) {
    errorCardNumber.textContent = "El numero es invalido";
    isValid = false;
  }
  if (!isValid) {
    errorCardNumber.classList.add("messageError-visible");
    inputNumber.classList.add("form__input--invalid");
  } else {
    errorCardNumber.classList.remove("messageError-visible");
    inputNumber.classList.remove("form__input--invalid");
  }
  return isValid;
}

function validateDate(inputDate) {
  let isValid = true;
  const numberValid = /^\d{2}$/;
  const errorDate = document.getElementById("errorDate");
  if (inputDate.value === "") {
    errorDate.textContent = "La fecha es requerida";
    isValid = false;
  } else if (!numberValid.test(inputDate.value)) {
    errorDate.textContent = "La fecha es invalida";
    isValid = false;
  }
  if (!isValid) {
    errorDate.classList.add("messageError-visible");
    inputDate.classList.add("form__input--invalid");
  } else {
    errorDate.classList.remove("messageError-visible");
    inputDate.classList.remove("form__input--invalid");
  }
  return isValid;
}

function validateCvc(inputCvc) {
  let isValid = true;
  const numberValid = /^\d{3}$/;
  const errorDate = document.getElementById("errorCvc");
  if (inputCvc.value === "") {
    errorDate.textContent = "El cvc es requerido";
    isValid = false;
  } else if (!numberValid.test(inputCvc.value)) {
    errorDate.textContent = "El cvc es invalido";
    isValid = false;
  }
  if (!isValid) {
    errorDate.classList.add("messageError-visible");
    inputCvc.classList.add("form__input--invalid");
  } else {
    errorDate.classList.remove("messageError-visible");
    inputCvc.classList.remove("form__input--invalid");
  }
  return isValid;
}


function completeForm(){
    const formContainer = document.getElementById('form');

    const containerCompleted = document.createElement('div');
    containerCompleted.className = 'completedForm';

    const figure = document.createElement('figure');
    figure.className = 'completed__figure';

    const image = document.createElement('img');
    image.src = 'images/icon-complete.svg';
    image.className = 'completed__img';

    const title = document.createElement('h2');
    title.className = 'completed__title';
    title.textContent = 'Tank You!';

    const paragraph = document.createElement('p');
    paragraph.className = 'completed__paragraph';
    paragraph.textContent = ' Weve added you card details';

    const buttom = document.createElement('button');
    buttom.className = 'form__button';
    buttom.textContent = 'Confirm';


    //ARMAR
    figure.append(image);
    containerCompleted.append(figure, title, paragraph, buttom);

    formContainer.replaceWith(containerCompleted);
}


// const form = document.getElementById("form");
// const inputs = {
//   name: document.getElementById("cardholder-name"),
//   cvc: document.getElementById("input-cvc"),
//   month: document.getElementById("input-month"),
//   year: document.getElementById("input-year"),
//   number: document.getElementById("card-number")
// };

// const examples = {
//   name: document.getElementById("nameExample"),
//   cvc: document.getElementById("cvcExample"),
//   month: document.getElementById("monthExample"),
//   year: document.getElementById("yearExample"),
//   number: Array.from(document.getElementsByClassName("card__digit"))
// };

// const MAX_LENGTHS = { name: 20, cvc: 3, month: 2, year: 2, number: 16 };
// const DEFAULT_VALUES = { name: "NAME EXAMPLE", cvc: "919", month: "07", year: "22", number: "0000" };

// const validators = {
//   name: validateCardName,
//   cvc: validateCvc,
//   month: validateDate,
//   year: validateDate,
//   number: validateCardNumber
// };

// Object.keys(inputs).forEach((key) => {
//   inputs[key].addEventListener("input", () => handleInput(key));
// });

// function handleInput(key) {
//   const input = inputs[key];
//   if (input.value.length > MAX_LENGTHS[key]) {
//     input.value = input.value.slice(0, MAX_LENGTHS[key]);
//   } else {
//     updateExample(key);
//     validators[key](input);
//   }
// }

// function updateExample(key) {
//   if (key === "number") {
//     const parts = inputs.number.value.match(/.{1,4}/g) || Array(4).fill("0000");
//     examples.number.forEach((digit, index) => (digit.textContent = parts[index] || "0000"));
//   } else {
//     examples[key].textContent = inputs[key].value || DEFAULT_VALUES[key];
//   }
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (Object.keys(validators).every((key) => validators[key](inputs[key]))) {
//     completeForm();
//   }
// });

// function validateCardName(input) {
//   return validateField(input, "errorCardName", "El nombre es requerido");
// }

// function validateCardNumber(input) {
//   return validatePattern(input, "errorCardNumber", "El numero es requerido", "El numero es invalido", /^\d{16}$/);
// }

// function validateDate(input) {
//   return validatePattern(input, "errorDate", "La fecha es requerida", "La fecha es invalida", /^\d{2}$/);
// }

// function validateCvc(input) {
//   return validatePattern(input, "errorCvc", "El cvc es requerido", "El cvc es invalido", /^\d{3}$/);
// }

// function validateField(input, errorId, errorMessage) {
//   const errorElement = document.getElementById(errorId);
//   if (!input.value) {
//     showError(input, errorElement, errorMessage);
//     return false;
//   }
//   hideError(input, errorElement);
//   return true;
// }

// function validatePattern(input, errorId, emptyMessage, invalidMessage, pattern) {
//   const errorElement = document.getElementById(errorId);
//   if (!input.value) {
//     showError(input, errorElement, emptyMessage);
//     return false;
//   } else if (!pattern.test(input.value)) {
//     showError(input, errorElement, invalidMessage);
//     return false;
//   }
//   hideError(input, errorElement);
//   return true;
// }

// function showError(input, errorElement, message) {
//   errorElement.textContent = message;
//   errorElement.classList.add("messageError-visible");
//   input.classList.add("form__input--invalid");
// }

// function hideError(input, errorElement) {
//   errorElement.classList.remove("messageError-visible");
//   input.classList.remove("form__input--invalid");
// }

// function completeForm() {
//   const formContainer = document.getElementById("form");
//   const containerCompleted = document.createElement("div");
//   containerCompleted.className = "completedForm";
//   containerCompleted.innerHTML = `
//     <figure class="completed__figure">
//       <img src="images/icon-complete.svg" class="completed__img" />
//     </figure>
//     <h2 class="completed__title">Thank You!</h2>
//     <p class="completed__paragraph">We've added your card details</p>
//     <button class="form__button">Confirm</button>
//   `;
//   formContainer.replaceWith(containerCompleted);
// }

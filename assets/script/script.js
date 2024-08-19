const submitBtn = document.querySelector("input[type=submit]");
const firstNameInput = document.getElementById("firstName");
const firstNameError = document.getElementById("firstName_error");
const lastNameInput = document.getElementById("lastName");
const lastNameError = document.getElementById("lastName_error");
const emailAddressInput = document.getElementById("emailAddress");
const emailAddressError = document.getElementById("email_error");
const radioBtn1 = document.getElementById("general-enquiry");
const radioBtn2 = document.getElementById("support-request");
const queryError = document.getElementById("query_error");
const messageBox = document.getElementById("messageBox");
const messageBoxError = document.getElementById("message_error");
const conditionCheck = document.getElementById("conditionCheck");
const checkboxError = document.getElementById("checkbox_error");
const radioBtnBox = document.querySelector(".radio");
const toast = document.querySelector(".toast");

let user = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: false,
  message: "",
  checked: false,
};
const pattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}";
const regexPattern = new RegExp(pattern);

radioBtn1.addEventListener("click", () => {
  radioBtn1.parentElement.classList.add("activeRadio");
  radioBtn2.parentElement.classList.remove("activeRadio");
});
radioBtn2.addEventListener("click", () => {
  radioBtn1.parentElement.classList.remove("activeRadio");
  radioBtn2.parentElement.classList.add("activeRadio");
});

function emptyErrors() {
  firstNameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailAddressError.innerHTML = "";
  queryError.innerHTML = "";
  messageBoxError.innerHTML = "";
  checkboxError.innerHTML = "";
}
function checkValidation() {
  if (firstNameInput.value.trim() === "" || firstNameInput.value == null) {
    firstNameError.innerHTML = "This field is required";
  } else user.firstName = firstNameInput.value;

  if (lastNameInput.value.trim() === "" || lastNameInput == null) {
    lastNameError.innerHTML = "This field is required";
  } else user.lastName = lastNameInput.value;

  if (
    emailAddressInput.value.trim() === "" ||
    emailAddressInput.value == null
  ) {
    emailAddressError.innerHTML = "  This field is required";
  } else if (!emailAddressInput.value.match(regexPattern)) {
    emailAddressError.innerHTML = "Please enter a valid email address";
  } else user.email = emailAddressInput.value;

  if (!radioBtn1.checked && !radioBtn2.checked) {
    queryError.innerHTML = "Please select a query type";
  } else user.queryType = true;

  if (messageBox.value.trim() === "" || messageBox.value == null) {
    messageBoxError.innerHTML = "This field is required";
  } else user.message = messageBox.value;

  if (!conditionCheck.checked) {
    checkboxError.innerHTML =
      "To submit this form, please consent to being contacted";
  } else user.checked = true;

  if (
    user.firstName &&
    user.lastName &&
    user.email &&
    user.checked &&
    user.message &&
    user.queryType
  ) {
    showToastAndClearForm();
  }
}
function showToastAndClearForm() {
  toast.style.left = "50%";
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailAddressInput.value = "";
  messageBox.value = "";
  radioBtn1.checked = false;
  radioBtn2.checked = false;
  radioBtn1.parentElement.classList.remove("activeRadio");
  radioBtn2.parentElement.classList.remove("activeRadio");
  conditionCheck.checked = false;
  user = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: false,
    message: "",
    checked: false,
  };
  setTimeout(() => {
    toast.style.left = "-50%";
  }, 3000);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyErrors();
  checkValidation();
});

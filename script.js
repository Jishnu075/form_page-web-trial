"use strict";

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const checkBox = document.getElementById("terms-checkbox");

const fullNameErrorMessage = document.getElementById("fullname-err");
const emailErrorMessage = document.getElementById("email-err");
const phoneNumberErrorMessage = document.getElementById("pn-err");
const userNameErrorMessage = document.getElementById("username-err");
const passwordErrorMessage = document.getElementById("password-err");

// const a = document.querySelectorAll("input");

// fullName.addEventListener("blur", function () {});
// function validatePhoneNumber(value) {
//   console.log(value);
// }

let isFullNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;
let isUserNameValid = false;
let isPasswordValid = false;

// fullname:
//   cf numbers,if yes show err
//   cf sym,rp
// commonValidation(fullName, fullNameErrorMessage, fullNameRegexValue);

fullName.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validateFullName();
    isFullNameValid
      ? fullNameErrorMessage.classList.add("hidden")
      : (document.querySelector("#fullname").style.borderBottom =
          " 1px solid blue");

    console.log(validateFullName());
  } else if (fullName.value === "") {
    fullNameErrorMessage.classList.add("hidden");
    isFullNameValid = false;
  } else if (!validateFullName()) {
    fullNameErrorMessage.classList.remove("hidden");
  }
  function validateFullName() {
    if (fullName.value !== "") {
      var regex = /^[a-zA-Z ]+$/;
      if (fullName.value.match(regex)) {
        fullNameErrorMessage.classList.add("hidden");
        isFullNameValid = true;
        if (e.key === "Enter") {
          email.focus();
          isFullNameValid = true;
        }
        return true;
      } else {
        fullNameErrorMessage.classList.add("hidden");
        isFullNameValid = false;
      }
    } else {
      isFullNameValid = false;
      fullNameErrorMessage.classList.add("hidden");
    }
  }
});

// email:
//   cf @
//   cf symbols
email.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validateEmail();
    console.log(validateEmail());
  } else if (email.value === "") {
    emailErrorMessage.classList.add("hidden");
  } else if (!validateEmail()) {
    emailErrorMessage.classList.remove("hidden");
  }
  function validateEmail() {
    const emailValue = String(email.value);
    if (emailValue !== "") {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.value.match(regex)) {
        emailErrorMessage.classList.add("hidden");
        isEmailValid = true;
        if (e.key === "Enter") {
          phoneNumber.focus();
          isEmailValid = true;
        }
        return true;
      } else {
        emailErrorMessage.classList.add("hidden");
        isEmailValid = false;
      }
    } else {
      isEmailValid = false;
      emailErrorMessage.classList.add("hidden");
    }
  }
});
// phoneno:
//   cf 10 digit
//   cf number type
phoneNumber.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validatePhoneNumber();
    console.log(validatePhoneNumber());
  } else if (phoneNumber.value === "") {
    phoneNumberErrorMessage.classList.add("hidden");
  } else if (!validatePhoneNumber()) {
    phoneNumberErrorMessage.classList.remove("hidden");
  }
  function validatePhoneNumber() {
    if (phoneNumber.value !== "") {
      var regex = /^[6-9]\d{9}$/;
      if (phoneNumber.value.match(regex)) {
        phoneNumberErrorMessage.classList.add("hidden");
        isPhoneNumberValid = true;
        if (e.key === "Enter") {
          userName.focus();
          isPhoneNumberValid = true;
        }
        return true;
      } else {
        phoneNumberErrorMessage.classList.add("hidden");
        isPhoneNumberValid = false;
      }
    } else {
      isPhoneNumberValid = false;
      phoneNumberErrorMessage.classList.add("hidden");
    }
  }
});

// username:
//   cf sw character, symbols
userName.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validateUserName();
    console.log(validateUserName());
  } else if (userName.value === "") {
    userNameErrorMessage.classList.add("hidden");
  } else if (!validateUserName()) {
    userNameErrorMessage.classList.remove("hidden");
  }
  function validateUserName() {
    if (userName.value !== "") {
      var regex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
      if (userName.value.match(regex)) {
        userNameErrorMessage.classList.add("hidden");
        isUserNameValid = true;
        if (e.key === "Enter") {
          password.focus();
          isUserNameValid = true;
        }
        return true;
      } else {
        userNameErrorMessage.classList.add("hidden");
        isUserNameValid = false;
      }
    } else {
      isUserNameValid = false;
      userNameErrorMessage.classList.add("hidden");
    }
  }
});

// pw:
//   contain atleast symbol, num, character,
password.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validatePassword();
    console.log(validatePassword());
  } else if (password.value === "") {
    passwordErrorMessage.classList.add("hidden");
  } else if (!validatePassword()) {
    passwordErrorMessage.classList.remove("hidden");
  }
  function validatePassword() {
    if (password.value !== "") {
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (password.value.match(regex)) {
        passwordErrorMessage.classList.add("hidden");
        isPasswordValid = true;
        if (e.key === "Enter") {
          // password.focus();
          isPasswordValid = true;
        }
        return true;
      } else {
        passwordErrorMessage.classList.add("hidden");
        isPasswordValid = false;
      }
    } else {
      isPasswordValid = false;
      passwordErrorMessage.classList.add("hidden");
    }
  }
});

// function isAllValid() {
//   isFullNameValid
//     ? document.getElementById("is-fullname-err").classList.remove("hidden")
//     : null;
//   console.log(document.getElementById("is-email-err"));
//   isEmailValid
//     ? document.getElementById("is-email-err").classList.remove("hidden")
//     : null;
//   isPhoneNumberValid
//     ? document.getElementById("is-phone-err").classList.remove("hidden")
//     : null;
//   isUserNameValid
//     ? document.getElementById("is-username-err").classList.remove("hidden")
//     : null;
//   isPasswordValid
//     ? document.getElementById("is-password-err").classList.remove("hidden")
//     : null;

// if (isFullNameValid) {
//   document.getElementById("is-fullname-err").classList.remove("hidden");
//   if (isEmailValid) {
//     document.getElementById("is-email-err").classList.remove("hidden");
//   }
// }
// if (isPhoneNumberValid) {
//   document.getElementById("is-phone-err").classList.remove("hidden");
// }
// if (isUserNameValid) {
//   document.getElementById("is-username-err").classList.remove("hidden");
// }
// if (isPasswordValid) {
//   document.getElementById("is-password-err").classList.remove("hidden");
// } else {
//   return;
// }
// }

// common function
// item = password
// function commonValidation(item, itemErrorMessage, regexValue, isItemValid) {
//   item.addEventListener("keyup", function (e) {
//     if (e.key === "Enter") {
//       validate();
//       console.log(validate());
//     } else if (item.value === "") {
//       itemErrorMessage.classList.add("hidden");
//     } else if (!validate()) {
//       itemErrorMessage.classList.remove("hidden");
//     }
//     function validate() {
//       if (item.value !== "") {
//         var regex = regexValue;
//         if (item.value.match(regex)) {
//           itemErrorMessage.classList.add("hidden");
//           isItemValid = true;
//           if (e.key === "Enter") {
//             // password.focus();
//             isItemValid = true;
//           }
//           return true;
//         } else {
//           itemErrorMessage.classList.add("hidden");
//           isItemValid = false;
//         }
//       } else {
//         isItemValid = false;
//         itemErrorMessage.classList.add("hidden");
//       }
//     }
//   });
// }

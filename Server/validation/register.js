const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.salary = !isEmpty(data.salary) ? data.salary : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.country)) {
    errors.email = "Country field is required";
  } 

  // Password checks
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.salary)) {
    errors.salary = "Salary password field is required";
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};


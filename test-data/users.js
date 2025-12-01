export const loginData = [
  {
    username: "standard_user",
    password: "secret_sauce",
    description: "Successful login with valid credentials",
    expectedResult: "success"
  },
  {
    username: "wrong_user",
    password: "wrong_pass",
    description: "Failed login with invalid credentials",
    expectedResult: "failure",
    errorMessage: "Username and password do not match"
  },
  {
    username: "standard_user",
    password: "wrong_pass",
    description: "Login with valid username and invalid password",
    expectedResult: "failure",
    errorMessage: "Username and password do not match"
  },
  {
    username: "wrong_user",
    password: "secret_sauce",
    description: "Login with invalid username and valid password",
    expectedResult: "failure",
    errorMessage: "Username and password do not match"
  },
  {
    username: "standard_user",
    password: "",
    description: "Login with valid username and empty password",
    expectedResult: "failure",
    errorMessage: "Password is required"
  }
];

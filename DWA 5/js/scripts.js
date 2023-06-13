const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //   Scenario 2: This is the Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  }

  //   Scenario 4: For Providing anything that is not a number should crash the program
  else if (isNaN(dividend) || isNaN(divider)) {
    console.error(
      new Error("Something critical went wrong. Please reload the page."));
    document.body.innerHTML =
      "<h1>Something critical went wrong. Please reload the page.</h1>";
  }

  //   Scenario 3: An invalid division should log an error in the console
  else if (dividend < 0 || divider < 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.trace();

    //   Scenario 1: Dividing numbers result in a decimal number
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});
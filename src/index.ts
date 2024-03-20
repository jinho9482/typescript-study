// function

// no return value : void
function calculateTax(income: number): void {}

// Check the return value miss by using condition of json file
function calculateTax1(income: number): number {
  if (income < 50_000) return income * 1.2;
  // undefined can't be accepted when if statement is not true
  // So I have to put return value for this case.
  return income * 1.3;
}
calculateTax1(10_000);

// What if we wanna input only one argument?
function calculateTax2(income: number, taxYear?: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax2(10_000); // error, since taxYear is undefined and it can't be compared with number (? means optional)

function calculateTax3(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax3(10_000); // if taxYear is undefined, 2022 < 2022 is executed.

// There's a better way for this. Use default value for an argument
function calculateTax4(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax4(10_000, 2023);

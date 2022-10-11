/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// Not sure if this is ES6 or ES5

const a = 4;
const b = 5;

class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b == 0) throw new Error("division by zero");
    return a / b;
  }
}

const cal = new Calculator();

const sum = cal.sum(a, b);
const subs = cal.subtraction(a, b);
const mult = cal.multiplication(a, b);
const div = cal.division(a, b);

const object4methods = [sum, subs, mult, div];

console.log(object4methods);

/////////////////////////////

// this is ES5?
function calculate(number1, number2, operator) {
  if (!number1 || !number2) {
    return "Invalid number";
  }
  if (!["*", "-", "/", "+"].includes(operator)) {
    return "Invalid operator";
  }
  switch (operator) {
    case "+":
      return number1 + number2;
    case "/":
      return number1 / number2;
    case "*":
      return number1 * number2;
    case "-":
      return number1 - number2;
  }
}
console.log(calculate(2, 3, "+"));

const sumF2 = (a, b) => calculate(a, b, "+");
const subsF2 = (a, b) => calculate(a, b, "-");
const multF2 = (a, b) => calculate(a, b, "*");
const divF2 = (a, b) => calculate(a, b, "/");

console.log(sumF2(2, 3));
console.log(subsF2(2, 3));
console.log(multF2(2, 3));
console.log(divF2(2, 3));

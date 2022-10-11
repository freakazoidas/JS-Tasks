/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function Conversion(weight) {
  this.weight = weight;
  this.addToDiv = function () {
    const emptyfy = document.getElementById("output");
    emptyfy.innerHTML = "";
    const newLine = document.createElement("br");

    const lbData = document.createElement("span");
    lbData.textContent =
      `Weight in pounds: ` + Number(this.weight) * 2.2046 + ` lb `;

    const gData = document.createElement("span");
    gData.textContent =
      `Weight in grams: ` + Number(this.weight) / 0.001 + ` g `;

    const ozData = document.createElement("span");
    ozData.textContent =
      `Weight in ounces: ` + Number(this.weight) * 35.274 + ` oz `;

    document.querySelector("#output").append(lbData);
    document.querySelector("#output").append(gData);
    document.querySelector("#output").append(ozData);
  };
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const search = document.getElementById("search").value;

  const converted = new Conversion(search);
  converted.addToDiv();
});

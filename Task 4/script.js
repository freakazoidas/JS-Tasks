/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function retrieveContacts() {
  const ENDPOINT = "cars.json";
  fetch(ENDPOINT)
    .then(function (response) {
      return response.json();
    })
    .then(function (contacts) {
      buildTable(contacts);
    })
    .catch(function (error) {
      console.log("Error during fetch: " + error.message);
    });
}

function buildTable(contacts) {
  contacts.forEach(function (curr) {
    addLineToHTMLTable(curr.brand, curr.models);
  });
}

function addLineToHTMLTable(brandVariable, modelsVariable) {
  let tableBody = document.querySelector("#tableBody");

  let newRow = tableBody.insertRow();

  let brandVariableCell = newRow.insertCell();
  brandVariableCell.innerHTML = brandVariable;
  brandVariableCell.classList.add("brandHead");
  // let modelsVariableCell = newRow.insertCell();
  // modelsVariableCell.innerHTML = modelsVariable;

  let modelsDiv = document.createElement("div");
  modelsDiv.innerText = modelsVariable;
  brandVariableCell.appendChild(modelsDiv);
  modelsDiv.classList.add("brandContent");

  // for (let i = 0; i < modelsVariable.length; i++) {
  //   let modelsDiv = document.createElement("div");
  //   modelsDiv.innerText = modelsVariable[i];
  //   brandVariableCell.appendChild(modelsDiv);
  // }
}

retrieveContacts();

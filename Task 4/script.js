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
  hideMessage();
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

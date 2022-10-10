/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

function retrieveContacts() {
  const ENDPOINT = "https://api.github.com/users";
  hideMessage();
  fetch(ENDPOINT)
    .then(function (response) {
      // response.json() returns a json string,
      // returning it will convert it
      // to a pure JavaScript
      // object for the next then's callback
      return response.json();
    })
    .then(function (contacts) {
      // contacts is a JavaScript object here
      buildTable(contacts);
    })
    .catch(function (error) {
      console.log("Error during fetch: " + error.message);
    });
}

function hideClearButton() {
  b = document.querySelector("#clear-button");
  if (!b.classList.contains("hide")) {
    b.classList.toggle("hide");
  }
}

function clearTable() {
  document.querySelector("#tableContactBody").innerHTML = "";
  hideClearButton();
}

function showClearButton() {
  b = document.querySelector("#clear-button");
  b.classList.toggle("hide");
}
function hideMessage() {
  b = document.querySelector("#message");
  b.classList.add("hide");
  c = document.querySelector("#tableHeader");
  c.classList.remove("hide");
}

function buildTable(contacts) {
  // Clear out the table body first.
  clearTable();

  // Add the table content.
  // addLineToHTMLTable(element.fname, element.lname)
  contacts.forEach(function (curr) {
    addLineToHTMLTable(curr.login, curr.avatar_url);
  });

  showClearButton();
}

// Add a line to the HTML table
function addLineToHTMLTable(loginVariable, avatarUrlVariable) {
  // Get the body of the table using the selector API
  var tableBody = document.querySelector("#tableContactBody");

  // Add a new row at the end of the table
  var newRow = tableBody.insertRow();

  // add  new cells to the row
  var loginVariableCell = newRow.insertCell();
  loginVariableCell.innerHTML = loginVariable;

  var avatarUrlVariableCell = newRow.insertCell();
  avatarUrlVariableCell.innerHTML = avatarUrlVariable;
}

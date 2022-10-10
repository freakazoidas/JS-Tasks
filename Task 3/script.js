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
      return response.json();
    })
    .then(function (contacts) {
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
  clearTable();

  contacts.forEach(function (curr) {
    addLineToHTMLTable(curr.login, curr.avatar_url);
  });

  showClearButton();
}

function addLineToHTMLTable(loginVariable, avatarUrlVariable) {
  let tableBody = document.querySelector("#tableContactBody");

  let newRow = tableBody.insertRow();

  let loginVariableCell = newRow.insertCell();
  loginVariableCell.innerHTML = loginVariable;

  let img = document.createElement("img");
  img.src = avatarUrlVariable;

  let avatarUrlVariableCell = newRow.insertCell();
  avatarUrlVariableCell.appendChild(img);
}

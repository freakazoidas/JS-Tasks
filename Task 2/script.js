/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counter = document.getElementById("btn__element");
let btn__state = document.getElementById("btn__state");
let count = 0;

counter.addEventListener("click", () => {
  count += 1;
  btn__state.innerHTML = count;
});

let count = 0;
let countElement = document.getElementById("count-elm");
let saveEl = document.getElementById("save-el");
function increment() {
  count +=1;
  countElement.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countElement.textContent = 0;
  count = 0;
}



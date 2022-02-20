// JavaScript can concatenate variables even any of them is a integer variable. JavaScripts downcasts that number variable to string and then concatenate them as one string.

// innerText and textContent are about the same. Both returns inner text of the refrenced element. Difference is that innerText cannot differentiate spaces. If we are concatenting text with spaces innerText has no capability of showing spaces. So better use "textContent"

let count = 0;
function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function save() {
  let countStr = count + " - ";
  document.getElementById("save-el").textContent += countStr;
  count = 0;
  document.getElementById("count-el").textContent = count;
}

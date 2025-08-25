const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const counter = document.getElementById("counter");

let counterValue = 0;

increasebtn.onclick = function () {
  // Increase the counter value
  counterValue++;

  // Update the counter text content
  counter.textContent = counterValue;

  // Log the counter value
  console.log(counterValue);
};

decreasebtn.onclick = function () {
  counterValue--;
  counter.textContent = counterValue;

  console.log(counterValue);
};

resetbtn.onclick = function () {
  counterValue = 0;
  counter.textContent = counterValue;

  console.log(counterValue);
};

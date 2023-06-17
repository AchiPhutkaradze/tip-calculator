var bill = document.getElementById("first");
const numberOfPeople = document.getElementById("second");
const firstEror = document.querySelector(".eror");
const secondEror = document.querySelector(".second-eror");
const firstAmount = document.querySelector(".first-amount");
const secondAmount = document.querySelector(".amount");
// butoons of percent
const percents = document.querySelectorAll(".percent");
const resetButton = document.getElementById("reset");
const custom = document.getElementById("custom");
var clicked = false;

//eror

bill.addEventListener("input", function () {
  if (bill.value == 0) {
    firstEror.style.display = "block";
  } else {
    firstEror.style.display = "none";
  }
});

second.addEventListener("input", function () {
  if (second.value == 0) {
    secondEror.style.display = "block";
  } else {
    secondEror.style.display = "none";
  }
});

//resetfunction
function myReset() {
  location.reload();
}

resetButton.addEventListener("click", function () {
  myReset();
});

function calculator(percent) {
  let billInput = ((bill.value / 100) * percent) / numberOfPeople.value;
  let fixedNumber = billInput.toFixed(2);
  let secondInput = bill.value / numberOfPeople.value + billInput;
  let totalInput = secondInput.toFixed(2);
  clicked = true;
  if (
    Number(bill.value) > 0 &&
    Number(numberOfPeople.value) > 0 &&
    clicked == true
  ) {
    firstAmount.innerHTML = `$${fixedNumber}`;
    secondAmount.innerHTML = `$${totalInput}`;
  }
}
function anyNumber() {
  let customInput = ((bill.value / 100) * custom.value) / numberOfPeople.value;
  let second = bill.value / numberOfPeople.value + customInput;
  clicked = true;
  if (
    Number(bill.value) > 0 &&
    Number(numberOfPeople.value) > 0 &&
    clicked == true
  ) {
    firstAmount.innerHTML = `$${customInput}`;
    secondAmount.innerHTML = `$${second}`;
  }
}
custom.addEventListener("keydown", anyNumber);


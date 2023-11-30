const changeButton = document.getElementById("change-button");
const number = document.getElementById("number");

function changeNumber(event) {
    const currentNumber = parseInt(number.innerText); // string converted into an integer
    const newNumber = currentNumber + 1;

    number.innerText = newNumber;
}

changeButton.addEventListener("click", changeNumber);
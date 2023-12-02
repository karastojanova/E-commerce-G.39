const changeButton = document.getElementById("change-button");
const number = document.getElementById("number");
const addedItem = document.getElementById ("addeditem");
const addedPrice = document.getElementById("price2");

function changeNumber(event) {
    const currentNumber = parseInt(number.innerText); // string converted into an integer
    const newNumber = currentNumber + 1;

    number.innerText = newNumber;
}

changeButton.addEventListener("click", changeNumber);

changeButton.addEventListener ("click", function (event){
    addedItem.style.display = "block";
    addedPrice.style.display = "block";
});
const buttonMinus = document.querySelector(`[data-action="decrement"]`);
let counterValue = 0;
buttonMinus.addEventListener("click", () => {
    counterValue = counterValue - 1;
     document.querySelector("#value").innerHTML = counterValue;
});
const buttonPlus = document.querySelector(`[data-action="increment"]`);
buttonPlus.addEventListener("click", () => {
    counterValue = counterValue + 1;
     document.querySelector("#value").innerHTML = counterValue;
});




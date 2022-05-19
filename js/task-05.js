const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");
textInput.addEventListener("input", (e) => {
    if (!textInput.value) {
        textSpan.innerHTML = "Anonymous";
    } else {
        textSpan.textContent = e.currentTarget.value;
    }
});
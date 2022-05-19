const inputHtml = document.querySelector("#font-size-control");
const spanId = document.querySelector("#text");
inputHtml.addEventListener("input", () => {
    let size = inputHtml.value; 
   return spanId.style.fontSize = size + "px"
});


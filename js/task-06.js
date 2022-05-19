const inputHtml = document.querySelector("input");
let lenght = 0;
inputHtml.addEventListener("input", (e) => {
  return (lenght = e.currentTarget.value.length);
});
inputHtml.addEventListener("focus", () => {
    inputHtml.classList.remove("valid");
    inputHtml.classList.remove("invalid");
});
inputHtml.addEventListener("blur", () => {
  if (inputHtml.getAttribute("data-length") > lenght) {
    inputHtml.classList.add("valid");
  } else {
    inputHtml.classList.add("invalid");
  }
});

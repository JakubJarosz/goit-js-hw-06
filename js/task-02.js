const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const stringElements = ingredients.map((i) => `<li class=item>${i}</li>`).join("");
const list = document.querySelector("#ingredients");
list.innerHTML = stringElements;


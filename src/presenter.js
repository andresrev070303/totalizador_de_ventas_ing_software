import totalizar from "./totalizador";

const first = document.querySelector("#precio");
const second = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(first.value);
  const cantidad = Number.parseInt(second.value);

  div.innerHTML = "<p>" + totalizar(firstNumber, secondNumber) + "</p>";
});

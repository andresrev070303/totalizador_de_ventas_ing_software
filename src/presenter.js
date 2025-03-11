import totalizar from "./totalizador.js";
import calcularPrecioNeto from "./calcularPrecioNeto.js";
import calcularImpuestoPorEstado from "./calcularImpuestoPorEstado.js";
import calcularDescuentoPorPrecioNeto from "./calcularDescuentoPorPrecioNeto.js";
import calcularImpuestoDescuentoCategoria from "./calcularImpuestoDescuentoCategoria";
import calcularCostoEnvio from "./calculadorCostoEnvio";
 

 
const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const inputEstado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const divPrecioNeto = document.querySelector("#precio-neto-div");
const divDescuento = document.querySelector("#descuento-div");
const divImpuesto = document.querySelector("#impuesto-div");
const divPrecioTotal = document.querySelector("#resultado-div");
const inputCategoria = document.querySelector("#categoria");
const inputPeso = document.querySelector("#peso");
const divImpuestoDescuentoCategoria = document.querySelector("#impuestoDescuento-div");
const divCostoEnvio = document.querySelector("#envio-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(inputPrecio.value);
  const cantidad = Number.parseInt(inputCantidad.value);
  const estado = inputEstado.value;
  const categoria = inputCategoria.value;
  const peso = Number.parseInt(inputPeso.value);

  const neto = calcularPrecioNeto(precio, cantidad);
  const descuento =  calcularDescuentoPorPrecioNeto (neto);
  const impuesto = calcularImpuestoPorEstado(neto, estado);
  const envio = calcularCostoEnvio(peso);
  const total = totalizar(precio, cantidad, estado, categoria, peso);
   
  divPrecioNeto.innerHTML = "<p> Precio Neto: " + neto + "</p>";
  divDescuento.innerHTML = "<p> Descuento: " + descuento + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto: " + impuesto + "</p>";
  divImpuestoDescuentoCategoria.innerHTML = "<p> Impuesto o Descuento por Categoria: " + impuestoDescuentoCategoria + "</p>";
  divCostoEnvio.innerHTML = "<p> Costo de Envio: " + envio + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total: " + total + "</p>";
 });              

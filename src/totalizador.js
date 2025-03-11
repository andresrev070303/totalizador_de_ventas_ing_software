import calcularPrecioNeto from "./calcularPrecioNeto.js";
import calcularImpuestoPorEstado from "./calcularImpuestoPorEstado.js";
import calcularDescuentoPorPrecioNeto from "./calcularDescuentoPorPrecioNeto.js"
import calcularImpuestoDescuentoCategoria from "./calcularImpuestoDescuentoCategoria.js";
import calculadorCostoEnvio from "./calculadorCostoEnvio.js";

function totalizar(precio, cantidad, estado, categoria, peso) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPorPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  var costoEnvio = calculadorCostoEnvio(peso);
  return neto + impuesto - descuento + impuestoDescuentoCategoria + costoEnvio;
}


export default totalizar;
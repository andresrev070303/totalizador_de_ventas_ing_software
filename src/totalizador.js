import calcularPrecioNeto from "./calcularPrecioNeto.js";
import calcularImpuestoPorEstado from "./calcularImpuestoPorEstado.js";
import calcularDescuentoPorPrecioNeto from "./calcularDescuentoPorPrecioNeto.js"
import calcularImpuestoDescuentoCategoria from "./calcularImpuestoDescuentoCategoria.js";
import calculadorCostoEnvio from "./calculadorCostoEnvio.js";
import calcularDescuentoEnvio from "./calculadorDescuentoEnvio.js";

function totalizar(precio, cantidad, estado, categoria, peso, cliente) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPorPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  var costoEnvio = calculadorCostoEnvio(peso);
  var descuentoEnvio = calcularDescuentoEnvio(costoEnvio, categoria);
  
  return neto + impuesto - descuento + impuestoDescuentoCategoria + costoEnvio - descuentoEnvio;
}


export default totalizar;
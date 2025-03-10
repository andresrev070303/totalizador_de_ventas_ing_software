import calcularPrecioNeto from "./calcularPrecioNeto.js";
import calcularImpuestoPorEstado from "./calcularImpuestoPorEstado.js";
import calcularDescuentoPorPrecioNeto from "./calcularDescuentoPorPrecioNeto.js"
import calcularImpuestoDescuentoCategoria from "./calcularImpuestoDescuentoCategoria.js";

function totalizar(precio, cantidad, estado, categoria) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPorPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  return neto + impuesto - descuento + impuestoDescuentoCategoria;
}


export default totalizar;
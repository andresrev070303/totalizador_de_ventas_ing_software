function totalizar(precio, cantidad) {
  var neto = precio * cantidad;
  neto = calcularDescuentoPorCantidad(neto, cantidad);
  return neto;
}
function calcularDescuentoPorCantidad(neto,cantidad){
  if (cantidad == 1000) {
    return neto - neto * 3.00 / 100;
  }  
  else {
    return neto;
  }
}
export default totalizar;
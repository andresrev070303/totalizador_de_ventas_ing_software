function totalizar(precio, cantidad) {
  var neto = precio * cantidad;
  var descuento = calcularDescuentoPorPrecioNeto(neto);
return neto - descuento;
}
function calcularDescuentoPorPrecioNeto(neto){
  if (neto == 1000) {
    return neto * 3.00 / 100;
  }
  else if(neto == 3000){
    return neto * 5.00 / 100;
  }
  else {
    return 0;
  }
}

export default totalizar;
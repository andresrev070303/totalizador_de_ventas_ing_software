import totalizar from "./totalizador";
 import calcularPrecioNeto from "./calcularPrecioNeto";
 import calcularImpuestoPorEstado from "./calcularImpuestoPorEstado";
 import calcularDescuentoPrecioNeto from "./calcularDescuentoPorPrecioNeto";
 import calcularImpuestoDescuentoCategoria from "./calcularImpuestoDescuentoCategoria";
 import calcularDescuentoEnvio from "./calculadorDescuentoEnvio";
 import calcularCostoEnvio from "./calculadorCostoEnvio";
 import calcularDescuentoEspecial from "./calculadorDescuentoEspecial";
 
 const inputPrecio = document.querySelector("#precio");
 const inputCantidad = document.querySelector("#cantidad");
 const inputEstado = document.querySelector("#estado");
 const inputCategoria = document.querySelector("#categoria");
 const inputPeso = document.querySelector("#peso");
 const inputCliente = document.querySelector("#cliente");
 const form = document.querySelector("#totalizador-form");
 const divPrecioNeto = document.querySelector("#precio-neto-div");
 const divDescuento = document.querySelector("#descuento-div");
 const divImpuesto = document.querySelector("#impuesto-div");
 const divImpuestoDescuentoCategoria = document.querySelector("#impuestoDescuento-div");
 const divCostoEnvio = document.querySelector("#envio-div");
 const divDescuentoEnvio = document.querySelector("#descuentoEnvio-div");
 const divDescuentoEspecial = document.querySelector("#descuentoEspecial-div");
 const divPrecioTotal = document.querySelector("#resultado-div");
 
 form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(inputPrecio.value);
  const cantidad = Number.parseInt(inputCantidad.value);
  const estado = inputEstado.value;
  const categoria = inputCategoria.value;
  const peso = Number.parseFloat(inputPeso.value);
  const cliente = inputCliente.value;
  if (precio <= 0 || cantidad <= 0 || peso <= 0) {
    alert("Los valores de precio, cantidad y peso deben ser mayores a 0");
    return;
  }
  else{

  const neto = calcularPrecioNeto(precio, cantidad);
  const descuento = calcularDescuentoPrecioNeto(neto);
  const impuesto = calcularImpuestoPorEstado(neto, estado);
  const impuestoDescuentoCategoria = calcularImpuestoDescuentoCategoria(neto, categoria);
  const envio = calcularCostoEnvio(peso);
  const descuentoEnvio = calcularDescuentoEnvio(envio, cliente);
  const descuentoEspecial = calcularDescuentoEspecial(neto, categoria, cliente);
  const total = totalizar(precio, cantidad, estado, categoria, peso, cliente);

  // Calcular el porcentaje de descuento
  const porcentajeDescuento = (descuento / neto) * 100 || 0;
  
  // Mostrar resultados en el formato deseado
  divPrecioNeto.innerHTML = `<p>Precio neto (${cantidad} * $${precio}): $${neto.toFixed(2)}</p>`;
  divDescuento.innerHTML = `<p>Descuento (${porcentajeDescuento.toFixed(2)}%): $${descuento.toFixed(2)}</p>`;
  divImpuesto.innerHTML = `<p>Impuesto para ${estado} (${(impuesto / neto * 100).toFixed(2)}%): $${impuesto.toFixed(2)}</p>`;
  divImpuestoDescuentoCategoria.innerHTML = `<p>Impuesto o Descuento por Categoría: $${impuestoDescuentoCategoria.toFixed(2)}</p>`;
  divCostoEnvio.innerHTML = `<p>Costo de Envío: $${envio.toFixed(2)}</p>`;
  divDescuentoEnvio.innerHTML = `<p>Descuento de Envío: $${descuentoEnvio.toFixed(2)}</p>`;
  divDescuentoEspecial.innerHTML = `<p>Descuento Especial: $${descuentoEspecial.toFixed(2)}</p>`;
  divPrecioTotal.innerHTML = `<p><strong>Precio total (descuento e impuesto): $${total.toFixed(2)}</strong></p>`;
  }
});
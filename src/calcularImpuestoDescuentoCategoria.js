function calcularImpuestoDescuentoCategoria(neto, categoria){
    var impuesto = 0;
     var descuento = 0;
    if (categoria == "Varios"){
        return 0;
    } else if (categoria == "Alimentos"){
        descuento = neto * 2.00 / 100;
        return impuesto - descuento;
    }
    else {
        return 0;
    }
    
}
export default calcularImpuestoDescuentoCategoria;
function calcularDescuentoEnvio(precio, tipoCliente){
    if(tipoCliente === "normal"){
        return 0;
    }
    else if (tipoCliente === "recurrente"){
        return precio * 0.005;
    }
    else if (tipoCliente === "antiguo"){
        return precio * 0.01;
    }
}
export default calcularDescuentoEnvio;
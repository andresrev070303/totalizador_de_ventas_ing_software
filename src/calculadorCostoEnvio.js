function calculadorCostoEnvio(peso) {
    if(peso > 0 && peso <= 10){
        return 0;
    }else if (peso > 10 && peso <= 20){
        return 3.5;
    }
}

export default calculadorCostoEnvio;
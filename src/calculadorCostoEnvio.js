function calculadorCostoEnvio(peso) {
    if(peso > 0 && peso <= 10){
        return 0;
    }else if (peso > 10 && peso <= 20){
        return 3.5;
    }
    else if (peso > 20 && peso <= 40){
        return 5;
    }
    else if (peso > 40 && peso <= 80){
        return 6;
    }
}

export default calculadorCostoEnvio;
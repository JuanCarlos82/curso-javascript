function Ejemplo1(num1, num2){
    let cadena = "";
    if (num1 > num2){
        cadena = "El mayor ese " + num1 + " y el menor es : " + num2;
    }
    else{
        cadena = "El mayor ese " + num2 + " y el menor es : " + num1;
    }
    return cadena
}

function Ejemplo2(num){
    
    let cadena = "";
    if(num % 2 == 0){
       cadena = "el numero es par";
    }
    else{
        cadena = "el numero es impar";
    }
    return cadena;
}

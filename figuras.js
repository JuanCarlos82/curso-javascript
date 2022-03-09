// codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//onsole.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
/*
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
*/

function areaCuadrado(lado){
    return lado * lado;
}
/*
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
*/
console.groupEnd();

// codigo del triangulo
console.group("Triangulos");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del tringulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo 
    + " cm"
);
*/
/*
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm");
*/
function perimetroTriangulo(lado1, lado2, base ){
    return lado1 + lado2 + base;
}
/*
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");
*/
function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
/*
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm2");
*/
console.groupEnd();

// codigo del circulo
console.group("circulos");
// radio
/*
const radioCirculo = 4;
console.log("El radio de circulo es: " + radioCirculo + " cm");
*/
// diametro
function diametroCirculo(radio){
    return radio * 2;
}
/*
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es: " + diametroCirculo + " cm");
*/
// pi
const PI = Math.PI;
console.log("PI es: " + PI );
// circunferencia
function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/*
const circunferenciaCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm");
*/
// area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
/*
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El area del cicrulo es: " + areaCirculo + " cm");
*/
console.groupEnd();

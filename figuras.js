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

// triangulo isoseles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}



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




// aqui interactuamos con html

// calcular cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area de cuadrado es: " + area);
}

// calcular triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("InputLado2");
    const value2 = Number(lado2.value)
    const base = document.getElementById("InputBase");
    const value3 = Number(base.value)

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const base2 = document.getElementById("InputBase2");
    const value1 = Number(base2.value)
    const altura = document.getElementById("InputAltura");
    const value2 = Number(altura.value)

    const area = areaTriangulo(value1,value2);
    alert("El area del triangulo es: " + area);
}

// calcular circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametro);
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const circunferencia = circunferenciaCirculo(value);
    alert("La circunferencia del circulo es: " + circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}
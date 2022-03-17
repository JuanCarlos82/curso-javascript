// (precio * (100 - descuento))/100
/*
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/ 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});
*/

const cupon = [
    "CODE15",
    "CODE25",
    "CODE30"
];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}

function precioConDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const preciovalue = inputPrecio.value;
/*
    const inputDescuento = document.getElementById("InputDescuento");
    const descuentovalue = inputDescuento.value;
*/
    const inputCupon = document.getElementById("InputCupon");
    const cuponvalue = inputCupon.value;

    let descuento;

    switch(cuponvalue) {
      case cupon[0]: 
        descuento = 15;
      break;
      case cupon[1]:
        descuento = 25;
      break;
      case cupon[2]: 
        descuento = 30;
      break;
    }

    //const precioConDescuento = calcularPrecioConDescuento(preciovalue, descuentovalue);
    const precioConDescuento = calcularPrecioConDescuento(preciovalue, descuento);

    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText = "El precio con descuento es: $ " + precioConDescuento;

}


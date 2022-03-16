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

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}

function precioConDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const preciovalue = inputPrecio.value;
    const inputDescuento = document.getElementById("InputDescuento");
    const descuentovalue = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(preciovalue, descuentovalue);

    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText = "El precio con descuento es: $ " + precioConDescuento;

}


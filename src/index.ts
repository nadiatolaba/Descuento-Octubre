let valor = document.getElementById("valor");
let unidades = document.getElementById("unidades");
let mesCompra = document.getElementById("mesCompra");
let btnCosto = document.getElementById("btnCosto");

btnCosto.addEventListener("click", () => {
  let monto: number = Number(valor.value);
  let cantidad: number = Number(unidades.value);
  let descuento: number = 0;
  let mes: string = mesCompra.value;
  let montoConDescuento: number = 0;
  let precioTotal: number = monto * cantidad;

  if (mes === "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por comprar en el mes de Octubre tiene 15% de descuento");
    console.log("El monto a pagar es " + montoConDescuento);
  } else {
    console.log("Usted no tiene descuento, el monto a pagar es " + precioTotal);
  }
});


function recargo(cantCuotas,precio){  //Calcular pagos en cuotas sobre un monto determinado.
    let precioCuota =0;

        switch (cantCuotas){
        
        case 1: alert("El precio del producto es " + Math.round(precio)) 

        break;

        case 3: precio = precio*1.05; //Recargo del 5%
                precioCuota = precio/3
                alert("El precio total del producto es " + Math.round(precio) + " en 3 cuotas de " + Math.round(precioCuota))
        break;
        
        case 6: precio = precio*1.10; //Recargo del 10%
                precioCuota = precio/6
                alert("El precio total del producto es " + Math.round(precio) + " en 6 cuotas de " + Math.round(precioCuota ))
        break;
            
        }
}

//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

function descuento(banco,precioDesc){
    switch (banco){
        case 1:
                precioDesc = precioDesc*0.95; //Descuento del 5%
        break;
        case 2: 
                precioDesc = precioDesc*0.90; //Descuento del 10%
        break;
        
        default: precioDesc = precioDesc*1; //No hay descuento
        break;
   
    }
    return precioDesc;
}

let precio = Number(prompt("Ingresa el precio del producto"))
        while(precio <= 0){
            alert("Ingrese un precio mayor que cero")
            precio = Number(prompt("Ingresa el precio del producto"))
        }
    let cantCuotas = Number(prompt("Ingresa la cantidad de cuotas a pagar"))
        while(cantCuotas != 1 && cantCuotas !=3 && cantCuotas !=6 ){
            alert("Ingrese un número de cuotas igual a 1, 3 o 6")
            cantCuotas = Number(prompt("Ingresa la cantidad de cuotas a pagar"))
        }
    
    let banco = Number(prompt("Ingresá el banco de la tarjeta a abonar. (Tenemos descuentos con icbc (1) y bbva (2) )."))
    
    let precioNuevo = Math.ceil(descuento(banco,precio));

    recargo(cantCuotas, precioNuevo); //Aplico el % de recargo al precio con descuento ya aplicado



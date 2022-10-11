import cipher from "./cipher.js";

// funcion boton de codificar
let button = document.getElementById("codificar");
button.addEventListener("click", function () {

    //constante primera caja 

    let mensaje = document.getElementById("mensaje1").value;
    //boton offsett
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById("mensaje1").value = cipher.encode(offset,mensaje);
    //console.log(mensaje);

})
//funcion decodificar
    
    //console.log("mensaje2");
    //boton de decodificar
    let boton2 = (document.getElementById("decodificar"));
    boton2.addEventListener("click", function () {
        let message = document.getElementById("mensaje2").value;
        const offset = parseInt(document.getElementById("offset").value);
        document.getElementById("mensaje2").value = cipher.decode(offset, message);
    })




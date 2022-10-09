import cipher from "./cipher.js";

//  funcion boton de codificar
let button = document.getElementById("codificar");
button.addEventListener("click", function () {

    //constante primera caja 

    let mensaje = document.getElementById("mensaje1").value;
    //boton offsett
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById("mensaje1").value = cipher.encode(mensaje, offset);
    //console.log(mensaje);

})
//funcion decodificar
document.getElementById("mensaje2").addEventListener("click", function () {
    let message = document.getElementById("mensaje2").value;
    //console.log("mensaje2");
    //boton de decodificar
    let boton = parseInt(document.getElementById("decodificar").value);
    boton.addEventListener("click", function () {
        const offset = parseInt(document.getElementById("offset").value);
        document.getElementById("mensaje2").valor = cipher.decodificar(message, offset);
    })
}
)
console.log(cipher);

import { 
    validarTodo,
    validarNombre,
    validarCalle,
    validarNumeroCalle,
    validarProvincia,
    validarPostal,
    limpiarFormulario
} from "./validarCrearSucursal.js";

let nombreSucursal = document.getElementById("nombreSucursal");
let calleSucursal = document.getElementById("calleSucursal");
let numeroCalleSucursal = document.getElementById("numeroCalleSucursal");
let provinciaSucursal = document.getElementById("provinciaSucursal");
let postalSucursal = document.getElementById("postalSucursal");
let botonEnviar = document.getElementById("enviar");
let botonLimpiar = document.getElementById("limpiar");


nombreSucursal.addEventListener("blur", function () {
    validarNombre(nombreSucursal);
});

calleSucursal.addEventListener("blur", function () {
    validarCalle(calleSucursal);
});

numeroCalleSucursal.addEventListener("blur", function () {
    validarNumeroCalle(numeroCalleSucursal);
});

provinciaSucursal.addEventListener("blur", function () {
    validarProvincia(provinciaSucursal);
});

postalSucursal.addEventListener("blur", function () {
    validarPostal(postalSucursal);
});

botonEnviar.addEventListener("click", function (e) {
    formularioCrearSucursal(e);
});

botonLimpiar.addEventListener("click", function () {
    limpiarFormulario(nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal);
})


function formularioCrearSucursal(e) {
    e.preventDefault();

    if (
        validarNombre(nombreSucursal) &&
        validarCalle(calleSucursal) &&
        validarNumeroCalle(numeroCalleSucursal) &&
        validarProvincia(provinciaSucursal) &&
        validarPostal(postalSucursal)
    ) {

        // MODAL QUE CONFIRMA LA CREACIÓN DE LA SUCURSAL
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sucursal creada correctamente",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(function() {
            location.replace("/pages/administracion/gestionSucursales/gestionSucursales.html");
        }, 2000);
    } else {
        validarTodo(nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal);
    }
}
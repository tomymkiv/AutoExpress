import { 
    validarTodo,
    validarPuestoEmpleado,
    validarTextoEmpleado,
    validarNumeroEmpleado,
    validarFechaNacimientoEmpleado,
    validarUrlImagenEmpleado,
    limpiarFormulario
} from "./validarCrearEmpleado.js";


let puestoEmpleado = document.getElementById("puestoEmpleado");
let nombreEmpleado = document.getElementById("nombreEmpleado");
let apellidoEmpleado = document.getElementById("apellidoEmpleado");
let dniEmpleado = document.getElementById("dniEmpleado");
let fechaNacimientoEmpleado = document.getElementById("fechaNacimientoEmpleado");
let celularEmpleado = document.getElementById("celularEmpleado");
let calleEmpleado = document.getElementById("calleEmpleado");
let numeroCalleEmpleado = document.getElementById("numeroCalleEmpleado");
let urlImagenEmpleado = document.getElementById("urlImagenEmpleado");
let botonEnviar = document.getElementById("enviar");
let botonLimpiar = document.getElementById("limpiar");


puestoEmpleado.addEventListener("blur", function () {
    validarPuestoEmpleado(puestoEmpleado);
});

nombreEmpleado.addEventListener("blur", function () {
    validarTextoEmpleado(nombreEmpleado);
});

apellidoEmpleado.addEventListener("blur", function () {
    validarTextoEmpleado(apellidoEmpleado);
});

calleEmpleado.addEventListener("blur", function () {
    validarTextoEmpleado(calleEmpleado);
});

dniEmpleado.addEventListener("blur", function () {
    validarNumeroEmpleado(dniEmpleado,"dni");
});

celularEmpleado.addEventListener("blur", function () {
    validarNumeroEmpleado(celularEmpleado,"celular");
});

numeroCalleEmpleado.addEventListener("blur", function () {
    validarNumeroEmpleado(numeroCalleEmpleado,"calle");
});

fechaNacimientoEmpleado.addEventListener("blur", function () {
    validarFechaNacimientoEmpleado(fechaNacimientoEmpleado);
});

urlImagenEmpleado.addEventListener("blur", function () {
    validarUrlImagenEmpleado(urlImagenEmpleado);
});

botonEnviar.addEventListener("click", function (e) {
    formularioCrearEmpleado(e);
});

botonLimpiar.addEventListener("click", function () {
    limpiarFormulario(puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado);
})


function formularioCrearEmpleado(e) {
    e.preventDefault();

    if (
        validarPuestoEmpleado(puestoEmpleado) &&
        validarTextoEmpleado(nombreEmpleado) &&
        validarTextoEmpleado(apellidoEmpleado) &&
        validarNumeroEmpleado(dniEmpleado,"dni") &&
        validarFechaNacimientoEmpleado(fechaNacimientoEmpleado) &&
        validarNumeroEmpleado(celularEmpleado,"celular") &&
        validarTextoEmpleado(calleEmpleado) &&
        validarNumeroEmpleado(numeroCalleEmpleado,"calle") &&
        validarUrlImagenEmpleado(urlImagenEmpleado)
    ) {

        // MODAL QUE CONFIRMA LA CREACIÓN DEL EMPLEADO
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Empleado añadido correctamente",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(function() {
            location.replace("/pages/administracion/gestionSucursales/vistaEmpleados/tablaEmpleados.html");
        }, 2000);
    } else {
        validarTodo(puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado);
    }
}
import { 
    validarTodo,
    validarRolUsuario,
    validarCorreoUsuario,
    validarClaveUsuario,
    compararClaves,
    limpiarFormulario
} from "./validarCrearUsuario.js";


let rolUsuario = document.getElementById("rolUsuario");
let correoUsuario = document.getElementById("correoUsuario");
let claveUsuario = document.getElementById("claveUsuario");
let repetirClave = document.getElementById("repetirClave");
let botonEnviar = document.getElementById("enviar");
let botonLimpiar = document.getElementById("limpiar");


rolUsuario.addEventListener("blur", function () {
    validarRolUsuario(rolUsuario);
});

correoUsuario.addEventListener("blur", function () {
    validarCorreoUsuario(correoUsuario);
});

claveUsuario.addEventListener("blur", function () {
    validarClaveUsuario(claveUsuario,repetirClave);
});

repetirClave.addEventListener("blur", function () {
    compararClaves(claveUsuario,repetirClave);
});

botonEnviar.addEventListener("click", function (e) {
    formularioCrearUsuario(e);
});

botonLimpiar.addEventListener("click", function () {
    limpiarFormulario(rolUsuario,correoUsuario,claveUsuario,repetirClave);
})


function formularioCrearUsuario(e) {
    e.preventDefault();

    if (
        validarRolUsuario(rolUsuario) && 
        validarCorreoUsuario(correoUsuario) &&
        validarClaveUsuario(claveUsuario,repetirClave) &&
        compararClaves(claveUsuario,repetirClave)
    ) {

        // MODAL QUE CONFIRMA LA CREACIÓN DEL EMPLEADO
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario creado correctamente",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(function() {
            location.replace("/pages/administracion/gestionSucursales/vistaUsuarios/tablaUsuarios.html");
        }, 2000);
    } else {
        validarTodo(rolUsuario,correoUsuario,claveUsuario,repetirClave);
    }
}
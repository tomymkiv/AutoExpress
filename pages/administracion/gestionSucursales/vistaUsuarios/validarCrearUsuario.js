export function validarTodo(rolUsuario,correoUsuario,claveUsuario,repetirClave) {
    let arrayValidaciones = [validarRolUsuario(rolUsuario),validarCorreoUsuario(correoUsuario),validarClaveUsuario(claveUsuario,repetirClave)];
    let arrayDatosIngresados = [rolUsuario,correoUsuario,claveUsuario];
    let indicesVerdaderos = [];
    let indicesFalsos = [];

    for (let index = 0; index < arrayValidaciones.length; index++) {
        if (arrayValidaciones[index] === true) {
            indicesVerdaderos.push(index);
        } else {
            indicesFalsos.push(index);
        }
    }

    for (let indiceVerdadero of indicesVerdaderos) {
        if (indiceVerdadero === 0) {
            arrayDatosIngresados[0].className = "form-select is-valid";  // esto es porque la ubicación [0] del array es un select
        } else {
            arrayDatosIngresados[indiceVerdadero].className = "form-control is-valid";
        }
    }

    for (let indiceFalso of indicesFalsos) {
        if (indiceFalso === 0) {
            arrayDatosIngresados[0].className = "form-select is-invalid";  // esto es porque la ubicación [0] del array es un select
        } else {
            arrayDatosIngresados[indiceFalso].className = "form-control is-invalid";
        }
    }
}

export function validarRolUsuario(rolUsuario) {
    let arrayRoles = ["Maestranza","Vendedor","Gerente de ventas","Gerente de Finanzas","Gerente General"];

    if (rolUsuario.value !== "" && arrayRoles.includes(rolUsuario.value)) {
        rolUsuario.className = "form-select is-valid";
        return true;
    } else {
        rolUsuario.className = "form-select is-invalid";
        return false;
    }
}

export function validarCorreoUsuario(correoUsuario) {
    let regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (
        regEx.test(correoUsuario.value) &&
        correoUsuario.value.trim().length >= 10 &&
        correoUsuario.value.trim().length <= 40
    ) { 
        correoUsuario.className = "form-control is-valid";
        return true;
    } else {
        correoUsuario.className = "form-control is-invalid";
        return false;
    }
}

export function validarClaveUsuario(claveUsuario,repetirClave) {
    let regEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/;

    if(
        regEx.test(claveUsuario.value) &&
        claveUsuario.value.trim().length >= 8 &&
        claveUsuario.value.trim().length <= 20
    ) {
        repetirClave.removeAttribute("disabled");
        claveUsuario.className = "form-control is-valid";
        return true;
    }
    repetirClave.setAttribute("disabled","");
    repetirClave.className = "form-control";
    repetirClave.value = "";
    claveUsuario.className = "form-control is-invalid";
    return false;
}

export function compararClaves(claveUsuario,repetirClave) {
    if (claveUsuario.value !== "" && claveUsuario.value === repetirClave.value) {
        repetirClave.className = "form-control is-valid";
        return true;
    } 
    repetirClave.className = "form-control is-invalid";
    return false;
}

export function limpiarFormulario(rolUsuario,correoUsuario,claveUsuario,repetirClave) {
    let arrayDatosIngresados = [rolUsuario,correoUsuario,claveUsuario,repetirClave];

    for (let index = 0; index < arrayDatosIngresados.length; index++) {
        arrayDatosIngresados[index].classList.remove("is-valid");
        arrayDatosIngresados[index].classList.remove("is-invalid");
    }
}
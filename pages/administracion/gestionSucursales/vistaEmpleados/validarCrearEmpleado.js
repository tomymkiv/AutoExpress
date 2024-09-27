export function validarTodo(puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado) {
    let arrayValidaciones = [validarPuestoEmpleado(puestoEmpleado),validarTextoEmpleado(nombreEmpleado),validarTextoEmpleado(apellidoEmpleado),validarNumeroEmpleado(dniEmpleado,"dni"),validarFechaNacimientoEmpleado(fechaNacimientoEmpleado),validarNumeroEmpleado(celularEmpleado,"celular"),validarTextoEmpleado(calleEmpleado),validarNumeroEmpleado(numeroCalleEmpleado,"calle"),validarUrlImagenEmpleado(urlImagenEmpleado)];
    let arrayDatosIngresados = [puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado];
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

export function validarPuestoEmpleado(puestoEmpleado) {
    let arrayPuestos = ["Maestranza","Vendedor","Gerente de ventas","Gerente de Finanzas","Gerente General"];

    if (puestoEmpleado.value !== "" && arrayPuestos.includes(puestoEmpleado.value)) {
        puestoEmpleado.className = "form-select is-valid";
        return true;
    } else {
        puestoEmpleado.className = "form-select is-invalid";
        return false;
    }
}

export function validarTextoEmpleado(texto) {
    let regEx = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/;

    if (
        texto.value.trim() !== "" &&
        regEx.test(texto.value) &&
        texto.value.trim().length >= 2 &&
        texto.value.trim().length <= 100
    ) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}


export function validarNumeroEmpleado(numero,opcion) {
    let regEx = /^[0-9]+$/;
    let copiaNumero;
    console.log(numero.value,opcion);
    
    if (regEx.test(numero.value)) {
        copiaNumero = parseInt(numero.value);
        
        switch (opcion) {
            case "dni":
                if (copiaNumero >= 100000 && copiaNumero <= 99999999) {
                    numero.className = "form-control is-valid";
                    return true;
                } else {
                    numero.className = "form-control is-invalid";
                    return false;
                }
            case "celular":
                if (copiaNumero >= 600000 && copiaNumero <= 11999999) {
                    numero.className = "form-control is-valid";
                    return true;
                } else {
                    numero.className = "form-control is-invalid";
                    return false;
                }
            case "calle":   
                if (copiaNumero >= 1 && copiaNumero <= 100000) {
                    numero.className = "form-control is-valid";
                    return true;
                } else {
                    numero.className = "form-control is-invalid";
                    return false;
                }
        }
    } else {
        numero.className = "form-control is-invalid";
        return false;
    }
}

export function validarUrlImagenEmpleado(urlImagen) {
    let regExUrl = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*\.(jpg|jpeg|png|gif|webp|bmp|svg|tiff)$/i;

    if (
        regExUrl.test(urlImagen.value) &&
        urlImagen.value.trim().length >= 5 &&
        urlImagen.value.trim().length <= 400
    ) {
        urlImagen.className = "form-control is-valid";
        return true;
    }
    urlImagen.className = "form-control is-invalid";
    return false;
}

export function validarFechaNacimientoEmpleado(fechaNacimientoEmpleado) {
    let fechaActual = new Date();
    let fechaIngresada = new Date(fechaNacimientoEmpleado.value);
    
    if (
        (fechaActual.getFullYear() - fechaIngresada.getFullYear()) > 18 ||
        ((fechaActual.getFullYear() - fechaIngresada.getFullYear()) >= 18 &&
        (fechaActual.getMonth() - fechaIngresada.getMonth()) >= 0 &&
        (fechaActual.getDate() - fechaIngresada.getDate() - 1) >= 0 )
    ) {
        fechaNacimientoEmpleado.className = "form-control is-valid";
        return true;
    } else {
        fechaNacimientoEmpleado.className = "form-control is-invalid";
        return false;
    }
}

export function limpiarFormulario(puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado) {
    let arrayDatosIngresados = [puestoEmpleado,nombreEmpleado,apellidoEmpleado,dniEmpleado,fechaNacimientoEmpleado,celularEmpleado,calleEmpleado,numeroCalleEmpleado,urlImagenEmpleado];

    for (let index = 0; index < arrayDatosIngresados.length; index++) {
        arrayDatosIngresados[index].classList.remove("is-valid");
        arrayDatosIngresados[index].classList.remove("is-invalid");
    }
}
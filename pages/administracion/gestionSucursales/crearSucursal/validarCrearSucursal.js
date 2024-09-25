export function validarTodo(nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal) {
    let arrayValidaciones = [validarNombre(nombreSucursal),validarCalle(calleSucursal),validarNumeroCalle(numeroCalleSucursal),validarProvincia(provinciaSucursal),validarPostal(postalSucursal)];
    let arrayDatosIngresados = [nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal];
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
        if (indiceVerdadero === 3) {
            arrayDatosIngresados[3].className = "form-select is-valid";  // esto es porque el 4to dato del array es un select
        } else {
            arrayDatosIngresados[indiceVerdadero].className = "form-control is-valid";
        }
    }

    for (let indiceFalso of indicesFalsos) {
        if (indiceFalso === 3) {
            arrayDatosIngresados[3].className = "form-select is-invalid";  // esto es porque el 4to dato del array es un select
        } else {
            arrayDatosIngresados[indiceFalso].className = "form-control is-invalid";
        }
    }
}

export function validarNombre(nombre) {
    if (
        nombre.value.trim() !== "" &&
        nombre.value.trim().length >= 2 &&
        nombre.value.trim().length <= 100
    ) {
        nombre.className = "form-control is-valid";
        return true;
    } else {
        nombre.className = "form-control is-invalid";
        return false;
    }
}

export function validarCalle(calleSucursal) {
    let regEx = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/;

    if (
        calleSucursal.value !== "" &&
        calleSucursal.value.trim().length >= 2 &&
        calleSucursal.value.trim().length <= 100 &&
        regEx.test(calleSucursal.value)
    ) {
        calleSucursal.className = "form-control is-valid";
        return true;
    } else {
        calleSucursal.className = "form-control is-invalid";
        return false;
    }

}

export function validarNumeroCalle(numeroCalleSucursal) {
    let copiaNumeroCalle;

    if (!isNaN(numeroCalleSucursal.value)) {
        copiaNumeroCalle = Number(numeroCalleSucursal.value);
        if (
            Number.isInteger(copiaNumeroCalle) && 
            copiaNumeroCalle >= 1 &&
            copiaNumeroCalle <= 100000
        ) {
            numeroCalleSucursal.className = "form-control is-valid";
            return true;
        } else {
            numeroCalleSucursal.className = "form-control is-invalid";
            return false;
        }
    } else {
        numeroCalleSucursal.className = "form-control is-invalid";
        return false;
    }
}

export function validarProvincia(provinciaSucursal) {
    let arrayProvincias = ["Buenos Aires","Ciudad Autónoma de Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"];

    if (
        provinciaSucursal.value !== "" &&
        arrayProvincias.includes(provinciaSucursal.value)
    ) {
        provinciaSucursal.className = "form-select is-valid";
        return true;
    } else {
        provinciaSucursal.className = "form-select is-invalid";
        return false;
    }
}

export function validarPostal(postalSucursal) {
    let copiaPostal;
    if (!isNaN(postalSucursal.value)) {
        copiaPostal = Number(postalSucursal.value);
        if (
            Number.isInteger(copiaPostal) &&
            copiaPostal >= 1000 &&
            copiaPostal <= 9999
        ) {
            postalSucursal.className = "form-control is-valid";
            return true;
        } else {
            postalSucursal.className = "form-control is-invalid";
            return false;
        }
    } else {
        postalSucursal.className = "form-control is-invalid";
        return false;
    }
}

export function limpiarFormulario(nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal) {
    let arrayDatosIngresados = [nombreSucursal,calleSucursal,numeroCalleSucursal,provinciaSucursal,postalSucursal];

    for (let index = 0; index < arrayDatosIngresados.length; index++) {
        arrayDatosIngresados[index].classList.remove("is-valid");
        arrayDatosIngresados[index].classList.remove("is-invalid");
    }
}
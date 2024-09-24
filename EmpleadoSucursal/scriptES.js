document.addEventListener('DOMContentLoaded', function() {
    
//---------------- Validaciones del form DISPONIBILIDAD DEL VEHICULO -----------------------------------------
    document.getElementById('DisponibilidadBtn').addEventListener('click', function(event){
        event.preventDefault();
        ValidacionesFormDisponibilidad();
    })

//---------------- Validaciones del form ENTRGAR VEHICULO -----------------------------------------
    document.getElementById('btnRegistrarEntrega').addEventListener('click', function(event) {
        event.preventDefault();
        let bandera = ValidacionesCampos();
        
        if (bandera) {
            mostrarModal('Entrega Exitosa', 'Se ha registrado correctamente la entrega del vehículo con placa: ' + document.getElementById('vehiculoId').value);
        }
    });
    
    // Validar campos en tiempo real
    ValidacionTiempoReal();

//---------------- Validaciones del form DEVOLVER VEHICULO -----------------------------------------
    document.getElementById('BtnDevolverVehiculo').addEventListener('click', function(event){
        event.preventDefault();
        let bandera2 =ValidacionesFormEntregar();
        if(bandera2){
            let sucursal = document.getElementById('SucursalDevolucion').value;
            mostrarModal('Devolución Exitosa!', 'Se ha registrado correctamente la devolución del vehículo a la sucursal: ' + sucursal);
        }
    })

});

//-----------------------Funciones para validar el FORM DISPONIBILIDAD DEL VEHICULO -------------------------------------------------------------------------------------
function ValidacionesFormDisponibilidad(){
    let flag = true;
    if (!validarCampoVacio('PlacaOmodelo') || !validarPlacaOModelo('PlacaOmodelo')) {
        flag = false;
    }
    return flag;
}
function validarCampoVacio(idCampo) {
    let inputValor = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling;  // div con 'invalid-feedback'

    error.classList.remove('is-invalid');

    if (inputValor === '') {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'Campo vacío';
        return false;
    }
    MensajeError.innerHTML = '';  // Limpiar cualquier mensaje de error previo
    return true;
}

function validarPlacaOModelo(idCampo) {
    let valor = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling;
    
    // Limpiar estado previo de error
    error.classList.remove('is-invalid');
    MensajeError.innerHTML = ''; 

    const regexAntiguo = /^[A-Z]{3}[0-9]{4}$/; // Formato antiguo: AAA1234
    const regexMercosur = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/; // Formato Mercosur: AAA1A23
    const regexModelo = /^[a-zA-Z\s]{3,}$/; // Modelo: al menos 3 caracteres (letras)

    // Verificar si es una placa válida o un modelo válido
    if (!regexAntiguo.test(valor) && !regexMercosur.test(valor) && !regexModelo.test(valor)) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'El formato de la placa no es aceptable o el modelo debe tener al menos 3 caracteres. Sin numeros';
        return false;
    }

    // Si es válida, limpiar errores previos
    error.classList.remove('is-invalid');
    MensajeError.innerHTML = '';
    return true;
}

function ValidacionesFormDisponibilidad(){
    let flag = true;
    if (!validarCampoVacio('PlacaOmodelo') || !validarPlacaOModelo('PlacaOmodelo')) {
        flag = false;
    }
    return flag;
}

//-----------------------Funciones para validar el FORM ENTRGAR VEHICULO -------------------------------------------------------------------------------------
function ValidacionTiempoReal() {
    // Validación en tiempo real para cada campo
    document.getElementById('clienteId').addEventListener('input', function() {
        validarDni('clienteId');
    });

    document.getElementById('nombreCliente').addEventListener('input', function() {
        ValidarNombre();
    });

    document.getElementById('vehiculoId').addEventListener('input', function() {
        validarCampoVacio('vehiculoId');
        validarPlacaOModelo('vehiculoId');
    });

    document.getElementById('kilometraje').addEventListener('input', function() {
        validarCampoVacio('kilometraje');
        validarKilometraje();
    });

    document.getElementById('fechaEntrega').addEventListener('input', function() {
        validarCampoVacio('fechaEntrega');
        FechaValidar();
    });
}

function ValidacionesCampos() {
    let flag = true;

    if (!validarCampoVacio('clienteId') || !validarDni('clienteId')) {
        flag = false;
    }

    if (!validarCampoVacio('nombreCliente') || !ValidarNombre()) {
        flag = false;
    }

    if (!validarCampoVacio('vehiculoId') || !validarPlaca('vehiculoId')) {
        flag = false;
    }

    if (!validarCampoVacio('kilometraje') || !validarKilometraje()) {
        flag = false;
    }

    if (!validarCampoVacio('fechaEntrega') || !FechaValidar('fechaEntrega')) {
        flag = false;
    }

    return flag;
}

function validarDni(idCampo) {
    let IdCliente = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling; 

    if (IdCliente < 1000000 || IdCliente > 99999999) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'El DNI debe comprender entre el rango 1.000.000 - 99.999.999';
        return false;
    } else {
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
    }
    return true;
}

function validarKilometraje() {
    let kilometraje = document.getElementById('kilometraje').value.trim();
    let error = document.getElementById('kilometraje');
    let MensajeError = error.nextElementSibling;

    if (isNaN(kilometraje) || kilometraje <= 0) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'Kilometraje debe ser un número positivo';
        return false;
    } else {
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
    }
    return true;
}
function ValidarNombre(){
    let NombreCliente = document.getElementById('nombreCliente').value;
    let error = document.getElementById('nombreCliente');
    let MensajeError = error.nextElementSibling; 

    if (NombreCliente.length < 4 ) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'El nombre debe tener al menos 4 carácteres';
        return false;
    } else {
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
    }
    return true;
}

function validarPlaca(idCampo) {
    let placa = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling;
    error.classList.remove('is-invalid');
    MensajeError.innerHTML = ''; 

    const regexAntiguo = /^[A-Z]{3}[0-9]{4}$/; // Formato antiguo: AAA1234
    const regexMercosur = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/; // Formato Mercosur: AAA1A23

    // Verificar que no cumpla con ninguno de los dos formatos
    if (!regexAntiguo.test(placa) && !regexMercosur.test(placa)) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'El formato de la placa no es aceptable.';
        return false;
    }

    // Si es válida, limpiar errores previos
    error.classList.remove('is-invalid');
    MensajeError.innerHTML = '';
    return true;
}

function FechaValidar(idfecha){
        
    let inputFecha= document.getElementById(idfecha).value.trim();
    let error = document.getElementById(idfecha);
    let MensajeError = error.nextElementSibling;  // div con 'invalid-feedback'
    
    let fechaHoy = new Date();
    // formato YYYY-MM-DD
    let dia = ('0' + fechaHoy.getDate()).slice(-2);
    let mes = ('0' + (fechaHoy.getMonth() + 1)).slice(-2); // Los meses son 0-based, por eso sumamos 1
    let anio = fechaHoy.getFullYear();
    
    let fechaActual = `${anio}-${mes}-${dia}`;
    
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
    
    if (inputFecha < fechaActual || inputFecha === fechaActual) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'La fecha no puede ser anterior a hoy, tampoco puede ser hoy.';
        return false;
    } else {
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
    }
    
    return true;
}
//---------------- funciones para validar form DEVOLVER VEHICULO -----------------------------------------
function ValidacionesFormEntregar(){
    let flag = true;
    if (!validarCampoVacio('PlacaVehiculo') || !validarPlacaOModelo('vehiculoId')) {
        flag = false;
    }
    if (!validarCampoVacio('EstadoVehiculo') || !validarEstado('EstadoVehiculo')) {
        flag = false;
    }
    if (!validarCampoVacio('SucursalDevolucion') || validarSucursal()) {
        flag = false;
    }
    if (!validarCampoVacio('FechaDevolucion') || !FechaValidar('FechaDevolucion')) {
        flag = false;
    }
    if (!validarCampoVacio('ResponsableDevolucion') || !validarResponsable('ResponsableDevolucion')) {
        flag = false;
    }
    return flag;
}

function validarEstado() {
    let estado = document.getElementById('EstadoVehiculo').value.trim();
    let error = document.getElementById('EstadoVehiculo');
    let mensajeError = error.nextElementSibling;
    error.classList.remove('is-invalid');
    mensajeError.innerHTML = '';

    
    let palabras = estado.split(/\s+/); // Divide por cualquier espacio en blanco
    let contadorPalabrasValidas = 0;

    // Validar que cada palabra tenga al menos 3 caracteres y no contenga números
    for (let palabra of palabras) {
        if (palabra.length >= 3 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(palabra)) {
            contadorPalabrasValidas++;
        }
    }

    if (contadorPalabrasValidas < 3) {
        error.classList.add('is-invalid');
        mensajeError.innerHTML = 'Debe contener al menos 3 palabras con un mínimo de 3 caracteres cada una, sin números.';
        return false;
    }

    return true;
}

function validarSucursal(){
    let inputSucursal=document.getElementById('SucursalDevolucion').value;
    let error=document.getElementById('SucursalDevolucion');
    let MensajeError = error.nextElementSibling;
    error.classList.remove('is-invalid');

    if(inputSucursal.length < 4){
        error.classList.add('is-invalid');
        MensajeError.innerHTML='Se necesita mínimo 5 carácteres.';
        return false;
    }
    return true;
}

function validarResponsable() {
    let responsable = document.getElementById('ResponsableDevolucion').value.trim();
    let error = document.getElementById('ResponsableDevolucion');
    let mensajeError = error.nextElementSibling;
    
    // Limpiar mensajes de error previos
    error.classList.remove('is-invalid');
    mensajeError.innerHTML = '';

    // Verificar si es un número o un nombre válido
    if (responsable.length > 0) {
        // Si es un ID numérico
        if (!isNaN(responsable) && responsable.length >= 1) {
            return true; // ID válido
        }
        // Si es un nombre
        if (responsable.length >= 4) {
            return true;
        }
    }

    error.classList.add('is-invalid');
    mensajeError.innerHTML = 'Debe ingresar un nombre (mínimo 4 caracteres) o un ID.';
    return false;
}

function mostrarModal(titulo, mensaje) {
    let modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
    document.getElementById('modalTitulo').innerText = titulo; 
    document.getElementById('modalCuerpo').innerText = mensaje; 
    modalExito.show();
}
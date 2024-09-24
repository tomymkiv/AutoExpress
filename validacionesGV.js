document.addEventListener('DOMContentLoaded', function(){
    
    //-----------------------Gestionar Marcas-------------------------------------------------------
    
    let btnAgregarMarca = document.getElementById('btnAgregarMarca');
    if (btnAgregarMarca) {
        btnAgregarMarca.addEventListener('click', agregarMarca);
    }

    let btnEliminarMarca = document.getElementById('EliminarMarcaBtn');
    if (btnEliminarMarca) {

        btnEliminarMarca.addEventListener('click', function(){

            mostrarModal('Eliminar marca', '¿Esta seguro que desea eliminarla?', 'Eliminar');
    
            // Espera a que el DOM cargue el botón
            setTimeout(function() {
                // Busca el botón dentro del modal
                let btnConfirmarGuardar = document.getElementById('btnGuardar');  
                if (btnConfirmarGuardar) {
                    btnConfirmarGuardar.addEventListener('click', function() {
                        // Envía el formulario después de confirmar
                        console.log('Marca eliminada');
                        cerrarModal();
                    });
                } else {
                    console.error('El botón btnGuardar no se encontró en el DOM.');
                }
            }, 500);
        });
    }
    
//-----------------------Gestionar Modelos-------------------------------------------------------
    let btnAgregarModelo = document.getElementById('btnAgregarModelo');
    if (btnAgregarModelo ) {
        btnAgregarModelo.addEventListener('click', function(event) {
            event.preventDefault();

            let enviarForm = FormGestionarModelo();
            if (enviarForm) {

                mostrarModal('Registro exitoso!', 'El modelo: ' + document.getElementById('nombreModelo').value, 'Guardar cambios');
                // Espera a que el DOM cargue el botón
                setTimeout(function() {
                    let btnConfirmarGuardar = document.getElementById('btnGuardar');
                    
                    if (btnConfirmarGuardar) {
                        btnConfirmarGuardar.addEventListener('click', function() {
                            document.getElementById('agregarModeloForm').submit();
                        });
                    } else {
                        console.error('El botón btnGuardar no se encontró en el DOM.');
                    }
                }, 500);
             limpiarInpts('agregarModeloForm');
            }
        });
    }       

    let btnEliminarModelo = document.getElementById('BtnEliminarModelo');
    if (btnEliminarModelo) {
        btnEliminarModelo.addEventListener('click', function () {

            mostrarModal('Eliminar Modelo', '¿Esta seguro que desea eliminar el modelo?', 'Eliminar');
    
            // Espera a que el DOM cargue el botón
            setTimeout(function() {
                // Busca el botón dentro del modal
                let btnConfirmarGuardar = document.getElementById('btnGuardar');  
                if (btnConfirmarGuardar) {
                    btnConfirmarGuardar.addEventListener('click', function() {
                          console.log('Modelo eliminado');
                          cerrarModal();
                    });
                } else {
                    console.error('El botón btnGuardar no se encontró en el DOM.');
                }
            }, 500);  
        });
    } else {
        console.error('El modal EliminarModal o el cuerpo del modal no existe en el DOM.');
    }

//-----------------------Gestionar Unidades-------------------------------------------------------
    let btnAgregarUnidad=document.getElementById('btnAgregarUnidad');
    if(btnAgregarUnidad){
        btnAgregarUnidad.addEventListener('click', function(event){
            event.preventDefault();
            let bandera=ValidarFormUnidad();
            console.log(bandera);
            if(bandera){

                mostrarModal('Registro exitoso!', 'La unidad fue almacenada de forma exitosa. ', 'Guardar cambios');
                // Espera a que el DOM cargue el botón
                setTimeout(function() {
                    let btnConfirmarGuardar = document.getElementById('btnGuardar');
                    
                    if (btnConfirmarGuardar) {
                        btnConfirmarGuardar.addEventListener('click', function() {
                             document.getElementById('agregarUnidadForm').submit();
                        });
                    } else {
                        console.error('El botón btnGuardar no se encontró en el DOM.');
                    }
                }, 500);
                limpiarInpts('agregarUnidadForm');
            }
        });
    }

    let btnGuardarMTM=document.getElementById('btnGuardarMTM');
    if(btnGuardarMTM){
        btnGuardarMTM.addEventListener('click', function(event){
            event.preventDefault();
            validarFormMTM();
            console.log(validarFormMTM());
            if(validarFormMTM()){

                mostrarModal('Registro exitoso!', 'El mantenimiento de la unidad fue registrada de forma exitosa. ', 'Guardar cambios');
                // Espera a que el DOM cargue el botón
                setTimeout(function() {
                    let btnConfirmarGuardar = document.getElementById('btnGuardar');
                    
                    if (btnConfirmarGuardar) {
                        btnConfirmarGuardar.addEventListener('click', function() {
                            document.getElementById('FormUnidadMTM').submit();
                        });
                    } else {
                        console.error('El botón btnGuardar no se encontró en el DOM.');
                    }
                }, 500);
                limpiarInpts('FormUnidadMTM');
            }
        })
    }

    let btnEliminarUnidad=document.getElementById('btnEliminarUnidad');
    if(btnEliminarUnidad){
        btnEliminarUnidad.addEventListener('click', function(){

            mostrarModal('Eliminar Unidad', '¿Esta seguro que desea eliminar la  unidad?', 'Eliminar');
    
            // Espera a que el DOM cargue el botón
            setTimeout(function() {
                // Busca el botón dentro del modal
                let btnConfirmarGuardar = document.getElementById('btnGuardar');  
                if (btnConfirmarGuardar) {
                    btnConfirmarGuardar.addEventListener('click', function() {
                          console.log('Unidad eliminada');
                          cerrarModal();
                    });
                } else {
                    console.error('El botón btnGuardar no se encontró en el DOM.');
                }
            }, 500);  
        })
    }
})
    
//------------------Form Gestionar Marca--------------------------------------    

function agregarMarca(event){
    event.preventDefault();
    let bandera=ValidarMarca('nombreMarca');
        if(bandera){
            let alerta=document.getElementById('Alerta');
            alerta.classList.remove('d-none');
    
                 // Envía el formulario después de un pequeño retraso para mostrar la alerta
                 setTimeout(function() {
                    document.getElementById('FormAgregarMarca').submit(); // Envía el formulario
                }, 1000); // Espera 1 segundo para mostrar la alerta antes de enviar el formulario
        }
}
    
function ValidarMarca(idcampo){
        let inputMarca= document.getElementById(idcampo).value.trim();
        let error=document.getElementById(idcampo);
        error.classList.remove('is-invalid');
    
        if(inputMarca ===''){
            error.classList.add('is-invalid');
            error.nextElementSibling.innerHTML='Campo vacío.';
            return false;
        }
    
        if(inputMarca.length <3){
            error.classList.add('is-invalid');
            error.nextElementSibling.innerHTML='La marca debe tener minimamente mas de 3 carácteres.';
            return false;
        }
    
         // Verificación de solo letras (sin números ni caracteres especiales)
         const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
         if (!soloLetrasRegex.test(inputMarca)) {
             error.classList.add('is-invalid');
             error.nextElementSibling.innerHTML = 'Solo se permiten letras. No se permiten números ni caracteres especiales.';
             return false;
         }
    
        return true;
}

//------------------Form Gestionar Modelos--------------------------------------    
function FormGestionarModelo(){
    let bandera=true;
    
        if(!validarCampoVacio('nombreModelo') || !validarNombre('nombreModelo')){
            bandera=false;
        }
        if(!validarCampoVacio('MarcaModelo') || !validarNombre('nombreModelo')){
            bandera=false;
        }
        if(!validarCampoVacio('Inputanio') || !validarAño()){
            bandera=false;
        }
        if(!validarCampoVacio('tipoVehiculo')){
            bandera=false;
        }
        if(!validarCampoVacio('version') || !validarNombre('version') || !validarPalabras('version')){
            bandera=false;
        }
    return bandera;
}
    
function validarCampoVacio(idCampo) {
        let inputValor = document.getElementById(idCampo).value.trim();
        let error = document.getElementById(idCampo);
        let MensajeError = error.nextElementSibling;  // div con 'invalid-feedback'
    
        error.classList.remove('is-invalid');
    
        if (inputValor === '') {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'Campo vacío';
            error.nextElementSibling.innerHTML='campo vacío';
            return false;
        }
        MensajeError.innerHTML = '';  // Limpiar cualquier mensaje de error previo
        return true;
}
    
function validarNombre(idcampo){
        let NombreOMarca = document.getElementById(idcampo).value.trim();
        let error = document.getElementById(idcampo);
        let MensajeError = error.nextElementSibling; 
    
        if ( NombreOMarca.length < 4 ) {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'Debe tener al menos 4 carácteres';
            return false;
        } else {
            error.classList.remove('is-invalid');
            MensajeError.innerHTML = '';
        }
    
        let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo permite letras y espacios
        if (!regex.test(NombreOMarca)) {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'Solo se permiten letras y espacios';
            return false;
        } else {
            error.classList.remove('is-invalid');
            MensajeError.innerHTML = '';
        }
    
        return true;
}
    
function validarAño(){
        let anioIngresado = document.getElementById('Inputanio').value.trim();
        let error = document.getElementById('Inputanio');
        let MensajeError = error.nextElementSibling; 
        let anioActual = new Date().getFullYear();
    
        // Verifica si el valor es un número válido de 4 dígitos
        if (!/^\d{4}$/.test(anioIngresado)) {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'Debe ingresar un año válido de 4 dígitos';
            return false;
        }
    
        // Verifica si el año ingresado es mayor al año actual
        if (parseInt(anioIngresado) > anioActual) {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'El año no puede ser mayor al año actual';
            return false;
        }
    
        // Si pasa todas las validaciones
        error.classList.remove('is-invalid');
        MensajeError.innerHTML = '';
        
        return true;
}
    
function validarPalabras(idcampo){
    
        let variante = document.getElementById(idcampo).value.trim();
        let error = document.getElementById(idcampo);
        let MensajeError = error.nextElementSibling;
        
        let palabras = variante.split(/\s+/); // Divide por cualquier espacio en blanco
        let contadorPalabrasValidas = 0;
    
        // Validar que cada palabra tenga al menos 4 caracteres y no contenga números
        for (let palabra of palabras) {
            if (palabra.length >= 4 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(palabra)) {
                contadorPalabrasValidas++;
            }
        }
    
        if (contadorPalabrasValidas < 2) {
            error.classList.add('is-invalid');
            MensajeError.innerHTML = 'Debe contener al menos 2 palabras con un mínimo de 4 caracteres cada una, sin números.';
            return false;
        }
        return true;
}

//------------------Form Gestionar Unidades--------------------------------------    
function ValidarFormUnidad(){
    let bandera=true;
    
    if(!validarCampoVacio('vin') || !validarVin('vin')){
        bandera=false;
    }
    if(!validarCampoVacio('placa') || !validarPlaca('placa')){
        bandera=false;
    }
    if(!validarCampoVacio('marcaUnidad') || !ValidarMarca('marcaUnidad')){
        bandera=false;
    }
    if(!validarCampoVacio('modeloUnidad') || !validarNombre('modeloUnidad')){
        bandera=false;
    }
    if(!validarCampoVacio('kilometraje') || !validarKilometraje('Kilometraje')){
        bandera=false;
    }
    if(!validarCampoVacio('fechaAlta')){
        bandera=false;
    }
    return bandera;
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
function validarVin(idCampo) {
    let vin = document.getElementById(idCampo).value.trim();
    let error = document.getElementById(idCampo);
    let MensajeError = error.nextElementSibling;
    error.classList.remove('is-invalid');
    MensajeError.innerHTML = ''; 

    const regexVin = /^[A-HJ-NPR-Z0-9]{17}$/; // Expresión regular para el VIN (17 caracteres alfanuméricos)

    if (!regexVin.test(vin)) {
        error.classList.add('is-invalid');
        MensajeError.innerHTML = 'El VIN debe ser un código alfanumérico de 17 caracteres válido.';
        return false;
    }

    error.classList.remove('is-invalid');
    MensajeError.innerHTML = '';
    return true;
}
function validarFormMTM(){
    let bandera=true;
    
    if(!validarCampoVacio('unidad') ){
        bandera=false;
    }
    if(!validarCampoVacio('problemaUnidad')){
        bandera=false;
    }
    if(!validarCampoVacio('fechaBaja')){
        bandera=false;
    }
    if(!validarCampoVacio('InputfechaAlta') || !ValidarFechas()){
        bandera=false;
    }

    return bandera;
}

function ValidarFechas(){
      // Fecha de Baja debe ser anterior a Fecha de Alta
     let fechaBaja = document.getElementById('fechaBaja').value;
     let fechaAlta = document.getElementById('InputfechaAlta').value;
  
      if (fechaBaja && fechaAlta) {
          const dateBaja = new Date(fechaBaja);
          const dateAlta = new Date(fechaAlta);
  
          // Si la fecha de baja es mayor a la fecha de alta, mostrar error
          if (dateBaja > dateAlta) {
              document.querySelector('#fechaBaja + .invalid-feedback').textContent = 'La fecha de baja debe ser anterior a la fecha de alta.';
              document.getElementById('fechaBaja').classList.add('is-invalid');
             return false;
          } else {
              document.getElementById('fechaBaja').classList.remove('is-invalid');
              document.querySelector('#fechaBaja + .invalid-feedback').textContent = '';
          }
      }

    return true;
}

//_------------------------------------
function mostrarModal(titulo, cuerpo, textoBoton) {
    // Cambiamos el título del modal
    document.getElementById('modalGenericoLabel').textContent = titulo;
    
    // Cambiamos el cuerpo del modal
    document.getElementById('BodyGenerico').textContent=cuerpo;
    
    // Cambiamos el texto del botón de acción
    document.getElementById('btnGuardar').textContent = textoBoton;

    // Mostramos el modal
    const modal = new bootstrap.Modal(document.getElementById('modalGenerico'));
    modal.show();
}
function cerrarModal(){
       // Cierra el modal después de confirmar
       const modal = bootstrap.Modal.getInstance(document.getElementById('modalGenerico')); 
       modal.hide(); // Cierra el modal

}
function limpiarInpts(idform){
    // Limpia los inputs del formulario cuando se cierra el modal
    document.getElementById('modalGenerico').addEventListener('hidden.bs.modal', function () {
    document.getElementById(idform).reset();
});

}


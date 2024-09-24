const btnRecuperacion = document.querySelector(".btn-recuperacion");
const correo = document.getElementById("email");
const errorCorreo = document.querySelector(".email-mal");
let emailCorrecto = false;

const validarCorreo = function () {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorCorreo.textContent = 'Correo incorrecto';

    correo.addEventListener('input', function () {
        if (regexEmail.test(correo.value)) {
            errorCorreo.classList.add('d-none');
            emailCorrecto = true;
        } else {
            errorCorreo.classList.remove('d-none');
            emailCorrecto = false;
        }
    })

    return emailCorrecto;
}

addEventListener('DOMContentLoaded', validarCorreo);

btnRecuperacion.addEventListener('click',function () {  
    if(validarCorreo()){
        correo.value = '';
        location.href = "../Nueva clave/index.html";
    }else{
        errorCorreo.classList.remove('d-none')
    }
});
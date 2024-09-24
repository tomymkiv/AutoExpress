const btnEnviar = document.querySelector(".enviar-btn");
const nombre = document.getElementById("username");
const errorUsername = document.querySelector(".username-mal");
const clave = document.getElementById("password");
const errorClave = document.querySelector(".clave-mal");
const correo = document.getElementById("email");
const errorCorreo = document.querySelector(".email-mal");

let nombreBien = false;
let claveBien = false;
let emailBien = false;

const validarUsername = function () {
    const regex = /^([a-zA-ZÁÉÍÓÚáéíóúñÑäÄëËïÏöÖüÜçÇ0-9 ]{2,30})$/;
    errorUsername.textContent = nombre.title;

    nombre.addEventListener('input', function () {
        if (nombre.value) {
            if (regex.test(nombre.value)) {
                errorUsername.classList.add('d-none')
                nombreBien = true;
            } else {
                errorUsername.textContent = nombre.title;
                errorUsername.classList.remove('d-none')
                nombreBien = false;
            }
        } else {
            errorUsername.textContent = nombre.title;
            errorUsername.classList.remove('d-none')
            nombreBien = false;
        }
    })

    return nombreBien;
}

const validarCorreo = function () {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorCorreo.textContent = correo.title;

    correo.addEventListener('input', function () {
        if (regexEmail.test(correo.value)) {
            errorCorreo.classList.add('d-none');
            emailBien = true;
        } else {
            errorCorreo.classList.remove('d-none');
            emailBien = false;
        }
    })

    return emailBien;
}

const validarClave = function () {
    const regex = /^(?=.*[°|!"#$%&/()=?'¡¿´¨*+{\[}\]\-\_:.,;><]).{8,}$/;
    errorClave.textContent = clave.title;

    clave.addEventListener('input', function () {
        if (regex.test(clave.value)) {
            errorClave.classList.add('d-none');
            claveBien = true;
        } else {
            errorClave.textContent = clave.title;
            errorClave.classList.remove('d-none');
            claveBien = false;
        }
    })

    return claveBien;
}

btnEnviar.addEventListener('click', function (e) {
    e.preventDefault()

    if (validarUsername()) {
        errorUsername.classList.add('d-none')
    } else {
        errorUsername.classList.remove('d-none');
    }

    if (validarClave()) {
        errorClave.classList.add('d-none')
    } else {
        errorClave.classList.remove('d-none')
    }

    if (validarCorreo()) {
        errorCorreo.classList.add('d-none')
    } else {
        errorCorreo.classList.remove('d-none')
    }

    if (validarUsername() && validarClave() && validarCorreo()) {
        nombre.value = ''
        correo.value = ''
        clave.value = ''
        window.location.href = '../Main/main.html';
    }
})

addEventListener('DOMContentLoaded', function () {
    validarUsername()
    validarClave()
    validarCorreo()
});
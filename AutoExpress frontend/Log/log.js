const btnEnviar = document.querySelector(".enviar-btn");
const nombre = document.getElementById("username");
const errorUsername = document.querySelector(".username-mal");
const clave = document.getElementById("password");
const errorClave = document.querySelector(".clave-mal");
let nombreBien = false;
let claveBien = false;

const validarUsername = function () {
    // Input type text. Verifico si el username es correcto según la regex
    // indico que debe tener, minimo, 2 caracteres hasta 30, numeros y/o espacios sin signos.
    const regex = /^([a-zA-ZÁÉÍÓÚáéíóúñÑäÄëËïÏöÖüÜçÇ0-9 ]{2,30})$/;
    errorUsername.textContent = nombre.title;

    nombre.addEventListener('input', function () {
        if (regex.test(nombre.value)) {
            errorUsername.classList.add('d-none')
            nombreBien = true;
        } else {
            errorUsername.textContent = nombre.title;
            errorUsername.classList.remove('d-none')
            nombreBien = false;
        }
    })
    return nombreBien;
}

const validarClave = function () {
    // Input type password. Verifico si la clave es correcta según la regex
    // indico que si o si tiene que tener 8 caracteres y, al menos, 1 signo entre todos los que están escritos
    const regex = /^(?=.*[°|!"#$%&/()=?'¡¿´¨*+{\[}\]\-\_:.,;><]).{8,}$/;
    errorClave.textContent = clave.title;

    clave.addEventListener('input', function () {
        console.log("escribiendo...")
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

// Botón para enviar los datos
btnEnviar.addEventListener('click', function (e) {
    e.preventDefault()
    if (validarUsername() && validarClave()) {
        nombre.value = '';
        clave.value = '';
        window.location.href = '../Main/main.html';
    } else {
        if(!validarUsername()){
            errorUsername.classList.remove('d-none');
        }
        if(!validarClave()){
            errorClave.classList.remove('d-none');
        }
    }
})
// Me sirve para que los eventos "input" dentro de las funciones sean ejecutados desde que se carga el contenido del DOM
addEventListener('DOMContentLoaded', validarClave);
addEventListener('DOMContentLoaded', validarUsername);
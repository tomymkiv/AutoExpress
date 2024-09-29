//containers
const unidadesContainer = document.querySelector(".unidades-section");
const reservasContainer = document.querySelector(".reservas-section");
const proxReservasContainer = document.querySelector(".proximas-reservas-section");
// botones
const unidadesButton = document.querySelector(".unidades-button");
const reservasButton = document.querySelector(".reservas-button");
const proxReservasButton = document.querySelector(".prox-reservas-button");

const desplegarContenedor = function (boton, container) {  
    boton.addEventListener('click',function () {  
        container.classList.toggle('d-none');
    })
}

addEventListener('DOMContentLoaded', desplegarContenedor(unidadesButton,unidadesContainer));
addEventListener('DOMContentLoaded', desplegarContenedor(reservasButton,reservasContainer));
addEventListener('DOMContentLoaded', desplegarContenedor(proxReservasButton,proxReservasContainer));
const filtros = document.querySelectorAll(".dropdown-item-filter");

const filtroSeleccionado = function () {
    filtros.forEach(element => {
        element.addEventListener('click', function () {
            filtros.forEach(f=>f.classList.remove('filtro-elegido'));
            element.classList.add('filtro-elegido');
        })
    });
}
addEventListener('DOMContentLoaded', filtroSeleccionado);
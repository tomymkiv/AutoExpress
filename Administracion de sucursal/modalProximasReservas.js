const buscarButton = document.querySelector(".buscar-usuario-btn");
const buscadorFooter = document.querySelector(".modal-footer-buscador");
const inputBuscador = document.getElementById('buscar-usuario');

let encontrado = false; // bool para verificar si cree los botones de alta y baja del buscador (y tambien si encontré un usuario valido)
// busqueda del usuario
buscarButton.addEventListener('click', function (e) {
  e.preventDefault();

  const botonAlta = document.createElement("button");
  botonAlta.textContent = 'Dar de alta la reserva';
  botonAlta.classList.add('btn', 'btn-primary', 'btn-alta-buscador');

  const botonBaja = document.createElement("button");
  botonBaja.textContent = 'Dar de baja la reserva';
  botonBaja.classList.add('btn', 'btn-danger', 'btn-baja-buscador');
  
  if (!encontrado && inputBuscador.value) {
    encontrado = true;
    buscadorFooter.appendChild(botonAlta);
    buscadorFooter.appendChild(botonBaja);
  }
})

//carga del usuario
const cargarButton = document.querySelector(".cargar-usuario-btn");
const cargaFooter = document.querySelector(".modal-footer-carga");
const inputCarga = document.getElementById('cargar-usuario');

let cargado = false; // bool para verificar si cree los botones de alta y baja del buscador (y tambien si encontré un usuario valido)

cargarButton.addEventListener('click', function (e) {
  e.preventDefault();

  const botonAlta = document.createElement("button");
  botonAlta.textContent = 'Dar de alta la reserva';
  botonAlta.classList.add('btn', 'btn-primary', 'btn-alta-carga');

  const botonBaja = document.createElement("button");
  botonBaja.textContent = 'Dar de baja la reserva';
  botonBaja.classList.add('btn', 'btn-danger', 'btn-baja-carga');
  
  if (!cargado && inputCarga.value) {
    encontrado = true;
    cargaFooter.appendChild(botonAlta);
    cargaFooter.appendChild(botonBaja);
  }
})
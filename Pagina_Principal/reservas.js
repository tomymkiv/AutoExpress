const fechaActual = new Date();

const retiro = document.getElementById("fecha-retiro");
const lugarRetiro = document.getElementById("lugar-retiro");
const horaRetiro = document.getElementById("hora-retiro");
const errorRetiro = document.getElementById("errorRetiro");

const devolucion = document.getElementById("fecha-devolucion");
const lugarDevolucion = document.getElementById("lugar-devolucion");
const horaDevolucion = document.getElementById("hora-devolucion");
const errorDevolucion = document.getElementById("errorDevolucion");
const errorHorario = document.getElementById("errorHorario");

const enviarFormulario = document.getElementById("formulario");

let num = 0;
let sumarDia = 0;
let sumarMes = 0;
let sumarAño = 0;

retiro.value = "";
lugarRetiro.value = "";
horaRetiro.value = "";
devolucion.value = "";
lugarDevolucion.value = "";
horaDevolucion.value = "";

const definirFechaActual = function (num) {
    let dia = fechaActual.getDate()+num;
    let mes = fechaActual.getMonth()+1;
    let año = fechaActual.getFullYear();

    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        if(dia >= 32){
            dia -= 31;
            mes += 1;
        }
        if (mes >= 13){
            mes -= 12;
            año += 1;
        }
    }
    if(mes == 2){
        if(dia >= 29){
            dia -=28;
            mes += 1;
        }
    }
    else{
        if(dia >= 31){
            dia -= 30;
            mes += 1;
        }
    }

    let diaReal;
    let mesReal;

    if(dia < 10){
        diaReal = "0" + dia;
    }
    else {
        diaReal = dia;
    }

    if(mes < 10){
        mesReal = "0" + mes;
    }
    else{
        mesReal = mes;
    }

    retiro.setAttribute("min", año+"-"+mesReal+"-"+diaReal);
    devolucion.setAttribute("min", año+"-"+mesReal+"-"+diaReal);
};

const definirHorarios = function () {
    let hora = parseInt(fechaActual.getHours());
    let minutos = parseInt(fechaActual.getMinutes());

    let horaDev = 0;
    
    if(hora == 23){
        if(minutos >= 30){
            definirFechaActual(1);
        }
    }
   
    if(minutos > 0){
        if(minutos >= 15){
            minutos += 16;
        }else{
            minutos = 30;
        }
    }

    if(minutos > 30){
        if(minutos > 45){
            hora += 1;
            minutos = 30;
        }
        else{
            hora += 1;
            minutos = 0; 
        }
    }

    if(hora >= 24){
        hora -= 24;
        definirFechaActual(1);
    }

    horaDev = hora + 1;

    if(horaDev >= 24){
        horaDev -= 24;
        definirFechaActual(1);
    }


    if(hora == 0){
        if(minutos == 0){
            horaRetiro.setAttribute("min", "0"+(hora)+":"+"00");
            horaDevolucion.setAttribute("min", "0"+(horaDev)+":"+"00");
        }
        else{
            horaRetiro.setAttribute("min", "0"+(hora)+":"+(minutos));
            horaDevolucion.setAttribute("min", "0"+(horaDev)+":"+(minutos));
        }
    }
    else if(minutos == 0){
        horaRetiro.setAttribute("min", (hora)+":"+"00");
        horaDevolucion.setAttribute("min", (horaDev)+":"+"00");
    }
    else{
        horaRetiro.setAttribute("min", (hora)+":"+(minutos));
        horaDevolucion.setAttribute("min", (horaDev)+":"+(minutos));
    }      
};

const validarSucursal = function () {
    errorRetiro.innerHTML = "";
    errorDevolucion.innerHTML = "";

    if(lugarRetiro.value.trim().length == 0){
        errorRetiro.innerHTML = "Debe completar el campo.";
        errorRetiro.value = "";
        errorRetiro.focus();
    }
    
    if(lugarDevolucion.value.trim().length == 0){
        errorDevolucion.innerHTML = "Debe completar el campo.";
        errorDevolucion.value = "";
        errorDevolucion.focus();
    }
};

const validarHorarios = function () {
    const validarRetiro = horaRetiro.getAttribute("min");
    const validarDevolucion = horaDevolucion.getAttribute("min");

    let minRetiro = parseInt(validarRetiro.split(":")[1])-parseInt(validarDevolucion.split(":")[1]);

    if (validarRetiro == validarDevolucion || minRetiro != 0) {
        errorHorario.textContent = "La diferencia de horario entre el Retiro y la Devolución debe ser de una hora como mínimo."
    }
};

enviarFormulario.addEventListener("submit", function(e){
    e.preventDefault();

    validarSucursal();
    validarHorarios();
});

addEventListener("DOMContentLoaded", definirFechaActual(num));
addEventListener("DOMContentLoaded", definirHorarios());
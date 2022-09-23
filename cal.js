//DEFINIMOS LOS BOTONES Y SUS VALORES
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];

//DEFINICION VARIABLES
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;
var result = document.getElementById("resultado");

//CAPTURA DE LOS EVENTOS CLICK
botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        seleccionarOperacion(boton.innerText);
    })
})

botonIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
})

// METODOS
function seleccionarOperacion(op){
    if(opeActual == "") return;
    if(opeAnterior != ""){
        calcular();
    }
    operacion =  op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "*":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
}

function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

clear();
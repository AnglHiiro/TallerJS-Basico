var numero = 8
var palabra = 'hola'
var res 

if(numero){
    if(palabra){
        res = true
    }else{
        res = false
    }
}else{
    res = false
}

console.log(res);

var resultado = numero ? palabra ? true : false : false

console.log(resultado);

//SWITCH

var numero2 = 3

switch (numero2) {
    case 1:
        console.log('Angel');
        numero2 = 2
    break;
    case 2:
        console.log('Monroy');


    default:
        console.log('No hay nada');
        break;
}


//Operadores logicos y de condicion
//comparadores
// ==
// ===
// !=
// logicos
// ||
// &&

var n = 5
if( 5 != n ){
    console.log('No son iguales');
}else{
    console.log('Son iguales');
}


// n2 Si existe
// !n2 Si no existe

var n2
if(!n2){
    console.log('No existe');
}else{
    console.log('Existe');
}


// Y y O

var num1 = 1
var num2 = 2
var num3 = 4
if( num1 == 1 && (num2 == 2 && (num3 != 3 || n == 5)) ){
    console.log('Si son iguales');
}else{
    console.log('No son iguales');
}
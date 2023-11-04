var a = 2
var b = 4
var c = 8

var cuadradoDeB = Math.pow(b, 2)
var cuatroAC = 4 * a * c
var res = cuadradoDeB - cuatroAC
var raizCuadrada = Math.sqrt(res)
var denominador = 2 * a

console.log(res);
var solucion1 = (-b + raizCuadrada) / denominador
var solucion2 = (-b - raizCuadrada) / denominador

console.log('solucion 1' + solucion1);

console.log('solucion 1' + solucion2);
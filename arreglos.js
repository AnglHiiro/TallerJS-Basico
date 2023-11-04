var arreglo = ['Angel', 5, 'Josephe', { nombre: 'Felipe'}]

arreglo.push('Jose')
arreglo[2] = 'Orlando'
// console.log( arreglo);


var matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

// console.log(matriz);


var arr = [10, 1, 2, 3, 99]
var arr2 = arr.shift()
// console.log(arr2);

// console.log(arr);





//MAS ARREGLOS

var arreglo = [1, 2, 3, 4, 5]
var resultado
resultado = arreglo.splice(4, 1)
                    //4 = El indice  y  1 = La cantidad
// console.log(arreglo);



//FILTER

var arreglo = [2, 4, 5, 7, 9, 8]
var resultado2 = arreglo.filter(x => x % 2 === 0)
// console.log(resultado);


//MAP

var arreglo = [1, 2, 3, 4, 5]
var res = arreglo.map(numero => numero + 15)
console.log(res);
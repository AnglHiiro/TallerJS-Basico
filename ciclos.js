var arreglo = ['Angel', 'Pepe', 'Lalo', 'Flores', 'Felipe']
for (let i = 0; i < arreglo.length; i++) {
    // console.log(arreglo[i]);
}

var n = 0
// while (n < 5) {
//     console.log(n);
//     n++
// }


var n2 = 0
do {
    // console.log(n2);
    n2 ++
} while (n2<5);



var arreglo2 = [1, 'Hola', 5, {name: 'Felipe'}, 9]
arreglo2.forEach(element => {
    if(element.name){
        console.log(JSON.stringify(element));
    }else{
        console.log('Valor: ' + element);
    }
});
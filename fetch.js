fetch('https://pokeapi.co/api/v2/pokemon/132/encounters', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res){
    return res.json()
}).then(function (respuesta){
    console.log(respuesta);
}).catch((error) => {
    console.log(error);
})
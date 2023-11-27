fetch(`https://randomuser.me/api/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json()
    }).then(function (respuesta) {
        console.log(respuesta);

        document.getElementById('nombre').textContent = respuesta.results[0].name.first
        document.getElementById('apellido').textContent = respuesta.results[0].name.last
        document.getElementById('edad').textContent = respuesta.results[0].dob.age
        document.getElementById('genero').textContent = respuesta.results[0].gender
        document.getElementById('correo').textContent = respuesta.results[0].email
        document.getElementById('celular').textContent = respuesta.results[0].phone
        document.getElementById('ciudad').textContent = respuesta.results[0].location.city
        document.getElementById('img').src = respuesta.results[0].picture.medium

    }).catch((error) => {
        console.log(error);
    })
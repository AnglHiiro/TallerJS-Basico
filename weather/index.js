const key = 'a5fddb63195fb3d4aad2a38e5f5bbe9d'

var btnCiudad = document.getElementById('btnCiudad')
btnCiudad.addEventListener('click', (e) => {
    fetchCiudad()
})

var btnUbicacion = document.getElementById('btnUbicacion')
btnUbicacion.addEventListener('click', (e) => {
    fetchUbicacion()
})

function fetchCiudad() {
    var ciudad = document.getElementById('ciudad').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${key}`, {
        method: 'GET'
    }).then(function (res) {
        return res.json()
    }).then(function (respuesta) {
        document.getElementById('divDatos').style.display = 'none'
        document.getElementById('divResultados').style.display = 'block'
        document.getElementById('txtCiudad').textContent = ciudad
        document.getElementById('txtCiudad2').textContent = ciudad
        document.getElementById('temperatura').textContent = respuesta.main.temp + '°'
        document.getElementById('clima').textContent = respuesta.weather[0].description
        console.log(respuesta);
    }).catch((error) => {
        console.log(error);
    })
}
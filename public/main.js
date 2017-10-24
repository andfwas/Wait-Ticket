const form = document.getElementById('secondform')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let id = event.target.elements.username.value
    console.log(id)
    getInfo(id)
})

getInfo = (id) => {
    fetch(`http://localhost:3000/api/tickets/username/${id}`)
    .then((response) => {
        return response.json()
        .then((data) => {
            console.log(data)
        })
    })
}

// MAP JS
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZndhcyIsImEiOiJjajk1dHc0am40bzY5MzNtYm0yMWx3emdmIn0.DrIhBUV9hbyQvinhBYlDFg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9'
});

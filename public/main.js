const form2 = document.getElementById('secondform')
form2.addEventListener('submit', (event) => {
    event.preventDefault()

    let id = event.target.elements.username.value
    console.log(id)
    getInfo(id)
})

const form = document.getElementById('firstform')
form.addEventListener('change', (event) => {
    event.preventDefault()

    let id = event.target.value
    console.log(id)
})

getInfo = (id) => {
    fetch(`http://localhost:3000/api/tickets/username/${id}`)
    .then((response) => {
        return response.json()
        .then((data) => {
            console.log(data)
            // create new elements
            var seachResult1 = document.getElementById('seachResult1')
            var eventName = document.createElement('p')
            eventName.innerText = data[0].event
            seachResult1.append(eventName)
        })
    })
}

// MAP JS
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZndhcyIsImEiOiJjajk1dHc0am40bzY5MzNtYm0yMWx3emdmIn0.DrIhBUV9hbyQvinhBYlDFg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9'
});

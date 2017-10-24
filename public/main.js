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
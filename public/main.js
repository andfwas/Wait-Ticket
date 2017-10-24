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
        })
    })
}
// const form2 = document.getElementById('createaccount')
// form2.addEventListener('submit', (event) => {
//     event.preventDefault()
//
//     let id = event.target.elements.username.value
//     console.log(id)
//     getInfo(id)
// })
//
// const form = document.getElementById('addticketform')
// form.addEventListener('change', (event) => {
//     event.preventDefault()
//
//     let id = event.target.value
//     console.log(id)
// })
//
// getInfo = (id) => {
//     fetch(`http://localhost:3000/api/tickets/username/${id}`)
//     .then((response) => {
//         return response.json()
//         .then((data) => {
//             console.log(data)
//             // search result #1
//             var searchResult1 = document.getElementById('searchResult1')
//             var eventName1 = document.createElement('p')
//             var venueName1 = document.createElement('p')
//             var date1 = document.createElement('p')
//             var time1 = document.createElement('p')
//
//             eventName1.innerText = data[0].event
//             venueName1.innerText = data[0].venue
//             date1.innerText = data[0].date
//             time1.innerText = data[0].time
//
//             searchResult1.append(eventName1)
//             searchResult1.append(venueName1)
//             searchResult1.append(date1)
//             searchResult1.append(time1)
//
//             // search result #2
//             var searchResult2 = document.getElementById('searchResult2')
//             var eventName2 = document.createElement('p')
//             var venueName2 = document.createElement('p')
//             var date2 = document.createElement('p')
//             var time2 = document.createElement('p')
//
//             eventName2.innerText = data[1].event
//             venueName2.innerText = data[1].venue
//             date2.innerText = data[1].date
//             time2.innerText = data[1].time
//
//             searchResult2.append(eventName2)
//             searchResult2.append(venueName2)
//             searchResult2.append(date2)
//             searchResult2.append(time2)
//         })
//     })
// }

// MAP JS
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZndhcyIsImEiOiJjajk1dHc0am40bzY5MzNtYm0yMWx3emdmIn0.DrIhBUV9hbyQvinhBYlDFg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9'
});


//Lizz's new shit
let loginButton = document.getElementsByClassName('btn-outline-light')[0]
let loginForm = document.getElementById('loginform')
loginButton.addEventListener('click', event => {
  event.preventDefault()
  loginForm.style.display = 'block'
})
let closeForm = document.getElementsByClassName('closeform')[0]
closeForm.addEventListener('click', event => {
  loginForm.style.display = 'none'
})


let ticketButton = document.getElementsByClassName('addticketformButton')[0]
let addticketform = document.getElementById('addticketform')
ticketButton.addEventListener('click', event => {
  event.preventDefault()
  addticketform.style.display = 'block'
})
let closeTicketForm = document.getElementsByClassName('closeform')[1]
closeTicketForm.addEventListener('click', event => {
  addticketform.style.display = 'none'
})


let createAccountButton = document.getElementsByClassName('createAccountButton')[0]
let createaccount = document.getElementById('createaccount')
createAccountButton.addEventListener('click', event => {
  event.preventDefault()
  loginForm.style.display = 'none'
  createaccount.style.display = 'block'
})
let closeCreateAccount = document.getElementsByClassName('closeform')[2]
closeCreateAccount.addEventListener('click', event => {
  createaccount.style.display = 'none'
})

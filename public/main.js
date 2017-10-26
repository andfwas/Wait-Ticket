let div = document.getElementById('searchFormatting')

const form = document.getElementById('typeform')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  div.innerHTML =''
  //console.log(event)
  let id2 = event.target[1].value
  let id1 = event.target[0].value
  getInfoByCategory(id2, id1)
})

getInfoByCategory = (id2, id1) => {
  fetch(`http://localhost:3000/api/tickets/type/${id2},${id1}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      //console.log(data)
      //console.log(id2)
      //console.log(id1)
      //let event;

      for(let i in data) {
        let event = (data[i].event)
        //console.log(event)
        let venue = (data[i].venue)
        let location = data[i].location
         let date = data[i].date
        let time = data[i].time
        createElement(event, venue, location, date, time)
      }

    })
  }


createElement = (event, venue, location, date, time) => {
  let divCreate = document.createElement('div')
  divCreate.className = 'event'

  let p = document.createElement('p')
  p.textContent = event

  let p2 = document.createElement('p')
  p2.textContent = venue

  let p3 = document.createElement('p')
  p3.textContent = location

  let p4 = document.createElement('p')
  p4.textContent = date

  let p5 = document.createElement('p')
  p5.textContent = time

  divCreate.appendChild(p)
  divCreate.appendChild(p2)
  divCreate.appendChild(p3)
  divCreate.appendChild(p4)
  divCreate.appendChild(p5)
  div.appendChild(divCreate)
//console.log(event)
}

console.log(document.cookie)
//
// var cookieParse = document.cookie.split(';')
// console.log(cookieParse)
var cookie = document.cookie
if(cookie.search('token') < 0){
  console.log('not logged in')
}else{
  console.log('logged in')
}


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
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 39.7392, lng: -104.9903}
  });
  var marker = new google.maps.Marker({
    position: {lat: 39.7392, lng: -104.9903},
    map: map
  });
  newMarkers(locations)
  function newMarkers(locations) {
    // for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: {lat: 39.7392, lng: -104.9903},
        map: map
      })
    // }
  }
}

//Lizz's new shit
let loginButton = document.getElementById('loginButton')
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

var query = window.location.search.substring(1);
console.log(query)

//Geralle's shit

// var cookieParse = document.cookie.split(';')
// console.log(cookieParse)
var cookie = document.cookie
if(cookie.search('token') < 0){
  // console.log('not logged in')
  $('#logoutButton').hide()
  $('#loginButton').show()
  $('#myProfileButton').hide()
  $('#addTicketButton').hide()
  $('#usersnameDisplay').hide()
}else{
  // console.log('logged in')
  $('#logoutButton').show()
  $('#loginButton').hide()
  $('#myProfileButton').show()
  $('#addTicketButton').show()
  $('#usersnameDisplay').show()
}

var dt = new Date();
var logoutButton = document.getElementById('logoutButton')
logoutButton.addEventListener('click',function(event){
  document.cookie = `token=; expires=${dt}`;
  location.reload()
})



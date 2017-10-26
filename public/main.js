// console.log(document.cookie)
// //
// // var cookieParse = document.cookie.split(';')
// // console.log(cookieParse)
// var cookie = document.cookie
// if(cookie.search('token') < 0){
//   console.log('not logged in')
// }else{
//   console.log('logged in')
// }



// const form2 = document.getElementById('createaccount')
// form2.addEventListener('submit', (event) => {
//     event.preventDefault()
//
//     let id = event.target.elements.username.value
//     console.log(id)
//     getInfo(id)
// })
//
const form = document.getElementById('typeform')
form.addEventListener('change', (event) => {
    event.preventDefault()

    let id = event.target.name

    let idLoc;
    let idType;

    if(id === 'location') {
      idLoc = event.target.value
    }
    else if(id === 'eventtype') {
      idType = event.target.value
    }

    //console.log(idType)
    getInfoByCategory(idType,idLoc)
})

getInfoByCategory = (idType, idLoc) => {
  fetch(`http://localhost:3000/api/tickets/type/${idType},${idLoc}`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
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

var searchFormatting = document.getElementById('searchFormatting')
searchFormatting.addEventListener('click',function(event){
  // console.log(event)
  var id = Number(event.target.id)
  if(id !== NaN || id !== 0){
    console.log(id)
  }
})
Add Comment Collapse

import * as messaging from "messaging";
import { localStorage } from "local-storage";
import { geolocation } from "geolocation"

import { me } from "companion";
// const uuidv1 = require('uuid/v1');
const PROJECT_ID = "poppywatch-72416";
let data = {};
let location;

function getUser() {
  return localStorage.getItem("userId");
}

function setUserAndUpdateDatabase (data) {
  // let userId = uuidv1();
  fetch(`https://${PROJECT_ID}.firebaseio.com/users.json`, {
    method: 'post',
    mode: "cors",
    body: JSON.stringify({
      events: [data]
    })
  })
  .then(function(response) {
      return response.text();
    }).then(function(text) {
      console.log("Got JSON response from server: " + text);
      let res = JSON.parse(text);
      console.log(res.name);
      localStorage.setItem("userId", res.name);
    });

}
function updateDatabase (user, data) {
  fetch(`https://${PROJECT_ID}.firebaseio.com/users/${user}/events.json`, {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  })
  .then(function(response) {
      return response.text();
    }).then(function(text) {
      console.log("Got JSON response from server(POST): " + text); });
}

function locationSuccess(position) {
    location = position.coords.latitude, ", " + position.coords.longitude;
}

function locationError(error) {
  location = "We were unable to determine your location."
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  geolocation.getCurrentPosition(locationSuccess, locationError);
  evt.data[location] = location;
  let user = getUser();
  user ? updateDatabase(user, evt.data) : setUserAndUpdateDatabase(evt.data);
}

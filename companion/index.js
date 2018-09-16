import * as messaging from "messaging";
import { localStorage } from "local-storage";

import { me } from "companion";
// const uuidv1 = require('uuid/v1');
const PROJECT_ID = "poppywatch-72416";
let data = {};

function getUser() {
  return localStorage.getItem("userId");
}

function setUserAndUpdateDatabase (data) {
  // let userId = uuidv1();
  let userId = "user" + Math.random();
  localStorage.setItem("userId", userId);
  fetch(`https://${PROJECT_ID}.firebaseio.com/users.json`, {
    method: 'get',
  })
  .then(function(response) {
      return response.text();
    }).then(function(text) {
      console.log("Got JSON response from server: " + text); });
  // .catch(function (err) {
  //   console.log("error");
  //   console.log(JSON.stringify(err));
  // });
  fetch(`https://${PROJECT_ID}.firebaseio.com/users.json`, {
    method: 'post',
    mode: "cors",
    body: JSON.stringify({
      userId,
      events: [data]
    })
  })
  .then(function(response) {
      return response.text();
    }).then(function(text) {
      console.log("Got JSON response from server(POST): " + text); });
  // .catch(function (err) {
  //   console.log("error");
  //   console.log(JSON.stringify(err));
  // });
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  localStorage.clear();
  getUser() ? console.log('this shouldn\'t happen yet') : setUserAndUpdateDatabase(evt.data);
  console.log(JSON.stringify(evt.data));
}


'use strict';

const zip = document.querySelector('#zip'); 
const tempPara = document.querySelector('#temp');
const locationPara = document.querySelector('#location');
const weatherUrl = 'http://api.weatherunlocked.com/api/current/';
const apiKey = ''; // add API key here
const appID = ''; // add app ID here
let city;
let state;
let lat;
let lon;

zip.addEventListener('keyup', function() {
  const zipString = zip.value; 
  if (zipString.length === 5) {
      getData(zipString);
  } 
}, false);

function getData(zip) {
  fetch('http://api.zippopotam.us/us/' + zip).then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      updateUIError();
    }
  }).then(function(data) {
    return getLocation(data);
  }).then(function(data) {
    return updateUISuccess(data);
  }).catch(function(error) {
    return updateUIError();
  });
}

function getLocation(data) {
  city = data.places[0]['place name'];
  state = data.places[0]['state'];
}

function updateUISuccess(data) {
  zip.value = '';
  locationPara.innerHTML = city + ', ' + state;
}

function updateUIError() {
  locationPara.innerHTML = 'Please try again in a bit.';
}
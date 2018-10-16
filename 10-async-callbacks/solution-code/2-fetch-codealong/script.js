
'use strict';

const $zip = $('#zip'); 
const $tempPara = $('#temp');
const $locationPara = $('#location');
const weatherUrl = 'http://api.weatherunlocked.com/api/current/';
let city;
let state;
let lat;
let lon;

$zip.on('keyup', function() {
  const zipString = $zip.val(); 
  if (zipString.length === 5) {
      getData(zipString);
  } 
});

function getData(zip) {
  fetch('http://api.zippopotam.us/us/' + zip).then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw updateUIError(response.status);
    }
  }).then(function(data) {
    return getLocation(data);
  }).then(function() {
    return updateUISuccess();
  }).catch(function() {
    return updateUIError();
  });
}

function getLocation(data) {
  city = data.places[0]['place name'];
  state = data.places[0]['state'];
}

function updateUISuccess() {
  $zip.val('');
  $locationPara.text(city + ', ' + state);
}

function updateUIError(error) {
  $locationPara.text('Please try again in a bit.');
  console.log('Response code: ' + error);
}

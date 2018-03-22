/*
 * Fetch codealong
 */


'use strict';

const zip = document.querySelector('#zip'); 
const tempPara = document.querySelector('#temp');
const locationPara = document.querySelector('#location');
const weatherUrl = 'http://api.weatherunlocked.com/api/current/';
const apiKey = '';
const appID = '';
let city;
let state;
let lat;
let lon;

zip.addEventListener('keyup', function() {
  const zipString = zip.value; 
  if (zipString.length === 5) {
      console.log(zipString);
  } 
}, false);



'use strict';

let zipLookup = (function() {

  const zip = document.querySelector('#zip'); 
  const locationPara = document.querySelector('#location');
  let city;
  let state;

  function checkInput() {
    const zipString = zip.value; 
    if (zipString.length === 5) {
        getData(zipString);
    } 
  };

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

  return {
    check: checkInput
  }
})();

const zip = document.querySelector("#zip"); 
zip.addEventListener("keyup", zipLookup.check, false);
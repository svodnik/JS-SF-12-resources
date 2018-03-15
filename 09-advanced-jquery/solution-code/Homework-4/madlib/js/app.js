const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let startupIdea;
let favorites = [];

createStartup();


document.querySelector('#create').addEventListener('click', createStartup, false);
document.querySelector('#save').addEventListener('click', save, false);
document.querySelector('#print').addEventListener('click', print, false);

function createStartup(){
  const random1 = Math.floor((Math.random() * startupX.length));
  const random2 = Math.floor((Math.random() * startupY.length));
  startupIdea = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  document.querySelector('#xForY').innerHTML = startupIdea;
}
function save(){
  favorites.push(startupIdea);
  console.log(favorites);
}
function print(){
  document.querySelector('#favorites').innerHTML = '';
  for(let i = 0; i < favorites.length; i++){
    document.querySelector('#favorites').innerHTML += favorites[i] + '<br />';
  }
}

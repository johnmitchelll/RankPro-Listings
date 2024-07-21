
// only flipping this value because we need to init the html and they need to be diff
var currentCategory = "all";
const ENTER = 13;
var enterHeld = false;
localStorage.setItem('enterHeld', false);


function setCategoryElements() {
  const parentDiv = document.getElementById("categories");

  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }

  for (let i = 0; i < ALL_CATEGORIES.length; i++) {

    var button = document.createElement('button');
    button.textContent = limitStringWithDots(20, ALL_CATEGORIES[i]);
    button.setAttribute('onclick', "categoryClick(\"" + ALL_CATEGORIES[i] + "\")");

    parentDiv.appendChild(button);
  }
}


function categoryClick(name){
  
  let business = document.getElementById("business_text");
  let location = document.getElementById("location_text");

  business.value = name;

  // if no name
  if(location.value == ""){
    location.focus();
    return;
  }

  lookUpRequest = {place: location.value, name: business.value};
  localStorage.setItem('lookUpRequest', JSON.stringify(lookUpRequest));

  window.location.href = './list/';
}

function categoryEnter(){
  let business = document.getElementById("business_text");
  let location = document.getElementById("location_text");

  // if no name
  if(location.value == ""){
    location.focus();
    return;
  }

  if(business.value == ""){
    business.focus();
    return;
  }

  lookUpRequest = {place: location.value, name: business.value};
  localStorage.setItem('lookUpRequest', JSON.stringify(lookUpRequest));

  window.location.href = './list/';
}



function keyPressed(evt){ 
  let enterHeld = localStorage.getItem('enterHeld');

  if(evt.keyCode == ENTER && enterHeld == "false"){
    getTextInfo();
    localStorage.setItem('enterHeld', "true");
  }   
}

function keyReleased(evt){ 
  if(evt.keyCode == ENTER){
    localStorage.setItem('enterHeld', "false");
  }   
}

document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyReleased)



function limitStringWithDots(maxLength, text) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
}

function goToRankProWWW(){
   window.location.href = "https://rankpro.com/";
}


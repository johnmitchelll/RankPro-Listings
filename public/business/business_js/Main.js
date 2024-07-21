

var link;
var doneWithHTML = false;

window.onload = function() {
  link = localStorage.getItem('link');
  lookUpRequest = JSON.parse(localStorage.getItem('lookUpRequest'));

  document.getElementById("location_text").value = capitalizeFirstLetter(lookUpRequest.place);
  document.getElementById("business_text").value = capitalizeFirstLetter(lookUpRequest.name);

  // initFirstInfo();
  // initTimeInfo()
  // initReviewInfo();

  getMainInfo(link);

  document.getElementById("back").style.opacity = 0.2;

  if(window.innerHeight > 650){
    setInterval(() => doStickyScrolling(), 1000/60);
  } 
}
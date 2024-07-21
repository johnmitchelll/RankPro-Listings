

var mobileOrSmaller = -1;
const mediaQuery = window.matchMedia("(max-width: 900px)");

// Function to be executed when the media query matches
function handleScreenWidthChange(event) {
  if (event.matches) {
    // Screen width is smaller than 900px
    console.log("Screen width is smaller than 900px");
    adjustMoveableForSmallScreen();
    // You can add your actions here for when the screen is smaller
  } else {
    // Screen width is larger than 900px
    console.log("Screen width is larger than 900px");
    adjustMoveableForBigScreen();
    // You can add your actions here for when the screen is larger
  }
}

// Initial call to the function
handleScreenWidthChange(mediaQuery);

// Add event listener to the media query
mediaQuery.addEventListener("change", handleScreenWidthChange);



function adjustMoveableForSmallScreen(){
  mobileOrSmaller = true;

  let right_bottom_info = document.getElementById("right_bottom_info");
  let right_movable = document.getElementById("right_movable");
  let left_bottom_info = document.getElementById("left_bottom_info");
  let nthChild = left_bottom_info.children[4];

  right_bottom_info.style.display = "none";
  right_bottom_info.removeChild(right_movable);
  right_movable.style.width = "90%";

  left_bottom_info.insertBefore(right_movable, nthChild);
  left_bottom_info.style.width = "100%";
}

function adjustMoveableForBigScreen(){
  if(mobileOrSmaller == -1){
    mobileOrSmaller = false;
    return;
  }

  mobileOrSmaller = false;

  let right_bottom_info = document.getElementById("right_bottom_info");
  let right_movable = document.getElementById("right_movable");
  let left_bottom_info = document.getElementById("left_bottom_info");
  let nthChild = left_bottom_info.children[4];

  right_bottom_info.style.display = "initial";
  right_bottom_info.appendChild(right_movable);
  right_movable.style.width = "90%";

  left_bottom_info.removeChild(left_bottom_info.children[4]);
  left_bottom_info.style.width = "50%";
}



var rightMovableSticky = false;

var originalWidth = document.getElementById("right_movable").offsetWidth;
var originalResting = document.getElementById("right_movable").offsetTop;

function doStickyScrolling(){
  // console.log(window.scrollY)

  if(mobileOrSmaller){
    return;
  }

  let rightMovable = document.getElementById("right_movable");
  let rightBottomInfo = document.getElementById("right_bottom_info");


  if(window.scrollY < originalResting){
    rightMovable.style.position = "initial";
    return;
  }

  // console.log(window.scrollY + window.innerHeight - 10, rightBottomInfo.offsetTop+rightBottomInfo.offsetHeight)

  if(window.scrollY + window.innerHeight - 10 > rightBottomInfo.offsetTop+rightBottomInfo.offsetHeight){

    rightMovable.style.position = "fixed";
    rightMovable.style.top = (rightBottomInfo.getBoundingClientRect().bottom - 650)+"px";
    rightMovable.style.width = (originalWidth)+"px";
    return;
  }

  rightMovable.style.position = "fixed";
  rightMovable.style.top = "20px";
  rightMovable.style.width = (originalWidth)+"px";


  // console.log(rightMovable.getBoundingClientRect().top, window.scrollY)
  
}


function setBusinessType(){
  if(doneWithHTML == false){
    return;
  }

  document.getElementById("business_text").value = document.getElementById("about_tags_link").innerHTML;

  getTextInfo();
}


function getTextInfo(){
  let location = document.getElementById("location_text");
  let business = document.getElementById("business_text");

  if(location.value == ""){
    location.focus();
    return;
  }else if(business.value == ""){
    business.focus();
    return;
  }

  lookUpRequest = {place: location.value, name: business.value};
  localStorage.setItem('lookUpRequest', JSON.stringify(lookUpRequest));

  window.location.href = '../list/';
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function goToRankProWWW(){
   window.location.href = "https://rankpro.com/";
}



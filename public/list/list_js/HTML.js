
const FEAT_LEN = 3;
const ENTER = 13;
var readyForHTML = false;
var allLocationsAreNums = true;


function initHTML(){
	readyForHTML = false;


	if(locations.length <= 0){
      document.getElementById("feat_business_title").innerHTML = "There Are No "+ capitalizeFirstLetter(lookUpRequest.name) +" Businesses In "+ capitalizeFirstLetter(lookUpRequest.place);
      return;
   }

	document.getElementById("feat_business_title").innerHTML = "Featured "+ capitalizeFirstLetter(lookUpRequest.name) +" Businesses In "+ capitalizeFirstLetter(lookUpRequest.place);

	cleanUpLocationsArray();

	initFeat();

	if(locations.length <= FEAT_LEN){
		return;
	}

	document.getElementById("business_title").innerHTML = "Top "+ capitalizeFirstLetter(lookUpRequest.name) +" Businesses In "+ capitalizeFirstLetter(lookUpRequest.place);

	initLocations();

}

function initFeat(){

// adding the featured businesses
	for (var i = 0; i < Math.min(locations.length, FEAT_LEN); i++) {

		let locationDiv = document.createElement('div');
		locationDiv.classList.add('feat_class');
		locationDiv.classList.add('feat_class_'+i);
		locationDiv.setAttribute('onclick', "goToLocationPage(\"" + i + "\")");

		let infoDiv = document.createElement('div');
		infoDiv.classList.add('feat_info');


		let title = document.createElement('h1');
		title.textContent = locations[i][0].replace(new RegExp("&amp;", "g"), "&");
		title.classList.add("feat_title");
		title.classList.add("feat_title_"+i);
		infoDiv.appendChild(title);

		initStars(parseInt(locations[i][1]), infoDiv, locations[i][2])

		for (var j = 3; j < locations[i].length; j++) {
			let data = document.createElement('h4');
			data.textContent = locations[i][j].replace(new RegExp("&amp;", "g"), "&");
			infoDiv.appendChild(data);
		}


		// top section of the div
		let topSquare = document.createElement('div');
		topSquare.style.position = "relative";

		let topSquareImge = document.createElement('img');
		topSquareImge.setAttribute("src", "../imgs/profile-page-template.jpg");
		topSquareImge.classList.add('feat_top_square');

		let topSquareBusinessType = document.createElement('h3');
		topSquareBusinessType.setAttribute("id", "feat_business_type");

		let capitalizedText
		if(locations[i][0]){
			capitalizedText = capitalizeWords(locations[i][0]);
		}else{
			capitalizedText = "Businesses\'s";
		}
		
		topSquareBusinessType.innerHTML = capitalizedText + "\'s";

		topSquare.appendChild(topSquareImge);
		topSquare.appendChild(topSquareBusinessType);
		// top section of the div


		locationDiv.appendChild(topSquare);
		locationDiv.appendChild(infoDiv);

		featured.appendChild(locationDiv);
	}
}



function initStars(numStars, div, numReviews){

	if(!numStars){
		return;
	}

	let starDivAndNumReviews = document.createElement('div');
	starDivAndNumReviews.style.display = "flex";

	let starDiv = document.createElement('div');
	starDiv.classList.add('star_div');

	let starNum = document.createElement('p');
	starNum.textContent = numStars.toFixed(1);

	starDiv.appendChild(starNum);

	for (var i = 1; i <= 5; i++) {
		let star = document.createElement('img');
		star.src = "../imgs/star_empty.svg";

		if(numStars >= i){
			star.src = "../imgs/star_full.svg";
		}

		starDiv.appendChild(star);
	}

	let numReviewsDiv = document.createElement('h4');
	numReviewsDiv.textContent = numReviews
	numReviewsDiv.style.margin = "0px 0px 10px 5px"
	numReviewsDiv.style.alignSelf = "center"


	starDivAndNumReviews.appendChild(starDiv);
	starDivAndNumReviews.appendChild(numReviewsDiv);

	div.appendChild(starDivAndNumReviews);
}	

function initLocations(){
	// adding the normal ones
	if(locations.length < FEAT_LEN){
		return;
	}

	for (var i = FEAT_LEN; i < locations.length; i++) {

		// this is going to be the total location div
		let total_location_div = document.createElement('div');
		total_location_div.classList.add('total_location_div');
		total_location_div.classList.add('total_location_div'+i);
		total_location_div.setAttribute('onclick', "goToLocationPage(\"" + i + "\")");

		// this is going to be the star graphic
		// let star_graphic = document.createElement('img');
		// star_graphic.setAttribute("id", "rankpro_star");
		// star_graphic.setAttribute("src", "../imgs/list-page-template.jpg");

		// this is going to be the location info
		let locationDiv = document.createElement('div');
		locationDiv.classList.add('location_class');
		locationDiv.setAttribute('onclick', "goToLocationPage(\"" + i + "\")");

		let title = document.createElement('h2');
		title.textContent = locations[i][0].replace(new RegExp("&amp;", "g"), "&");
		title.classList.add("location_title"+i);
		locationDiv.appendChild(title);

		initStars(parseInt(locations[i][1]), locationDiv, locations[i][2])

		for (var j = 3; j < locations[i].length; j++) {
			let data = document.createElement('h4');
			data.textContent = locations[i][j].replace(new RegExp("&amp;", "g"), "&");
			locationDiv.appendChild(data);
		}

		// total_location_div.appendChild(star_graphic);
		total_location_div.appendChild(locationDiv);

		locations_container.appendChild(total_location_div);
	}
}

function cleanUpLocationsArray(){
	let locationVarType;

	for (var i = 0; i < locations.length; i++) {
		locationVarType = parseFloat(locations[i][0])

		if(isNaN(locationVarType)){
			allLocationsAreNums = false;
			break;
		}
	}

	if(allLocationsAreNums == false){

		for (var i = locations.length - 1; i >= 0; i--) {
			locationVarType = parseFloat(locations[i][0]);

			if(!isNaN(locationVarType)){
				console.log(locations[i], links[i]);

				locations.splice(i, 1);
				links.splice(i, 1);
			}
		}
	}
}

function goToLocationPage(index){
	
	localStorage.setItem('link', links[index]);
  	window.location.href = '../business/';
}

function goToRankProWWW(){
   window.location.href = "https://rankpro.com/";
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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


function capitalizeWords(str) {
  // Replace underscores with spaces
  let modifiedStr = str.replace(/_/g, ' ');

  // Split the string into an array of words
  let words = modifiedStr.split(' ');

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a single string
  let result = capitalizedWords.join(' ');

  return result;
}

function limitStringWithDots(maxLength, text) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
}

function formatString(str) {
  // Remove underscores and split the string into an array of words
  var words = str.replace(/_/g, ' ').split(' ');

  // console.log(str, words)

  // Capitalize each word
  var capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  // var formattedStr = capitalizedWords.join(' ');

  if(str.includes("_")){	
  	return "Businesses";
  }

  return capitalizedWords[0];
}





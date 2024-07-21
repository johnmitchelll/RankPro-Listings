
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

	window.location.href = './list/';
}
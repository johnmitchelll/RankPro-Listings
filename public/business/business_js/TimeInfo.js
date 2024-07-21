
var timeData// = {"time_simple":["Open"," ⋅ Closes 1:30 AM"],"days":["Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],"times":["10:30 AM–1:30 AM","10:30 AM–1:30 AM","10:30 AM–1 AM","10:30 AM–1 AM","10:30 AM–1 AM","10:30 AM–1 AM","10:30 AM–1 AM"]}

function initTimeInfo(){
	console.log("TIME DATA: ");
	console.log(timeData);

	if(timeData.days){
		for (var i = 0; i < timeData.days.length; i++) {
			
			let dayTimeDiv = document.createElement("div");

			let day = document.createElement("h4");
			day.classList.add("time_info_day");
			day.innerHTML = timeData.days[i];

			let time = document.createElement("h4");
			time.classList.add("time_info_time");
			time.innerHTML = timeData.times[i];

			dayTimeDiv.appendChild(day);
			dayTimeDiv.appendChild(time);

			document.getElementById("time_info_list").appendChild(dayTimeDiv);

		}
	}else{
		document.getElementById("time_info").style.display = "none";
	}

	// top bread cumbs
	if(cityState){
		let cityStateBreadCrumbTop = document.createElement("h4");
		cityStateBreadCrumbTop.innerHTML = cityState;

		let arrow = document.createElement("h1");
		arrow.innerHTML = ">";

		document.getElementById("addy_and_tags").appendChild(cityStateBreadCrumbTop);

		if(firstData.category){
			document.getElementById("addy_and_tags").appendChild(arrow);

			let categoryBreadCrumbTop = document.createElement("h4");
			categoryBreadCrumbTop.innerHTML = firstData.category;

			document.getElementById("addy_and_tags").appendChild(categoryBreadCrumbTop);
		}

		if(firstData.title){
			arrow = document.createElement("h1");
			arrow.innerHTML = ">";
			document.getElementById("addy_and_tags").appendChild(arrow);

			let titleCrumbTop = document.createElement("h4");
			titleCrumbTop.innerHTML = firstData.title[0].children[1];

			document.getElementById("addy_and_tags").appendChild(titleCrumbTop);
		}
		
	}else{
		document.getElementById("addy_and_tags").style.display = "none";
	}


	if(timeData.time_simple){
		if(timeData.time_simple[0] == "Open"){
			document.getElementById("time_breadcrumb_open").style.color = '#4caf50';
			document.getElementById("time_breadcrumb_open").innerHTML = "Open";
		}

		let dot = document.createElement("h1")
		dot.innerHTML = "•";

		let openNext = document.createElement("h4");
		openNext.innerHTML = timeData.time_simple[1].substring(3);

		document.getElementById("time_breadcrumb").appendChild(dot);
		document.getElementById("time_breadcrumb").appendChild(openNext);


		if(cityState){
			dot = document.createElement("h1")
			dot.innerHTML = "•";

			let cityStateBreadCrumb = document.createElement("h4");
			cityStateBreadCrumb.innerHTML = cityState;

			document.getElementById("time_breadcrumb").appendChild(dot);
			document.getElementById("time_breadcrumb").appendChild(cityStateBreadCrumb);
		}
		
		if(firstData.category){
			dot = document.createElement("h1")
			dot.innerHTML = "•";

			let categoryBreadCrumb = document.createElement("h4");
			categoryBreadCrumb.innerHTML = firstData.category[0];

			document.getElementById("time_breadcrumb").appendChild(dot);
			document.getElementById("time_breadcrumb").appendChild(categoryBreadCrumb);
		}

	}else{
		document.getElementById("time_breadcrumb").style.display = "none";
	}
}
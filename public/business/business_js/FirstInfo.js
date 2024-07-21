

var firstData// = {"main_img":[{"tagName":"IMG","attributes":[{"name":"decoding","value":"async"},{"name":"src","value":"https://lh5.googleusercontent.com/p/AF1QipOYnK3dtVsUHC7KnItt_z_ZvpokwkiJWKTFKpVe=w426-h240-k-no"},{"name":"style","value":"position: absolute; top: 50%; left: 50%; width: 426px; height: 240px; transform: translateY(-50%) translateX(-50%);"}]}],"title":[{"tagName":"H1","attributes":[{"name":"class","value":"DUwDvf lfPIob"}],"children":[{"tagName":"SPAN","attributes":[{"name":"class","value":"a5H0ec"}]},"In-N-Out Burger",{"tagName":"SPAN","attributes":[{"name":"class","value":"G0bp3e"}]}]}],"stars":["4.6","<span class=\"rFrJzc\"></span><span class=\"rFrJzc\"></span><span class=\"rFrJzc\"></span><span class=\"rFrJzc\"></span><span class=\"rFrJzc UpDOYb\"></span>","","","","","","<span aria-label=\"2,705 reviews\">(2,705)</span>","(2,705)"],"about":["Classic burger chain serving customizable burgers, hand-cut fries &amp; shakes."],"stars_amount":[{"tagName":"DIV","attributes":[{"name":"class","value":"oxIpGd"},{"name":"style","value":"padding-left: 100%;"}]},{"tagName":"DIV","attributes":[{"name":"class","value":"oxIpGd"},{"name":"style","value":"padding-left: 22.6331%;"}]},{"tagName":"DIV","attributes":[{"name":"class","value":"oxIpGd"},{"name":"style","value":"padding-left: 5.52268%;"}]},{"tagName":"DIV","attributes":[{"name":"class","value":"oxIpGd"},{"name":"style","value":"padding-left: 1.92308%;"}]},{"tagName":"DIV","attributes":[{"name":"class","value":"oxIpGd"},{"name":"style","value":"padding-left: 3.30375%;"}]}],"website":["locations.in-n-out.com"],"phone_num":["(800) 786-1000"],"address":["3020 El Camino Real, Tustin, CA 92782"],"located_in":["Floor 1 · The Market Place"],"category":["Hamburger restaurant"]}
var cityState;

function initFirstInfo(){
	console.log("FIRST DATA: ");
	console.log(firstData)

	// main img
	// if(firstData.main_img){
	// 	document.getElementById("main_image_src").src = firstData.main_img[0].attributes[1].value;
	// }else{
	// 	document.getElementById("main_img_container").style.display = "none";
	// }

	// title
	if(firstData.title){
		let title = document.getElementById("title");
		title.innerHTML = firstData.title[0].children[1];
	}

	// stars avg
	if(firstData.stars){
		let stars_top_avg = document.getElementById("stars_top_avg");
		stars_top_avg.innerHTML = firstData.stars[0];

		let stars_main_avg_title = document.getElementById("stars_main_avg_title");
		
		stars_main_avg_title.innerHTML = firstData.stars[0]


		let stars_imgs_handle = document.querySelectorAll("#stars_top img")
		for (var i = 0; i < Math.floor(parseInt(firstData.stars[0])); i++) {
			stars_imgs_handle[i].src = "../imgs/star_full.svg"
		}

		let stars_top_total = document.getElementById("stars_top_total");
		stars_top_total.innerHTML = firstData.stars[firstData.stars.length-1];

		let stars_main_num = document.getElementById("stars_main_num");

		let avg = firstData.stars[firstData.stars.length-1].replace(/[()]/g, '');
		stars_main_num.innerHTML = avg + " Reviews";
	}


	if(firstData.about){
		// about tags link
		if(firstData.category){
			let about_tags_link = document.getElementById("about_tags_link");
			about_tags_link.innerHTML = firstData.category[0];
		}

		// about
		let about_body = document.getElementById("about_body");
		about_body.innerHTML = firstData.about;
	}else{
		document.getElementById("about_this_business").style.display = "none";
	}

	// set city state
	if(firstData.address){
		cityState = grabCityStateFromAddy(firstData.address[0]);
	}

	// star lengths
	if(firstData.stars_amount){

		let innerBars = document.getElementsByClassName("star_bar_inner");
		let lengths = [];
		let lengthsTotal = 0;

		let totalReviews = firstData.stars[firstData.stars.length-1].replace(/[()]/g, '');
		totalReviews = totalReviews.replace(/,/g, '');
		totalReviews = parseInt(totalReviews);

		let starNumsNums = document.querySelectorAll(".star_num_ref")

		for (var i = 0; i < firstData.stars_amount.length; i++) {
			let length = parseFloat(firstData.stars_amount[i].attributes[1].value.match(/[-+]?[0-9]*\.?[0-9]+/)[0]);

			lengths.push(length);
			lengthsTotal += length;

			innerBars[i].style.width = length + "%";
		}

		for (var i = 0; i < starNumsNums.length; i++) {
			starNumsNums[i].innerHTML =  Math.round((lengths[i] / lengthsTotal) * totalReviews);
		}
	}


	// phone number
	if(firstData.phone_num){
		document.getElementById("phone_number").innerHTML = firstData.phone_num[0];

		let formattedForm = firstData.phone_num[0].replace(/[()]/g, '');
		formattedForm = formattedForm.replace(/ /g, '');
		document.getElementById("phone_number").href = "tel:+"+formattedForm;

	}else{
		document.getElementsByClassName("business_info_obj")[2].style.display = "none";
	}

	// phone website
	if(firstData.website_ref){
		document.getElementById("website").innerHTML = firstData.website[0];
		document.getElementById("website").href = firstData.website_ref[0].attributes[6].value;
	}else{
		document.getElementsByClassName("business_info_obj")[1].style.display = "none";
	}


	// addy
	if(firstData.address){
		document.getElementById("address").innerHTML = firstData.address[0];
	}else{
		document.getElementsByClassName("business_info_obj")[0].style.display = "none";
	}

	if(firstData.google_link){
		document.getElementById("google_click_button").href = firstData.google_link;
		document.getElementById("google_click_button").style.margin = "0px";
	}else{
		document.getElementById("google_click_button").style.display = "none";
	}
}


function grabCityStateFromAddy(addy){
	const commaIndex1 = addy.indexOf(',');
    const commaIndex2 = addy.indexOf(',', commaIndex1 + 1);
    const spaceIndexAfterSecondComma = addy.indexOf(' ', commaIndex2 + 1);
    
    if (commaIndex1 !== -1 && commaIndex2 !== -1 && spaceIndexAfterSecondComma !== -1) {
        const result = addy.substring(commaIndex1 + 2, spaceIndexAfterSecondComma + 3);
        return result;
    } else {
        return null; // Return null if the required parts are not found
    }
}

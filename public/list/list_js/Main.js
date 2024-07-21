
var lookUpRequest;
// var locations = [["Valley Bar","4.5","(2,604)","$$","Bar","130 N Central Ave","Cozy venue for music, spoken word &amp; more","Closed"],["Bitter &amp; Twisted Cocktail Parlour","4.5","(1,444)","$$$","Bar","1 W Jefferson St","Hip spot for creative drinks &amp; snacks","Closed"],["Gracie's Tax Bar","4.7","(802)","$","Bar","711 N 7th Ave","Laid-back, no-frills watering hole","Open"],["The Little Woody","4.5","(744)","$$","Bar","4228 E Indian School Rd","Lively bar with games &amp; music nights","Open"],["The Brill Line","4.6","(1,345)","Bar","901 N 1st St suite 106","Hip food court with cocktails &amp; events","Closed"],["Chambers","4.3","(544)","$$","Bar","705 N 1st St #2022","Hangout with whiskey flights &amp; pub grub","Open"],["Linger Longer Lounge","4.5","(643)","$$","Lounge","6522 N 16th St #6","Gourmet bar bites, cocktails &amp; games","Closed"],["Sazerac PHX - Cocktails and Craft - Indoor Outdoor","4.6","(744)","$$","Bar","821 N 2nd St","Buzzy cocktail parlor for cigars","Open"],["Highball","4.8","(233)","Cocktail bar","1514 N 7th Ave","Closed"],["Rips Bar","4.4","(1,010)","$","Bar","3045 N 16th St","Retro dive with live music &amp; DJs","Open"],["Garden Bar Phx","4.8","(119)","Cocktail bar","822 N 6th Ave","Closed"],["Little Rituals","4.6","(606)","$$","Cocktail bar","132 S Central Ave 4th Floor","Chill hotel cocktail bar &amp; lounge","Closed"],["Cobra Arcade Bar","4.3","(2,789)","$$","Bar","801 N 2nd St #100","Hip hangout for cocktails &amp; video games","Open"],["Bar Bianco","4.2","(67)","$$","Bar","609 E Adams St","Wine &amp; small plates in a historic home","Closed"]]
// var links = ["https://www.google.com/maps/place/Jack%27s+Surfboards/data=!4m7!3m6!1s0x80dd2001929108ab:0x6cf7beb52a86cc5c!8m2!3d33.6121253!4d-117.9298614!16s%2Fg%2F1tgq6z2h!19sChIJqwiRkgEg3YARXMyGKrW-92w?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/15th+St+Surf+Shop/data=!4m7!3m6!1s0x80dce003c19a8b1d:0x6b0421b34ee7d37b!8m2!3d33.6064402!4d-117.9210411!16s%2Fg%2F1v75s6c0!19sChIJHYuawQPg3IARe9PnTrMhBGs?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/The+Board+Club/data=!4m7!3m6!1s0x80dd20014473b50d:0x18e65d05c1e46c6c!8m2!3d33.6152021!4d-117.9298049!16s%2Fg%2F11bz09xlp8!19sChIJDbVzRAEg3YARbGzkwQVd5hg?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Russell+Surfboards/data=!4m7!3m6!1s0x80dd1fff7162c5c7:0xb982e0e8805f3e84!8m2!3d33.6102965!4d-117.9290559!16s%2Fg%2F1tdqtvbq!19sChIJx8Vicf8f3YARhD5fgOjggrk?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Frog+House/data=!4m7!3m6!1s0x80dd2041245b704f:0xabb7a3ec4ad70fc1!8m2!3d33.6289475!4d-117.9532268!16s%2Fg%2F1tjdm12q!19sChIJT3BbJEEg3YARwQ_XSuyjt6s?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Daydream/data=!4m7!3m6!1s0x80dd2072854debd3:0x509f1c5845a48d6b!8m2!3d33.6327386!4d-117.9342609!16s%2Fg%2F11c2khprd5!19sChIJ0-tNhXIg3YARa42kRVgcn1A?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Almond+Surfboards/data=!4m7!3m6!1s0x80dcdff2934a119d:0x883260b10a56cb16!8m2!3d33.633462!4d-117.914747!16s%2Fg%2F11bwqlswrj!19sChIJnRFKk_Lf3IARFstWCrFgMog?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Main+Street+Surf+Shop/data=!4m7!3m6!1s0x80dce06b6a7875d1:0x4f5adad806758958!8m2!3d33.6014219!4d-117.899854!16s%2Fg%2F1vcjmk6j!19sChIJ0XV4amvg3IARWIl1BtjaWk8?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/15th+St+Surf+Shop+@+32nd+St./data=!4m7!3m6!1s0x80dd219e5b2963a1:0x58a97ccd8b901c!8m2!3d33.6145671!4d-117.9316828!16s%2Fg%2F11rq5qg29j!19sChIJoWMpW54h3YARHJCLzXypWAA?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Jack%27s+Surfboards+Womens+and+Kids+Shop/data=!4m7!3m6!1s0x80dd20018d7c0a03:0x8356fd4720a2b427!8m2!3d33.6121428!4d-117.9296578!16s%2Fg%2F11b6g9wxfb!19sChIJAwp8jQEg3YARJ7SiIEf9VoM?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Vartanian+Surf/data=!4m7!3m6!1s0x80dd2070e6bf640b:0x857513c1db79055b!8m2!3d33.6389922!4d-117.9324713!16s%2Fg%2F12hkrfbfl!19sChIJC2S_5nAg3YARWwV528ETdYU?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Socal+Board+Sports/data=!4m7!3m6!1s0x80dcdf5a82a7e3f3:0x518feb7fd848bf93!8m2!3d34.169034!4d-117.7846934!16s%2Fg%2F11q_fn1f49!19sChIJ8-Onglrf3IARk79I2H_rj1E?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Paddle+Board+Newport+Beach/data=!4m7!3m6!1s0x80dd2009a489e05d:0x8ba9b131b8ec2b0e!8m2!3d33.6072512!4d-117.920783!16s%2Fg%2F12hk1wn46!19sChIJXeCJpAkg3YARDivsuDGxqYs?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Dan+Taylor+Surfboards/data=!4m7!3m6!1s0x80dd2065c5b0364d:0x56679381013f7a1e!8m2!3d33.6412696!4d-117.9415512!16s%2Fg%2F1vq754r8!19sChIJTTawxWUg3YARHno_AYGTZ1Y?authuser=0&hl=en&rclk=1","https://www.google.com/maps/place/Balboa+Surf+%26+Style/data=!4m7!3m6!1s0x80dce06f5e5e9aff:0x471283299125cc29!8m2!3d33.6062973!4d-117.8900065!16s%2Fg%2F1ptz4cw57!19sChIJ_5peXm_g3IARKcwlkSmDEkc?authuser=0&hl=en&rclk=1"];
var locations = [];
var links = [];

window.onload = function() {
  lookUpRequest = localStorage.getItem('lookUpRequest');
  lookUpRequest = JSON.parse(lookUpRequest);

  document.getElementById("location_text").value = capitalizeFirstLetter(lookUpRequest.place);
  document.getElementById("business_text").value = capitalizeFirstLetter(lookUpRequest.name);

  getList(lookUpRequest.name, lookUpRequest.place);

  // readyForHTML = true;

  setInterval(function(){
    // init HTML
    if(readyForHTML){
      initHTML();
    }

  }, 1000/30);

}




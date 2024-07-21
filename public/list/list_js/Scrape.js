
function getList(name, place){
  fetch('/getList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, place: place })
  })
  .then(response => response.json())
  .then(responseData => {
    // Handle the response from the server

    prepareBirdEyeDump(responseData.message);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    readyForBirdEyeDump = true;
  });
}

function prepareBirdEyeDump(data){
  if(data.list[0] == -1){
    console.log("going to business")
    localStorage.setItem('link', data.list[1]);
    window.location.href = '../business/';
  }


  console.log(data)

  if(!data){
    locations = [];
    readyForHTML = true;
    return;
  }

  data = data.list;

  for (var i = 0; i < data.length-1; i++) { 
    locations[i] = data[i];
  }

  links = data[data.length-1];

  for (var i = 0; i < links.length; i++) {
    links[i] = links[i].attributes[2].value;
  }

  readyForHTML = true;
}

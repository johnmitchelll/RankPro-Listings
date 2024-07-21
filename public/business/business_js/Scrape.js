
function getMainInfo(link){
  fetch('/getMainInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ link: link })
  })
  .then(response => response.json())
  .then(responseData => {
    // Handle the response from the server

    grabMainData(responseData.message);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    readyForBirdEyeDump = true;
  });
}

function getTimeInfo(place){
  fetch('/getTimeInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responseData => {
    // Handle the response from the server

    grabTimeData(responseData.message);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    readyForBirdEyeDump = true;
  });
}

function getReviewInfo(num){
  fetch('/getReviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ num: num })
  })
  .then(response => response.json())
  .then(responseData => {
    // Handle the response from the server

    grabReviewData(responseData.message);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    readyForBirdEyeDump = true;
  });
}




function grabMainData(data){
  firstData = data.list;
  initFirstInfo();
  getTimeInfo();
}

function grabTimeData(data){
  timeData = data.list;
  initTimeInfo()
  getReviewInfo(10);
}

function grabReviewData(data){
  reviewInfo = data.list;
  initReviewInfo();
}

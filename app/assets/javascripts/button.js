// we want this global timer to be accessed by all user threads

var userOwns = false;

$(document).on('click', '#button', function() {
  if(userOwns == false) {
    startClock();
    userOwns = true;
  }
  else {
    // when someone else clicks button, you lose it and get set to zero
    // store session name and time in db
    
    var stopTime = $time.innerHTML;
    $.post("/users",
      {
        time: stopTime
      },
      function() {
        alert("congratz u got a time of: " + stopTime);
      }
    );
    stopClock();
    resetClock();
    userOwns = false;
  }
});
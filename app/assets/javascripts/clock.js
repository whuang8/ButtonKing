var clsStopwatch = function() {
    // Private vars
  var startAt = 0;  // Time of last start / resume. (0 if not running)
  var lapTime = 0;  // Time on the clock when last stopped in milliseconds

  var now = function() {
      return (new Date()).getTime(); 
    }; 

  // Public methods
  // Start or resume
  this.startClock = function() {
      startAt = startAt ? startAt : now();
    };

  // Stop or pause
  this.stopClock = function() {
      // If running, update elapsed time otherwise keep it
      lapTime = startAt ? lapTime + now() - startAt : lapTime;
      startAt = 0; // Paused
    };

  // Reset
  this.resetClock = function() {
      lapTime = startAt = 0;
    };

  // Duration
  this.time = function() {
      return lapTime + (startAt ? now() - startAt : 0); 
    };
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
  var s = "0000" + num;
  return s.substr(s.length - size);
}

function formatTime(time) {
  var h = m = s = ms = 0;
  var newTime = '';

  h = Math.floor( time / (60 * 60 * 1000) );
  time = time % (60 * 60 * 1000);
  m = Math.floor( time / (60 * 1000) );
  time = time % (60 * 1000);
  s = Math.floor( time / 1000 );
  ms = time % 1000;

  newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
  return newTime;
}

function showClock() {
  $time = document.getElementById('time');
  updateClock();
}

function updateClock() {
  $time.innerHTML = formatTime(x.time());
}

function startClock() {
  clocktimer = setInterval("updateClock()", 1);
  x.startClock();
}

function stopClock() {
  x.stopClock();
  clearInterval(clocktimer);
}

function resetClock() {
  stopClock();
  x.resetClock();
  updateClock();
}
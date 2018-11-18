
function startTimer(duration, display) {
  console.log("started Timer")
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // if (window.name != "Charisky") {
        //   console.log(window.name);
        //   console.log("new tab opened");
        // }
        if (window.history.length != tabsOpen) {  // Um, needs to be 0 for IE, 1 for Firefox
            console.log("new tab opened")
        }
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = 0;
        }
        // if (timer == 0) {
        //     break;
        // }
    }, 1000);
}



function startClick() {
  window.name = "Charisky";
  console.log(window.name);
  console.log(window.history.length);
  var tabsOpen = window.history.length;
  var seconds = parseInt(document.getElementById("secondsIn").value);
  var minutes = parseInt(document.getElementById("minutesIn").value);
  console.log(seconds);
  console.log(minutes*60);
  var setTime = seconds + (minutes*60);
  console.log(setTime);
  var display = document.querySelector('#time');
  startTimer(setTime, display);
}

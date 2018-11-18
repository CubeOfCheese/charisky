function startTimer(duration, display) {
  console.log("started Timer")
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (!document.hasFocus()) {
          console.log("Clicked off the document");
          fail(); // need to write
        }
        else
          console.log("Clicked on the document");

        if (--timer < 0) {
            timer = 0; //win
            
        }
        // if (timer == 0) {
        //     break;
        // }
    }, 1000);
}


function startClick() {
  var seconds = parseInt(document.getElementById("secondsIn").value);
  var minutes = parseInt(document.getElementById("minutesIn").value);
  console.log(seconds);
  console.log(minutes*60);
  var setTime = seconds + (minutes*60);
  console.log(setTime);
  var display = document.querySelector('#time');
  startTimer(setTime, display);
}


function fail() {
  
}

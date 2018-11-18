
function startTimer(duration, display) {
  console.log("started Timer")
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (!document.hasFocus())
          document.location.href = "#"; // need to write

        if (--timer < 0) {
            timer = 0; //win

        }
    }, 1000);
}



function startClick() {
  window.name = "Charisky";
  console.log(window.name);
  console.log(window.history.length);
  var tabsOpen = window.history.length;
  var seconds = parseInt(document.getElementById("secondsIn").value);
  var minutes = parseInt(document.getElementById("minutesIn").value);

  document.getElementsByClassName("in1")[0].style.visibility = "hidden";
  document.getElementsByClassName("in1")[1].style.visibility = "hidden";
  document.getElementsByClassName("in1")[2].style.visibility = "hidden";

  console.log(seconds);
  console.log(minutes*60);
  var setTime = seconds + (minutes*60);
  console.log(setTime);
  var display = document.querySelector('#time');
  startTimer(setTime, display);
}

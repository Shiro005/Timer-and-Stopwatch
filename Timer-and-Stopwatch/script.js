var timerInterval;
    var timerSeconds = 0;
    var timerInput = document.getElementById("timerInput");
    
    var stopwatchInterval;
    var stopwatchSeconds = 0;
    
    function startTimer() {
      var timeParts = timerInput.value.split(":");
      var hours = parseInt(timeParts[0]) || 0;
      var minutes = parseInt(timeParts[1]) || 0;
      var seconds = parseInt(timeParts[2]) || 0;
      
      var totalTime = hours * 3600 + minutes * 60 + seconds;
      
      if (totalTime > 0) {
        timerSeconds = totalTime;
        timerInput.disabled = true;
        timerInterval = setInterval(updateTimer, 1000);
      }
    }
    
    function updateTimer() {
      timerSeconds--;
      
      if (timerSeconds >= 0) {
        var hours = Math.floor(timerSeconds / 3600);
        var minutes = Math.floor((timerSeconds % 3600) / 60);
        var seconds = timerSeconds % 60;
        
        document.getElementById("timer").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
      } else {
        clearInterval(timerInterval);
        timerInput.disabled = false;
        alert("Timer countdown completed!");
      }
    }
    
    function pauseTimer() {
      clearInterval(timerInterval);
      timerInput.disabled = false;
    }
    
    function resetTimer() {
      clearInterval(timerInterval);
      timerInput.disabled = false;
      timerInput.value = "";
      timerSeconds = 0;
      document.getElementById("timer").textContent = "00:00:00";
    }
    
    function startStopwatch() {
      stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
    
    function updateStopwatch() {
      stopwatchSeconds++;
      var hours = Math.floor(stopwatchSeconds / 3600);
      var minutes = Math.floor((stopwatchSeconds % 3600) / 60);
      var seconds = stopwatchSeconds % 60;
      
      document.getElementById("stopwatch").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    }
    
    function pauseStopwatch() {
      clearInterval(stopwatchInterval);
    }
    
    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchSeconds = 0;
      document.getElementById("stopwatch").textContent = "00:00:00";
    }
    
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
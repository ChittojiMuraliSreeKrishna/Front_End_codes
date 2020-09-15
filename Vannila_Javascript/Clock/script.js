var morning = 7;
var noon = 12;
var evening = 18;
var night = 22;

var showCurrentTime = function () {
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');
    var meridaianEl = document.getElementById('meridian');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridaian = "AM";
    if (hours >= noon) {
        meridian = "PM";
    }


    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    meridaianEl.innerHTML = meridaian;
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var timeEventJS = document.getElementById("timeEvent");
    if (time == morning) {
        messageText = "Good morning!";
    } else if (time == noon) {
        messageText = "good afternoon!";
    } else if (time == evening) {
        messageText = "good evening!";
    } else if (time == night) {
        messageText = "good night!";
    } else {
        messageText = "Hello warlord"
    }
    timeEvent.innerText = messageText;
    showCurrentTime()
}

updateClock()
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

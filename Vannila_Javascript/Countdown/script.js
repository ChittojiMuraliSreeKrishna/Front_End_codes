const newYears = "1 jan 2021";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const Seconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(Seconds / 3600 / 24);
  const hours = Math.floor(Seconds / 3600) % 24;
  const minutes = Math.floor(Seconds / 60) % 60;
  const seconds = Math.floor(Seconds) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);

// Set the date we're counting down to
const countDownDate = new Date("May 26, 2023 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML element with corresponding IDs
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("min").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is over, stop updating and show a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "You're a Software Engineer";
  }
}, 1000);

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// 10:00 AM Mountain Daylight Time (UTC-6) on Aug 21, 2026.
// The explicit offset makes the countdown correct regardless of the visitor's timezone.
let eventDate = new Date("2026-08-21T10:00:00-06:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds
    }
    else if (distance < 0 && distance > -21600000) {
        document.getElementById("countdown").innerHTML = "Come drop by, We are open!";
    }
    else if (distance < -21600000) {
        clearInterval(x);
        document.getElementById("countdown").textContent = "The event is over. See you next year!";
    }
});

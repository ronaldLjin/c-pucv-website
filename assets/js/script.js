let eventDate = new Date("Jan 24, 2023 12:00:00").getTime();

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


function showContents(id) {
    let dropDown = document.getElementById(id);
    let button = document.getElementById(id + "-button").getElementsByTagName("i")[0];

    if (dropDown.classList.contains("mobile-dropdown-content-active")) {
        dropDown.classList.remove("mobile-dropdown-content-active");
        button.classList.remove("fa-xmark");
        button.classList.add("fa-plus");
    } else {
        dropDown.classList.add("mobile-dropdown-content-active");
        button.classList.remove("fa-plus");
        button.classList.add("fa-xmark");
    }
}
let text_shadow = '';
for (let p = 0; p < 100; p++) {
    text_shadow += (text_shadow ? ', ' : '') + 2 * p + 'px ' + 2 * p + 'px 1px rgba(99,8,22,' + 1 / (p * p / 400 + 1) + ')';
}
document.head.innerHTML += "<style> @keyframes shadow {100%{text-shadow: " + text_shadow + ";}} </style>";

let eventDate = new Date("Aug 17, 2022 12:00:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0 && distance > -21600000) {
        document.getElementById("countdown").innerHTML = "Come drop by, We are open!";
    }
    else if (distance < -21600000) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "See you next year!";
    }
});
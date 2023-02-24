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
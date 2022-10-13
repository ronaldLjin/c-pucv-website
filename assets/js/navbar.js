let navBar = document.querySelector(".nav-bar")
let logo = navBar.querySelector(".logo")
let menuItems = document.querySelectorAll(".menu-item")
let donateButton = document.getElementById("donate-button")
let navBarLinksMobile = document.querySelector(".nav-bar-links-mobile")
let mask = document.getElementById("mask2")
let menu = document.getElementById("menu")
let closeNavButton = document.getElementById("close-nav")
document.addEventListener("scroll", () => {
    if (window.pageYOffset === 0) {
        navBar.style.backgroundColor = "transparent"
        navBar.style.boxShadow = "none"
        menuItems.forEach((e) => {
            e.style.color = "white"
        })
        donateButton.classList.remove("red-button")
        logo.src = "assets/images/logo-white.png"
    } else {
        navBar.style.backgroundColor = "white"
        navBar.style.boxShadow = "rgb(100 100 111 / 20%) 0px 7px 29px 0px"
        navBar.style.transition = "all 0.2s"
        menuItems.forEach((e) => {
            e.style.color = "rgba(199, 16, 46)"
        })
        donateButton.classList.add("red-button")
        logo.src = "assets/images/logo.png"
    }
})

const closeMenu = function () {
    navBarLinksMobile.classList.remove("animate__animated", "animate__slideInRight", "animate__faster")
    navBarLinksMobile.classList.add("animate__animated", "animate__slideOutRight", "animate__faster")
    mask.classList.remove("animate__animated", "animate__fadeIn", "animate__faster")
    mask.classList.add("animate__animated", "animate__fadeOut", "animate__faster")

    setTimeout(function () {
        mask.style.display = "none"
        navBarLinksMobile.style.display = "none"
    }, 500)
}

menu.addEventListener("click", () => {
    navBarLinksMobile.classList.remove("animate__animated", "animate__slideOutRight", "animate__faster")
    navBarLinksMobile.classList.add("animate__animated", "animate__slideInRight", "animate__faster")
    navBarLinksMobile.style.display = "flex"
    mask.classList.remove("animate__animated", "animate__fadeOut", "animate__faster")
    mask.classList.add("animate__animated", "animate__fadeIn", "animate__faster")
    mask.style.display = "block"


    mask.addEventListener("click", closeMenu)
    closeNavButton.addEventListener("click", closeMenu)
})

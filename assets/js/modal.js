let displayModal = function(e) {
    let modal = document.getElementById(`${e.path[0].id}-modal`)
    let mask =  document.getElementById("mask")
    mask.style.display = "block"
    modal.style.display = "block"
    // modal.classList.remove("animate__animated", "animate__slideOutDown", "animate__faster")
    // modal.classList.add("animate__animated", "animate__slideInUp", "animate__faster")
    // mask.classList.remove("animate__animated", "animate__fadeOut", "animate__faster")
    // mask.classList.add("animate__animated", "animate__fadeIn", "animate__faster")

    let removeModal = function(element) {
        element.addEventListener('click', () => {
            // modal.classList.remove("animate__animated", "animate__slideInUp", "animate__faster")
            // modal.classList.add("animate__animated", "animate__slideOutDown", "animate__faster")
            // mask.classList.remove("animate__animated", "animate__fadeIn", "animate__faster")
            // mask.classList.add("animate__animated", "animate__fadeOut", "animate__faster")
            setTimeout(function() {
                mask.style.display = "none"
                modal.style.display = "none"
            }, 500)
        })
    }  
    
    let closeButtons = document.querySelectorAll(".close")
    closeButtons.forEach(removeModal)
    removeModal(mask)  
}

const volunteer = document.getElementById("volunteer")
volunteer.addEventListener("click", displayModal)

const partner = document.getElementById("partner")
partner.addEventListener("click", displayModal)
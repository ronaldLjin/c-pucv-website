let displayModal = function(e) {
    let modal = document.getElementById(`${e.path[0].id}-modal`)
    let mask =  document.getElementById("mask")
    mask.style.display = "block"
    modal.style.display = "block"

    let removeModal = function(element) {
        element.addEventListener('click', () => {
            mask.style.display = "none"
            modal.style.display = "none"
        })
    }  
    
    let closeButtons = document.querySelectorAll(".close")
    closeButtons.forEach(removeModal)
    removeModal(mask)  
}

const volunteer = document.getElementById("volunteer")
volunteer.addEventListener("click", displayModal)
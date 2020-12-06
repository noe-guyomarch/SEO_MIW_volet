

let container = document.getElementsByClassName("container")[0]

let containerStyle = container.style

// valeur maximum du slider
let maxSliderValue = parseInt(document.getElementById("slider").getAttribute('max'))


let newPosition = -403
let lastShutterValue = parseInt(document.getElementById("slider").value)/10


// appel de la fonction a chaque fois que la valeur de l input change
function changeOnSlide() {

    let currentSliderValue = parseInt(document.getElementById("slider").value)
    // définit le nb de volet affichés actuelement
    let currentShutterValue = Math.trunc(currentSliderValue/10)

    // deplacement de l image en fonction du nb de volets a afficher (vers le haut, ou le bas)
    if (currentShutterValue > lastShutterValue) {
        newPosition += (37 * Math.abs(currentShutterValue - lastShutterValue))
    }else {
        newPosition -= (37 * Math.abs(currentShutterValue - lastShutterValue))
    }
    containerStyle.backgroundPosition = '0px ' + newPosition + 'px'

    // changement de l image de font si le volet est totalement fermé
    if (currentSliderValue == maxSliderValue) {
        containerStyle.backgroundImage = "url('img/bgVoletClosed.png')"
    }else {
        containerStyle.backgroundImage = "url('img/bgVolet.png')"
    }

    //actualise la valeur du nb de volets actuels
    lastShutterValue = currentShutterValue
    
}

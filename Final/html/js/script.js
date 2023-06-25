let audio = document.querySelector("#myAudio")
let inputGroup = document.querySelectorAll(".form-control")
console.log(inputGroup);


function playAudio() {
    audio.play()
}


document.addEventListener("click",playAudio)


let user = {
    name : "Ramazan",
    surname : "Ruslan"
}
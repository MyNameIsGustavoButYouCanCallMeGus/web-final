document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  
  
  // Get the image element
var image = document.getElementById('animated-image');

// Set the target opacity
var targetOpacity = 1;

// Set the animation duration
var animationDuration = 500; // 0.5 seconds

// Set the number of animation steps
var numSteps = 60;

// Calculate the time interval between each step
var interval = animationDuration / numSteps;

// Set the initial opacity
var currentOpacity = 0;

// Set the initial step
var currentStep = 0;

// Start the animation
var animationInterval = setInterval(fadeImage, interval);

// Function to fade the image
function fadeImage() {
  // Increment the current step
  currentStep++;

  // Calculate the new opacity
  currentOpacity = currentStep / numSteps * targetOpacity;

  // Set the new opacity
  image.style.opacity = currentOpacity;


  // Stop the animation when reaching the target opacity
  if (currentStep >= numSteps) {
    clearInterval(animationInterval);
  }
}


let submitBtn = document.querySelector(".submit")
let InputArray = document.querySelectorAll(".form-control")
console.log(InputArray);
let userInfo = {}
submitBtn.addEventListener("click",saveInfo )
function saveInfo(e){
  e.preventDefault()
    userInfo = {
      name : InputArray[0].value,
      email: InputArray[1].value,
      message : InputArray[2].value,
  }
  console.log(userInfo);
}
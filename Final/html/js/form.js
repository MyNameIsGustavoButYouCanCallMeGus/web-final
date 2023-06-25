  document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service-select');
    const massageTypes = document.getElementById('massage-types');
    const spatreatmentsTypes = document.getElementById('spa treatments-types');
    const specialsrTypes = document.getElementById('specialsr-types');
  
    serviceSelect.addEventListener('change', function() {
      const selectedService = serviceSelect.value;
  
      // Hide all service type dropdowns
      massageTypes.style.display = 'none';
      spatreatmentsTypes.style.display = 'none';
      specialsrTypes.style.display = 'none';
  
      // Display the corresponding service type dropdown based on the selected service
      if (selectedService === 'massage') {
        massageTypes.style.display = 'block';
      } else if (selectedService === 'spa treatments') {
        spatreatmentsTypes.style.display = 'block';
      } else if (selectedService === 'specialsr') {
        specialsrTypes.style.display = 'block';
      }
    });
  });
  
  let submitBtn = document.querySelector(".submitBtn")
  let InputArray = document.querySelectorAll(".form-control")
  console.log(InputArray);
  let userInfo = {}
  submitBtn.addEventListener("click",saveInfo )
  function saveInfo(e){
    e.preventDefault()
      userInfo = {
        name : InputArray[0].value,
        email: InputArray[1].value,
        phone : InputArray[2].value,
        date : InputArray[3].value,
        time: InputArray[4].value
    }
    console.log(userInfo);
  }

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const serviceInput = document.getElementById("service-select");
  const massageInput = document.getElementById("massage-types");
  const spaInput = document.getElementById("spa treatments-types");
  const spserviceInput = document.getElementById("specialsr-types");

  const submitButton = document.getElementById("submit");
  
  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    if (nameInput.value && emailInput.value && phoneInput.value && dateInput.value && timeInput.value && serviceInput.value) {
      alert("Accepted");
    } else {
      alert("Please fill in all the fields");  
    }
  });

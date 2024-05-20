// Selección de elementos del DOM
const form = document.querySelector("form");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const genderInput = document.getElementById("genderInput");
const cityInput = document.getElementById("cityInput");
const submitButton = document.getElementById("submitButton");

// Función para validar el formulario al enviarlo
function validateForm(event) {
  let isValid = true;

  // Validación del campo de nombre
  if (nameInput.value.trim() === "") {
    alert("Por favor, ingrese un nombre.");
    isValid = false;
  } else {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      alert("El nombre debe contener solo caracteres alfabéticos.");
      isValid = false;
    }
  }

  // Validación del campo de edad
  if (ageInput.value < 1 || isNaN(ageInput.value)) {
    alert("Por favor, ingrese una edad válida.");
    isValid = false;
  }

  // Validación del campo de género
  if (genderInput.value.trim() === "") {
    alert("Por favor, ingrese un género.");
    isValid = false;
  } else {
    const genderRegex = /^[a-zA-Z\s]+$/;
    if (!genderRegex.test(genderInput.value.trim())) {
      alert("El género debe contener solo caracteres alfabéticos.");
      isValid = false;
    }
  }

  // Validación del campo de ciudad
  if (cityInput.value.trim() === "") {
    alert("Por favor, ingrese una ciudad.");
    isValid = false;
  } else {
    const cityRegex = /^[a-zA-Z\s]+$/;
    if (!cityRegex.test(cityInput.value.trim())) {
      alert("La ciudad debe contener solo caracteres alfabéticos.");
      isValid = false;
    }
  }

  // Evitar el envío del formulario si no es válido
  if (!isValid) {
    event.preventDefault();
  }
}

// Evento de escucha para la validación al enviar el formulario
form.addEventListener("submit", validateForm);

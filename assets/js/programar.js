// Selección de elementos del DOM
const form = document.getElementById("appointmentForm");
const reasonInput = document.getElementById("reasonInput");
const detailsInput = document.getElementById("detailsInput");
const dateInput = document.getElementById("dateInput");

// Función para validar el formulario al enviarlo
function validateForm(event) {
  let isValid = true;

  // Validación del campo de razón de la cita
  if (reasonInput.value.trim() === "") {
    alert("Por favor, ingrese la razón de la cita.");
    isValid = false;
  }

  // Validación del campo de detalles de la cita
  if (detailsInput.value.trim() === "") {
    alert("Por favor, ingrese los detalles de la cita.");
    isValid = false;
  }

  // Validación del campo de fecha de la cita
  if (dateInput.value.trim() === "") {
    alert("Por favor, seleccione una fecha para la cita.");
    isValid = false;
  }

  // Evitar el envío del formulario si no es válido
  if (!isValid) {
    event.preventDefault();
  }
}

// Evento de escucha para la validación al enviar el formulario
form.addEventListener("submit", validateForm);

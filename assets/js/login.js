// Selección de elementos del DOM
const $btnSignIn = document.querySelector(".sign-in-btn");
const $btnSignUp = document.querySelector(".sign-up-btn");
const $signUp = document.querySelector(".sign-up");
const $signIn = document.querySelector(".sign-in");
const $nameInput = document.getElementById("nameInput");
const $emailInput = document.getElementById("emailInput");
const $passwordInput = document.getElementById("passwordInput");
const $loginEmailInput = document.getElementById("loginEmailInput");
const $loginPasswordInput = document.getElementById("loginPasswordInput");
const $submitButtonSignUp = document.querySelector(
  '#registerForm button[type="submit"]'
);
const $submitButtonSignIn = document.querySelector(
  '#loginForm button[type="submit"]'
);

// Evento click para cambiar entre secciones de inicio de sesión y registro
document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
  }
});

// Validación de formulario de registro al hacer clic en el botón de registro
$submitButtonSignUp.addEventListener("click", (e) => {
  const nameValue = $nameInput.value;
  const emailValue = $emailInput.value;
  const passwordValue = $passwordInput.value;

  if (nameValue === "" || emailValue === "" || passwordValue === "") {
    alert("Por favor, llene todos los campos.");
    e.preventDefault();
  } else if (!emailValue.includes("@")) {
    alert("Ingrese un correo electrónico válido.");
    e.preventDefault();
  } else if (nameValue.match(/\d+/)) {
    alert("El nombre no debe contener números.");
    e.preventDefault();
  }
});

// Validación de formulario de inicio de sesión al hacer clic en el botón de inicio de sesión
$submitButtonSignIn.addEventListener("click", (e) => {
  const emailValue = $loginEmailInput.value;
  const passwordValue = $loginPasswordInput.value;

  if (emailValue === "" || passwordValue === "") {
    alert("Por favor, llene todos los campos.");
    e.preventDefault();
  } else if (!emailValue.includes("@")) {
    alert("Ingrese un correo electrónico válido.");
    e.preventDefault();
  }
});


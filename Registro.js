// Inputs
const correoInput = document.getElementById('correo');
const passwordInput = document.getElementById('password');
const correoMsg = document.getElementById('correo-msg');

// Creamos el span de validación para la contraseña
const passwordMsg = document.createElement('span');
passwordMsg.id = 'password-msg';
passwordMsg.className = 'validation-msg';
passwordInput.parentElement.appendChild(passwordMsg);

// Validación correo en tiempo real
correoInput.addEventListener('input', () => {
  const email = correoInput.value;
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (email === '') {
    correoMsg.textContent = '';
    correoMsg.className = 'validation-msg';
  } else if (regex.test(email)) {
    correoMsg.textContent = '✓';
    correoMsg.className = 'validation-msg valid';
  } else {
    correoMsg.textContent = 'Correo inválido';
    correoMsg.className = 'validation-msg invalid';
  }
});


// Evaluación de contraseña en tiempo real
passwordInput.addEventListener('input', () => {
  const pass = passwordInput.value;

  const hasLower = /[a-z]/.test(pass);
  const hasUpper = /[A-Z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSymbol = /[\W_]/.test(pass);
  const length = pass.length;

  if (length === 0) {
    passwordMsg.textContent = '';
    passwordMsg.className = 'validation-msg';
  } else if (length < 6 || /^[a-zA-Z]+$/.test(pass)) {
    passwordMsg.textContent = 'Débil';
    passwordMsg.className = 'validation-msg invalid';
  } else if (length >= 6 && hasLower && hasNumber && !hasUpper && !hasSymbol) {
    passwordMsg.textContent = 'Media';
    passwordMsg.className = 'validation-msg medium';
  } else if (length >= 8 && hasLower && hasUpper && hasNumber && !hasSymbol) {
    passwordMsg.textContent = 'Buena';
    passwordMsg.className = 'validation-msg good';
  } else if (length >= 8 && hasLower && hasUpper && hasNumber && hasSymbol) {
    passwordMsg.textContent = 'Alta';
    passwordMsg.className = 'validation-msg valid';
  } else {
    passwordMsg.textContent = 'Media';
    passwordMsg.className = 'validation-msg medium';
  }
});

// Mostrar/ocultar contraseña
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye-slash");
});

// Animación de salida al iniciar sesión
document.querySelector('.btn-link').addEventListener('click', function (e) {
  e.preventDefault();
  const form = document.querySelector('.form-container');
  form.classList.add('fade-out-Right');
  form.addEventListener('animationend', function () {
    window.location.href = 'inicio.html';
  }, { once: true });
});

// Validación final al enviar
const form = document.querySelector('#registroForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = form.querySelector('#nombre').value.trim();
  const correo = form.querySelector('#correo').value.trim();
  const password = form.querySelector('#password').value.trim();
  const terminos = form.querySelector('#terminos').checked;

  const correoValido = correoMsg.classList.contains('valid');
  const passwordValido = passwordMsg.classList.contains('valid');

  if (!nombre) {
    alert('Debe rellenar el campo Nombre completo');
    return;
  }
  if (!correoValido) {
    alert('Ingrese un correo electrónico válido');
    return;
  }
  if (!passwordValido) {
    alert('La contraseña no cumple los requisitos');
    return;
  }
  if (!terminos) {
    alert('Debe aceptar los términos y condiciones');
    return;
  }

  alert('Formulario enviado correctamente.');
  // form.submit(); // Descomentar para envío real
});
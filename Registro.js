// Inputs
const correoInput = document.getElementById('correo'); // Obtiene el input de correo
const passwordInput = document.getElementById('password'); // Obtiene el input de contraseña
const correoMsg = document.getElementById('correo-msg'); // Obtiene el span de validación de correo

// Creamos el span de validación para la contraseña
const passwordMsg = document.createElement('span'); // Crea un elemento span
passwordMsg.id = 'password-msg'; // Asigna id al span
passwordMsg.className = 'validation-msg'; // Asigna clase al span
passwordInput.parentElement.appendChild(passwordMsg); // Agrega el span al grupo de contraseña

// Validación correo en tiempo real
correoInput.addEventListener('input', () => { // Escucha cambios en el input de correo
  const email = correoInput.value; // Obtiene el valor del correo
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Expresión regular para validar email

  if (email === '') { // Si el campo está vacío
    correoMsg.textContent = ''; // Limpia el mensaje
    correoMsg.className = 'validation-msg'; // Restaura la clase
  } else if (regex.test(email)) { // Si el correo es válido
    correoMsg.textContent = '✓'; // Muestra tilde
    correoMsg.className = 'validation-msg valid'; // Clase para válido
  } else { // Si el correo es inválido
    correoMsg.textContent = 'Correo inválido'; // Mensaje de error
    correoMsg.className = 'validation-msg invalid'; // Clase para inválido
  }
});

// Evaluación de contraseña en tiempo real
passwordInput.addEventListener('input', () => { // Escucha cambios en el input de contraseña
  const pass = passwordInput.value; // Obtiene el valor de la contraseña

  const hasLower = /[a-z]/.test(pass); // Verifica si tiene minúsculas
  const hasUpper = /[A-Z]/.test(pass); // Verifica si tiene mayúsculas
  const hasNumber = /[0-9]/.test(pass); // Verifica si tiene números
  const hasSymbol = /[\W_]/.test(pass); // Verifica si tiene símbolos
  const length = pass.length; // Obtiene la longitud de la contraseña

  if (length === 0) {
    passwordMsg.textContent = ''; // Limpia el mensaje si no hay contraseña
    passwordMsg.className = 'validation-msg'; // Restaura la clase
  } else if (length < 6 || /^[a-zA-Z]+$/.test(pass)) {
    passwordMsg.textContent = 'Débil'; // Mensaje de contraseña débil
    passwordMsg.className = 'validation-msg invalid'; // Clase para inválido
  } else if (length >= 6 && hasLower && hasNumber && !hasUpper && !hasSymbol) {
    passwordMsg.textContent = 'Media'; // Mensaje de contraseña media
    passwordMsg.className = 'validation-msg medium'; // Clase para media
  } else if (length >= 8 && hasLower && hasUpper && hasNumber && !hasSymbol) {
    passwordMsg.textContent = 'Buena'; // Mensaje de contraseña buena
    passwordMsg.className = 'validation-msg good'; // Clase para buena
  } else if (length >= 8 && hasLower && hasUpper && hasNumber && hasSymbol) {
    passwordMsg.textContent = 'Alta'; // Mensaje de contraseña alta
    passwordMsg.className = 'validation-msg valid'; // Clase para válido
  } else {
    passwordMsg.textContent = 'Media'; // Mensaje de contraseña media por defecto
    passwordMsg.className = 'validation-msg medium'; // Clase para media
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
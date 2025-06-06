// ---------- Validación en tiempo real ----------
const correoInput = document.getElementById('correo');
const passwordInput = document.getElementById('password');
const correoMsg = document.getElementById('correo-msg');
const passwordMsg = document.getElementById('password-msg');

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

passwordInput.addEventListener('input', () => {
  const pass = passwordInput.value;
  if (pass === '') {
    passwordMsg.textContent = '';
    passwordMsg.className = 'validation-msg';
  } else if (pass.length >= 6) {
    passwordMsg.textContent = '✓';
    passwordMsg.className = 'validation-msg valid';
  } else {
    passwordMsg.textContent = 'Mín. 6 caracteres';
    passwordMsg.className = 'validation-msg invalid';
  }
});

// ---------- Mostrar/ocultar contraseña ----------
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

// ---------- Animación al hacer clic en "Iniciar Sesión" ----------
document.querySelector('.btn-link').addEventListener('click', function(e) {
  e.preventDefault();
  const form = document.querySelector('.form-container');
  form.classList.add('fade-out-Right');
  form.addEventListener('animationend', function() {
    window.location.href = 'inicio.html';
  }, { once: true });
});

// ---------- Validación final al crear cuenta ----------
const form = document.querySelector('.form-container');
const btn = form.querySelector('.btn');

btn.addEventListener('click', function(e) {
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
    alert('La contraseña debe tener al menos 6 caracteres');
    return;
  }
  if (!terminos) {
    alert('Debe aceptar los términos y condiciones');
    return;
  }

  alert('Formulario enviado correctamente.');
  // form.submit(); // Descomentar si querés enviar el formulario real
});
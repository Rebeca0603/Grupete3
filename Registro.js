    // Selecciona el enlace con la clase 'btn-link' (Iniciar Sesión)
    document.querySelector('.btn-link').addEventListener('click', function(e) {
    // Previene el comportamiento por defecto del enlace (no navega inmediatamente)
    e.preventDefault();
    // Selecciona el contenedor del formulario
    const form = document.querySelector('.form-container');
    // Agrega la clase de animación de salida al formulario
    form.classList.add('fade-out-Right');
    // Cuando termina la animación, redirige a la página de registro  
    form.addEventListener('animationend', function() {
      window.location.href = 'inicio.html';
    }, { once: true }); // El evento se ejecuta solo una vez
    });

    // Selecciona el formulario (form-container)
    const form = document.querySelector('.form-container');
    // Selecciona el botón de crear cuenta
    const btn = form.querySelector('.btn');

    // Escucha el evento click del botón
    btn.addEventListener('click', function(e) {
    // Evita el envío automático del formulario
    e.preventDefault();

    // Obtiene los valores de los campos requeridos
    const nombre = form.querySelector('#nombre').value.trim();
    const correo = form.querySelector('#correo').value.trim();
    const password = form.querySelector('#password').value.trim();
    const terminos = form.querySelector('#terminos').checked;

    // Verifica cada campo y muestra una alerta si está vacío o no marcado
    if (!nombre) {
      alert('Debe rellenar el campo Nombre completo');
      return;
    }
    if (!correo) {
      alert('Debe rellenar el campo Correo electrónico');
      return;
    }
    if (!password) {
      alert('Debe rellenar el campo Contraseña');
      return;
    }
    if (!terminos) {
      alert('Debe aceptar los términos y condiciones');
      return;
    }

    // Si todo está correcto, puedes enviar el formulario aquí
    // form.submit();
  });
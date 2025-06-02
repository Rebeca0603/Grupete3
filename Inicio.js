    // Selecciona el enlace con la clase 'btn-link' (Crear Cuenta)
    document.querySelector('.btn-link').addEventListener('click', function(e) {
    // Previene el comportamiento por defecto del enlace (no navega inmediatamente)
    e.preventDefault();
    // Selecciona el contenedor del formulario
    const form = document.querySelector('.form-container');
    // Agrega la clase de animación de salida al formulario
    form.classList.add('fade-out-Left');
    // Cuando termina la animación, redirige a la página de registro
    form.addEventListener('animationend', function() {
      window.location.href = 'Registro.html';
    }, { once: true }); // El evento se ejecuta solo una vez
    });
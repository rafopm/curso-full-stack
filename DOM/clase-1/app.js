const form = document.getElementById('saludoForm')
const mensajeDiv = document.getElementById('saludoMensaje')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nombreDelUsuario = document.getElementById('nombre').value;

    const mensaje = `¡Hola , ${nombreDelUsuario}! ¡Bienvenido/a! `

    mensajeDiv.textContent = mensaje

});
// Eventos del DOM - submit o envío de formularios

const form = document.querySelector('#formulario')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputNombre = document.querySelector('#nombre').value
    const inputPassword = document.querySelector('#password').value
    if (inputNombre === '' || inputPassword === '')
        console.log('Todos los campos son obligatorios')
    else {
        console.log('Datos validados correctamente. Enviando')
        console.log('Formulario enviado')
    }
})
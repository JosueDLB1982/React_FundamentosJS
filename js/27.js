// Generar código HTML desde JavaScript

const form = document.querySelector('#formulario')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputNombre = document.querySelector('#nombre').value
    const inputPassword = document.querySelector('#password').value
    
    const advanceAlert = document.querySelector('.alerta') // Para que el mensaje de error no pueda repetirse en el HTML
    if(advanceAlert){
        advanceAlert.remove() // Remueve el mensaje de error anterior para luego escribirlo
    }
    
    const alert = document.createElement('DIV')
    alert.classList.add('alerta')

    if (inputNombre === '' || inputPassword === ''){
        alert.textContent = 'Todos los campos son obligatorios'
        alert.classList.add('error')
        setTimeout(() => { // Lo hice para que recargue la página si hay un error
            location.reload()
        }, 1000)
    }else {
        alert.textContent = 'Datos validados correctamente. Enviado'
        alert.classList.add('exito')
    }
    form.appendChild(alert)
})
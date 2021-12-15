// Eventos del DOM - Input

const inputNombre = document.querySelector('#nombre')
// inputNombre.addEventListener('input', () => {
//     console.log('Has colocado información dentro del input')
//     console.log(`Has escrito: ${inputNombre.value}`)

inputNombre.addEventListener('input', (event) => { // Modo recomendado, leer el evento propiamente dicho
    console.log('Has colocado información dentro del input')
    console.log(`Has escrito: ${event.target.value}`)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', () => {
    inputPassword.type = 'text'
    setTimeout(() => { // retrasa la ejecución el tiempo que le digamos. 
        inputPassword.type = 'password'
    }, 250)
})
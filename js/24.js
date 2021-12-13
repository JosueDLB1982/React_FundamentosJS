// 
const heading = document.querySelector('#heading')
heading.textContent = 'Probando el DOM / Modificando el HTML desde JavaScript'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'
console.log(inputNombre)
console.log(inputNombre.textContent)

const links = document.querySelectorAll('.navegacion a')
console.log(links)
links.forEach((link) => link.textContent = 'Nuevo enlace')
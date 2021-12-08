// Operaciones en Arrays

const technologies = [
    'HTML',
    'Javascript',
    'Python',
    'Java',
    'CSS'
]

// Añadir elementos al array
//technologies.push('React') // añade un elemento al fianl del array
//console.table(technologies)
//technologies.unshift('Node.js') // Añade elementos al inicio del array
//console.table(technologies)

/* PERO EN REACT NO SE TRABAJA ASÍ: EN SU LUGAR SE DEBE HACER */
// const newTechnologies = ['Node.js', ...technologies, 'React'] // Esta es la forma correcta de hacerlo en React
// console.table(newTechnologies)

// Eliminar elementos del array
//technologies.pop() // Elimina el último elemento del array
// console.table(technologies)
// technologies.shift() // Elimina el primer elemento del array
// console.table(technologies)
// technologies.splice(1,1) // elimina elementos en cualquier posición. El primer parámetro indica donde empieza a eliminar, el segundo indica cuantos elementos a partir de allí.
console.table(technologies)

/* CÓMO HACERLO EN REACT */
// const newArray = technologies.filter((tech) => {
//     retur (tech !== 'HTML') && (tech !== 'Python')
// })
/* retornamos en un nuevo array todo excepto lo dicen las condiciones, en este caso, HTML y Python. Adiconalmente, podemos hacer un return implicito eliminando las llaves y colocando la función en una sola línea. Así ahorramos código */

// const newArray = technologies.filter((tech) => (tech !== 'HTML') && (tech !== 'Python'))
// console.table(newArray)

/* Reemplazar elementos del array */

const newTechnologies = technologies.map(tech => { // Como solo paso el parámetro tech, no necesito meterlo entre ()
    if (tech === 'Python') return 'Node.js'
    else return tech
})
console.table(newTechnologies)

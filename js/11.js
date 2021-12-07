// Iteradores en JS

const technologies = [
    'HTML',
    'Javascript',
    'Python',
    'Java',
    'CSS'
]

// forEach se ejecuta una vez por cada elemento del array
const arrayForEach = technologies.forEach((tech) => tech)
    //console.log(tech)
    
// map crea una copia del array añadiendo la condicion que le demos
const arrayMap = technologies.map((tech) => tech)

console.log(arrayForEach)
console.log(arrayMap)
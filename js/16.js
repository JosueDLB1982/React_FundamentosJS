// otros array methods

const technologies = ['HTML', 'Javascript', 'Python', 'Java', 'CSS']

const numbers = [10, 20, 30]

let newArrayTechnologies

//filter
newArrayTechnologies = technologies.filter(tech => (tech !== 'HTML') && (tech !== 'Python'))

console.table(newArrayTechnologies)
console.log(numbers)

const result = technologies.includes('Node.js') // comprobar si un elemento existe dentro del array
console.log(result)

// indica si al menos uno de los elementos del array cumple con la condición dada
const result2 = numbers.some(number => number > 15)
console.log(result2)

// retorna el primer elemento del array que cumpla con la condición
const result3 = numbers.find(number => number > 15)
console.log(result3)

// retorna un booleano si todos los elementos cumplen la condición
const result4 = numbers.every(number => number > 15)
console.log(result4)

// reduce todos los elementos a sólo uno. Puedo añadir un tercer parámetro indicando desde que número debe comenzar
const result5 = numbers.reduce((total, accumulated)=> total + accumulated) // total y acumulado, puedo usar a y b
console.log(result5)

// filter crea un nuevo array en base a una condición
const result6 = numbers.filter(number => number > 15)
console.log(result6)

numbers.forEach(number => console.log(number))



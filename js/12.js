// Funciones

// const addition = ((numberA, numberB) => {
//     const result = (numberA +numberB)
//     return result
// })
// console.log(addition(1,2))

// const addition = ((numberA, numberB) => {
//     return numberA + numberB
// })
// const result = addition(1,2)
// console.log(result)

// const addition = ((numberA, numberB) => {
//     return [numberA + numberB, 'Hola Josue. estamos haciendo destructuring en el return']
// })
// const [result, mensaje] = addition(1,2) // array destructuring. Esto será muy común al ver hooks en React. useState
// console.log(`La suma da: ${result}`)
// console.log(mensaje)

// retornar objeto
const addition = ((numberA = 0, numberB = 0) => { // parámetro por defecto, en caso de no pasar nada, toma ese.
    return {
        result: numberA + numberB,
        message: 'Hola Josue. estamos haciendo destructuring en el return'
    }
})
const {result, message} = addition(1,2) // destructuring de objeto
console.log(result) // imprimo result
console.log(message) // imprimo el mensaje
/* 
    Tipos de datos
*/

// Undefined valor no definido
let cliente
console.log(cliente)
console.log(typeof cliente)
cliente = 20
console.log(cliente)
console.log(typeof cliente)
cliente = 'Josue Lopez'
console.log(cliente)
console.log(typeof cliente)
cliente = true
console.log(cliente)
console.log(typeof cliente)

// boolean verdadero o falso
const descuento = true
console.log(descuento)
console.log(typeof descuento)

// number incluye todo tipo de números 
const number1 = 20.14
const number2 = 7
const number3 = -10
console.log(number1)
console.log(number3)
console.log(number3)
console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)

// strings o cadenas de texto. Siempre van entre comillas
const estudiante = 'Josue Lopez'
console.log(typeof estudiante)
console.log(`el nombre del estudiante es ${estudiante}`)

// coerción. Cambiar los tipos de datos de una variable
const number4 = '10'
const number5 = 20
console.log(typeof number4)
console.log(typeof number5)
console.log(number4 + number5)
console.log(Number(number4) + number5) // lo convertimos en número corecionando
const number6 = '30'
const number7 = 40
console.log(typeof number6)
console.log(typeof number7)
console.log(typeof Number(number6)) // coercionando cambiamos el tipo de dato
console.log(typeof String(number7))

//symbol los simbolos son únicos, aunque su valor sea el mismo
const firstSymbol = Symbol(30)
const secondSymbol = Symbol(30)
console.log(firstSymbol === secondSymbol)
console.log(firstSymbol.valueOf()) // a pesar de tener el mismo valor, el sistema los considera diferentes
console.log(secondSymbol.valueOf()) // es una caracteristica del dato tipo Symbol.



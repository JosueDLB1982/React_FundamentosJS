// Import y Export

import {sum as sumar, subtraction} from "./functions.js" // Así puedo asignar un alias al nombre de la función
const resultSum = sumar(2, 3) // invocamos la función con el alias que le dimos en el destructuring
const resultSubtraction = subtraction(15, 7)
console.log(`La suma da: ${resultSum}`)
console.log(`La resta da ${resultSubtraction}`)

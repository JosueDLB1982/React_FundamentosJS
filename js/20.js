// Operador ternario
/*  ! niega la condición o estado */

const autenticado = true
autenticado ? console.log('Usuario autenticado') : console.log('No autenticado. Dirijase al login')

// Doble ternario
const efectivo = 900
const pagar = 800
const tarjeta = true    

efectivo > pagar ? console.log('Puedes pagar en efectivo') : tarjeta ? console.log('Puedes pagar con debito') : console.log('No tienes como pagar')
// Objetos
const nombreProducto = 'Tablet'
const precioProducto = 300
const disponibilidadProducto = true
console.log(nombreProducto)
console.log(precioProducto)
console.log(disponibilidadProducto)

const producto = {
    nombre: 'Tablet', // key: value llave:valor así se rellenan las propiedades de objetos
    precio: 300,
    disponibilidad: true
}
console.log(producto)
console.table(producto)

const {nombre, precio, disponibilidad} = producto // destructuring
console.log(nombre, precio, disponibilidad)

// Object literal Enhacement mejora del objeto literal, meter dentro de un objeto variables ya creadas. Es como la inversa del destructuring
const user= 'Josue Lopez'
const authenticated = true

const users = { // de este modo metemos dentro del objeto users la variables anteriormente creadas.
    // user: user,
    // authenticated: authenticated
    user,
    authenticated // si el key y el value son iguales se puede dejar sólo una vez
}
console.table(users)
// Destructuring con 2 o mas objetos con propiedades similares o iguales

const product = {
    name: 'Tablet',
    price: 300,
    availability: true
}

const product2 = {
    name: 'Monitor curvo',
    price: 450,
    availability: true
}

// const {name, price, availability} = product /* aplicando destructuring */
// const {name, price, availability} = product2

/* Si yo quisera dar log a alguno de los productos o ambos, me daría error, porque los nombres de las variables (propiedades de objeto o keys) son iguales */
// console.log(product2)
/* Entonces lo que hacemos es colocar un alias a la propiedad, para poder imprimir todos los resultados */
const {name, price, availability} = product /* aplicando destructuring */
const {name: name2, price: price2, availability: availability2} = product2
console.log(name, price, availability)
console.log(name2, price2, availability2)

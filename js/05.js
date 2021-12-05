const product = {
    name: 'Tablet',
    price: 300,
    availability: true
}
console.table(product)

// Object.freeze(product) // restringe el poder hacer cualquier cambio en el objeto una vez creado
// Object.seal(product) // permite cambiar los value de las key, pero no añadir ni eliminar keys

product.name = 'Monitor curvo' // reescribir un valor, o cambiar el value del key
const {name} = product
console.log(name)

product.priceMember = 290 // incorporacion de nueva propiedad de objeto key:value
console.table(product)

delete product.priceMember // eliminar propiedad de objeto
console.table(product)

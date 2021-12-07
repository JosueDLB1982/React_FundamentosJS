// Unir dos o mas objetos

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

const products = {
    product: {...product},
    product2: {...product2}
}
console.log(products)
// Fetch API - async await (Multiples llamados)

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/users'
const url3 = 'https://jsonplaceholder.typicode.com/posts'
const url4 = 'https://jsonplaceholder.typicode.com/photos'

const multipleQuery = async(consult1, consult2) => {
    const [res1, res2] = await Promise.all([fetch(consult1), fetch(consult2)]) // llamada multiple. Se hace una llamada simultanea a ambas consultas
    const result1 = await res1.json() // cada una respondera en su tiempo
    const result2 = await res2.json() // pero inician igual las peticiones
    result1.forEach(data => console.log(data)) // recorro el array de la primera consulta e imprimo los datos
    result2.forEach(data => console.log(data)) // recorro el array de la segunda consulta e imprimo los datos
}
multipleQuery(url, url3)
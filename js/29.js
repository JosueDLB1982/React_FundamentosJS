// Fetch API y Promises

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/users'
const url3 = 'https://jsonplaceholder.typicode.com/posts'

const consultAPI = ((consult) => {
    fetch(consult)
    .then(res => res.json())
    .then(res => res.forEach(data => console.log(data)))
})
consultAPI(url3)
// querySelectorAll

const links = document.querySelectorAll('.navegacion a')
console.log(links)
console.log(links[3].textContent)
links.forEach((link) => {console.log(link.textContent)})
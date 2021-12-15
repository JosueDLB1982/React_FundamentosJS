// Eventos del DOM - Click

const heading = document.querySelector('#heading')
heading.addEventListener('click',() => {
    heading.textContent = 'Eventos del DOM - Click'
    console.log('Diste click en el heading')
})

const links = document.querySelectorAll('.navegacion a')
i=0
links.forEach((link) => {
    link.addEventListener('click',() => {
        i++
        link.textContent = ` Hiciste click en un ${i}° enlace `
    })
})


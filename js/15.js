// metodos de los array aplicados a arrow function

const technologies = [
    'HTML',
    'Javascript',
    'Python',
    'Java',
    'CSS'
]

const newTechnologies = technologies.map(tech => {// Como solo paso el parámetro tech, no necesito meterlo entre ()
    if (tech === 'Python') return 'Node.js'
    else return tech
})

const newArrayTechnologies = technologies.filter(tech => (tech !== 'HTML') && (tech !== 'Python')) /*me devuelve lo que sea diferente de HTML y de Python. Como hay una sola instrucciṕon despues de la flecha, puedo prescindir de las {} y se aplica un return implícito */


//console.table(newTechnologies)
console.table(newArrayTechnologies)


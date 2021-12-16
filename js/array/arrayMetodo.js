const pilotos = ['Diogo', 'Lucas', 'Pedro', 'Carlos']
pilotos.pop() // Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Pedro') // adiciona elemento na ultima posição 
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Marcos') // Adiciona eleemnto na primeira posição
console.log(pilotos)

// splice pode adicionar ou remover elemento

//adicionar
pilotos.splice(2, 0, 'Maria', 'Joana') 
console.log(pilotos)

//remover
pilotos.splice(3, 1) 
console.log(pilotos)

const pilotosTop = pilotos.slice(2)
console.log(pilotosTop)

const pilotosTop1 = pilotos.slice(1, 4)
console.log(pilotosTop1)




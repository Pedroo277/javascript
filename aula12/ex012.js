let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom Dia!')
}
else if (hora > 17) {
    console.log ('Boa Noite!')
}
else {
    console.log ('Boa Tarde!')
}

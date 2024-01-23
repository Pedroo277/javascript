var idade = 22
console.log(`Você tem ${idade} anos de idade, sua categoria de especificação de voto é:`)
if (idade < 16) {
    console.log('Não vota')
} else if(idade < 18 || idade > 65) {
        console.log('Voto opcional')
    }
else {
    console.log('Voto obrigatório')
}
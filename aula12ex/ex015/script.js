function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src', 'ocrianca.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'ojovem.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'adulto.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'idoso.png')
                }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'acrianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'ajovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
function clicar(){

    /* Variáveis */    

    const ano = document.getElementById('ano')
    const masc = document.getElementById('m').checked
    const fem = document.getElementById('f').checked

    /* Cálculo de idade */

    const idade =  2024 - Number(ano.value) 
    
    /* Para ver se está tudo ok */
    if (!ano || (!masc && !fem)){
        window.alert('Por favor. Preencha todos os campos!')
        return
    }
    /* varíaveis para estilo e estilo das mesmas*/
    
    const imagem = document.getElementById('img')
    const conteiner = document.getElementById('divprinc')
    const conteiner2 = document.getElementsByClassName('conteiner_resultado')[0]
    const resultado = document.getElementById('res')
    conteiner.style.height = '400px'
    imagem.style.display = 'block'
    conteiner2.style.display = 'flex'
    conteiner2.style.fontSize = '1.6rem'

    /* resultado e geração de imagem */

    if (idade < 5){
        resultado.innerHTML = `Você é um bebê de ${idade} anos`
        imagem.style.background = 'url(img/bebe.jpg)'
        imagem.style.backgroundPosition = 'center center'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 13 && fem){
        resultado.innerHTML = `Você é uma menina de ${idade} anos`
        imagem.style.background = 'url(img/mulher-criança.jpg)'
        imagem.style.backgroundPosition = 'center top'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 13 && masc){
        resultado.innerHTML = `Você é um menino de ${idade} anos`
        imagem.style.background = 'url(img/homem-criança.jpg)'
        imagem.style.backgroundPosition = '90% center'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 18 && fem){
        resultado.innerHTML = `Você é uma garota de ${idade} anos`
        imagem.style.background = 'url(img/mulher-adolescente.jpg)'
        imagem.style.backgroundPosition = 'center top'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 18 && masc){
        resultado.innerHTML = `Você é um garoto de ${idade} anos`
        imagem.style.background = 'url(img/homem-adolescente.jpg)'
        imagem.style.backgroundPosition = 'right top'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 45 && fem){
        resultado.innerHTML = `Você é um mulher de ${idade} anos`
        imagem.style.background = 'url(img/mulher-adulta.jpg)'
        imagem.style.backgroundPosition = 'right top'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade < 50 && masc){
        resultado.innerHTML = `Você é um homem de ${idade} anos`
        imagem.style.background = 'url(img/homem-adulto.jpg)'
        imagem.style.backgroundPosition = 'right top'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade > 50 && fem){
        resultado.innerHTML = `Você é uma idosa de ${idade} anos`
        imagem.style.background = 'url(img/mulher-idosa.jpg)'
        imagem.style.backgroundPosition = 'right center'
        imagem.style.backgroundSize = 'cover'
    }
    else if(idade > 50 && masc){
        resultado.innerHTML = `Você é um idoso de ${idade} anos`
        imagem.style.background = 'url(img/homem-idoso.jpg)'
        imagem.style.backgroundPosition = 'right top'
        imagem.style.backgroundSize = 'cover'
    }
}

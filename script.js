let frase
let fraseGerada
let ultimaFrase = 0

function namorilson(){
    document.getElementById("fraseRandom").innerHTML = ``
    frase = Math.ceil(Math.random() * 10)

    while(frase === ultimaFrase){
        frase = Math.ceil(Math.random() * 10)
    }

    if(frase === 1){
        fraseGerada = `❤️ Você transformou meus dias comuns em momentos inesquecíveis. Feliz Dia dos Namorados!`
    }
    else if(frase === 2){
        fraseGerada = `🌹 Amar você é a melhor parte da minha vida. Hoje e sempre.`
    }
    else if(frase === 3){
        fraseGerada = `💕 Entre todos os caminhos que eu poderia seguir, o melhor foi aquele que me levou até você.`
    }
    else if(frase === 4){
        fraseGerada = `✨ Seu sorriso é o meu lugar favorito no mundo.`
    }
    else if(frase === 5){
        fraseGerada = `❤️ Ao seu lado, cada dia é uma nova razão para agradecer pelo amor.`
    }
    else if(frase === 6){
        fraseGerada = `🌷 Não importa o tempo que passe, meu coração continua escolhendo você todos os dias.`
    }
    else if(frase === 7){
        fraseGerada = `💖 Você é meu presente, minha paz e minha felicidade. Feliz Dia dos Namorados!`
    }
    else if(frase === 8){
        fraseGerada = `🌹 Nosso amor é a prova de que as melhores histórias são escritas a dois.`
    }
    else if(frase === 9){
        fraseGerada = `✨ Que nunca nos faltem carinho, cumplicidade e motivos para sorrir juntos.`
    }
    else if(frase === 10){
        fraseGerada = `❤️ Eu te amo não apenas pelo que você é, mas pelo que me torno quando estou com você.`
    }

    document.getElementById("fraseRandom").innerHTML = `<p>${fraseGerada}</p>`
    ultimaFrase = frase


}

const imagens = document.querySelectorAll(".img-clicavel")
const overlay = document.getElementById("overlay")
const imagemGrande = document.getElementById("imagemGrande")

imagens.forEach(img => {
    img.addEventListener("click", () => {
        imagemGrande.src = img.src
        overlay.style.display = "flex"
    })
})

overlay.addEventListener("click", () => {
    overlay.style.display = "none"
})
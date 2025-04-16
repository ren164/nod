let intervalo
let texto = document.getElementById("contador")

function iniciarContagem() {
    clearInterval(intervalo)

    let campoData = document.getElementById("dataEvento")
    let dataEscolha = campoData.value
    
    if(!dataEscolha){
        texto.innerText = "Escolha uma data"
    }
    let data = new Date (dataEscolha+ "T00:00:00")

    intervalo = setInterval(function() {
        atualizarContagem(data)
    },  1000)
}

function atualizarContagem(dataFutura) {
    let agora = new Date()
    let diferenca = dataFutura - agora
    if (diferenca<= 0){
        clearInterval(intervalo)
        texto.innerText="o tempo acabou"
    }
    let dias = Math.floor(diferenca / (1000*60*60*24))
    let horas = Math.floor((diferenca % (1000*60*60*24)) / (1000*60*60))
    let minutos = Math.floor((diferenca % (1000*60*60)) / (1000*60))
    let segundos = Math.floor((diferenca % (1000*60)) / 1000) 

    texto.innerText = `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}
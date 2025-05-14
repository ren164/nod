const perguntas = [
    {
        pergunta: "Quanto é 15 + 27?",
        opcoes: ["40", "42", "45", "38"],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 8 × 7?",
        opcoes: ["54", "56", "58", "52"],
        correta: 1
    },
    {
        pergunta: "Se x + 5 = 12, qual é o valor de x?",
        opcoes: ["5", "6", "7", "8"],
        correta: 2
    },
    {
        pergunta: "Qual é a raiz quadrada de 64?",
        opcoes: ["6", "7", "8", "9"],
        correta: 2
    },
    {
        pergunta: "Quanto é 144 ÷ 12?",
        opcoes: ["10", "11", "12", "13"],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado de 3² + 4²?",
        opcoes: ["23", "24", "25", "26"],
        correta: 2
    },
    {
        pergunta: "Se um triângulo tem base 6 e altura 8, qual é sua área?",
        opcoes: ["20", "24", "28", "32"],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 100 - 37?",
        opcoes: ["61", "62", "63", "64"],
        correta: 2
    },
    {
        pergunta: "Se 2x = 18, qual é o valor de x?",
        opcoes: ["7", "8", "9", "10"],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado de 5! (fatorial de 5)?",
        opcoes: ["100", "110", "120", "130"],
        correta: 2
    }
]

let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", ()=>selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice){
    opcaoSelecionada = indice
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i)=>{
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}
function mostrarPontuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", ()=>{
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    }else{
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual< perguntas.length){
        mostrarPergunta()
    }else{
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", ()=>{
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
mostrarPergunta()
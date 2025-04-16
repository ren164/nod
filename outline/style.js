let jogadorescolha = 0
let jogadorpontos = 0
let computadorescolha = 0
let computadorpontos = 0
let ganhador = -1

function jogar(escolha) {
    jogadorescolha = escolha
    computadorescolha = Math.floor(Math.random()*(3-1+1))+1
    if(jogadorescolha == 1 && computadorescolha ==1){
        ganhador  =0
    } else if (jogadorescolha == 1 && computadorescolha == 2){
        ganhador = 2
    } else if (jogadorescolha == 1 && computadorescolha == 3){
        ganhador = 1
    } else if (jogadorescolha == 2 && computadorescolha == 1){
        ganhador = 1
    } else if (jogadorescolha == 2 && computadorescolha == 2){
        ganhador = 0
    } else if (jogadorescolha == 2 && computadorescolha == 3){
        ganhador = 2
    } else if (jogadorescolha == 3 && computadorescolha == 1){
        ganhador = 2
    } else if (jogadorescolha == 3 && computadorescolha == 2){
        ganhador = 1
    } else if (jogadorescolha == 3 && computadorescolha == 3){
        ganhador = 0
    }


let jogadorescolha1 = document.getElementById("jogadorescolha1")
let jogadorescolha2 = document.getElementById("jogadorescolha2")
let jogadorescolha3 = document.getElementById("jogadorescolha3")
let computadorescolha1 = document.getElementById("computadorescolha1")
let computadorescolha2 = document.getElementById("computadorescolha2")
let computadorescolha3 = document.getElementById("computadorescolha3")

jogadorescolha1.classList.remove('selecionado')
jogadorescolha2.classList.remove('selecionado') 
jogadorescolha3.classList.remove('selecionado')
computadorescolha1.classList.remove('selecionado')
computadorescolha2.classList.remove('selecionado')
computadorescolha3.classList.remove('selecionado')

document.getElementById("jogadorescolha" + jogadorescolha).classList.add('selecionado')
document.getElementById("computadorescolha" + computadorescolha).classList.add('selecionado')

let mensagem = document.getElementById("mensagem")
if (ganhador == 0) {
    mensagem.innerText = "EMPATE"
} else if (ganhador == 1) {
    mensagem.innerText = "JOGADOR GANHOU"
    jogadorpontos++
} else if (ganhador == 2) {
    mensagem.innerText = "COMPUTADOR GANHOU"
    computadorpontos++
}

let pontosJ = document.getElementById("jogadorpontos")
let pontosC = document.getElementById("computadorpontos")
pontosJ.innerText = jogadorpontos
pontosC.innerText = computadorpontos

}
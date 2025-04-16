
function tarefaDemorada(nome, tempo) {
setTimeout(() => {
console.log(`Tarefa ${nome} concluida`)
}, tempo)
}

console.log("iniciado o programa")
console.log("Executando a tarefa 1")
tarefaDemorada(1, 3000) 
console.log("Executando a tarefa 2")
tarefaDemorada(2, 3000) 

console.log("Programa Finalizado (mas as tarefas ainda estão acontecendo)")
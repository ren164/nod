function tarefaDemorada () {
    const agora = new Date();
    const futuro = agora.getTime() + 3000
    while (new Date().getTime() < futuro) {}
}

console.log("iniciando o programa...")
console.log("executando tarefa 1")
tarefaDemorada()
console.log("tarefa 1 concluida")

console.log("executando tarefa 2")
tarefaDemorada()
console.log("tarefa 2 concluida")
console.log("programa finalizado")
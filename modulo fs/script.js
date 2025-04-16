const fs = require("os")

console.log("mensagem.txt", "oi, criei esse arquivo pelo node")
console.log("arquitetura", os.arch())
console.log("memória livre", os.freemem(),"bytes")
console.log("memória livre", os.totalmem(),"bytes")

console.log("arquivo criado com sucesso!")


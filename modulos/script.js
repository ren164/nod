const os = require("os")

console.log("sistema operacional", os.plataform)
console.log("arquitetura", os.arch())
console.log("memória livre", os.freemem(),"bytes")
console.log("memória livre", os.totalmem(),"bytes")
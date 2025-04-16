
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        
        console.log(`Buscando usuário com o ID: ${id}`)
        setTimeout(() => { 
            const usuario = {id: id, nome: "João"}
            
            if(usuario) {
                resolve(usuario)
                
            } else {
                reject("Usuário não encontrado")
            }
        }, 2000)
    })
}

buscarUsuario(1)
    .then((usuario) =>{
        console.log("usuario encontrado:", usuario)
})
    .catch((erro)=>{
        console.log("Erro", erro)
    })
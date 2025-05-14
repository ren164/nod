document. addEventListener("DOMContentLoaded", () => {

const valorInput = document. getElementById("valor")
const moedaOrigem = document.getElementById("moeda-origem")
const moedaDestino = document.getElementById("moeda-destino")
const converter = document.getElementById("converter")
const valorConvertido = document.getElementById("valor-convertido")

converter. addEventListener("click", async () => {
const valor = valorInput. value
const moeda = moedaOrigem. value
const destino = moedaDestino. value
if(!valor || valor<= 0){
    alert("insira um valor válido")
    return
}
  try{
    converter.disable=true
    converter.textContent="convertendo"
    valorConvertido.textContent="calculando..."

    const resposta = await fetch( `/converter?valor=${valor}&de=${moeda}&para=${destino}`)
    const dados = await resposta. json()

  const valorFormatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: destino
}) . format(dados.valorConvertido)

valorConvertido. textContent = valorFormatado
} catch (erro) {
console.error("erro completo: ", erro) 
alert("Erro para converter moeda" + erro.mensage)

} finally{
  converter.disable = false
  converter.textContent="Converter"
}
  })

})

const filmesfavoritos = []

console.log(filmesfavoritos)
// push para colocar nomes na lista
filmesfavoritos.push('Interestelar')
filmesfavoritos.push('B99')
filmesfavoritos.push('Kunfsão')
filmesfavoritos.push('Demon slayer')
filmesfavoritos.push('Pokémon')
filmesfavoritos.push('Star Wars')

//Propriedade length
console.log(filmesfavoritos, filmesfavoritos.length);

//consigo acessar itens pelo seu índice
//os elementos sempre começam na posição 0
//acessando elemento especifico pelo índice
console.log(filmesfavoritos[3]);

//substituir de um valor do array através do seu índice
filmesfavoritos[4] = '4002'

//Métodos para percorrer um array

//for tradicional
//estrutura padrão do for
//for(início; condição; incremento)
//entendendo para imprimir a variável i, que represemta o indice array, e fimesfavoritos[i], que representa o elemntos do array na posição i
for( let i = 0; i < filmesfavoritos.length; i++) {
console.log (filmesfavoritos[i])
}

//foreach           função de callback - função dentro de função (vai aparecer uma função sem nome (anônima)
filmesfavoritos.forEach(function(item){
console.log(item)
})
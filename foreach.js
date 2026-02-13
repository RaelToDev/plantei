const filmesfavoritos = []

console.log(filmesfavoritos)
// push para colocar nomes na lista
filmesfavoritos.push('Interestelar')
filmesfavoritos.push('B99')
filmesfavoritos.push('Kunfsão')
filmesfavoritos.push('Demon slayer')
filmesfavoritos.push('Pokémon')
filmesfavoritos.push('Star Wars')




//foreach           função de callback - função dentro de função (vai aparecer uma função sem nome (anônima)
filmesfavoritos.forEach(function(filme){
console.log(filme)
})